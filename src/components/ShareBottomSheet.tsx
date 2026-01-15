import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Download } from "lucide-react";
import { SiKakaotalk, SiX, SiInstagram } from "react-icons/si";
import { toast } from "sonner";
import { trackShare } from "@/lib/analytics";

interface ShareBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shareData: {
    title: string;
    text: string;
    url: string;
    typeTitle: string;
    emoji: string;
    nickname: string;
    gender: "male" | "female";
  };
  resultCardRef?: React.RefObject<HTMLDivElement>;
}

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
        }) => void;
      };
    };
  }
}

export const ShareBottomSheet = ({
  open,
  onOpenChange,
  shareData,
  resultCardRef,
}: ShareBottomSheetProps) => {
  const [isCapturing, setIsCapturing] = useState(false);

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      trackShare('copy_link', shareData.typeTitle, shareData.gender);
      await navigator.clipboard.writeText(shareData.url);
      toast.success("링크가 복사되었어요!");
      onOpenChange(false);
    } catch {
      toast.error("복사에 실패했어요");
    }
  };


  // html2canvas로 이미지 캡처하는 공통 함수
  const captureImage = async (): Promise<Blob | null> => {
    if (!resultCardRef?.current) {
      toast.error("캡처할 영역을 찾을 수 없어요");
      return null;
    }

    const html2canvas = (await import("html2canvas")).default;

    // 캡처 전 스타일 임시 조정 (배치 깨짐 방지)
    const element = resultCardRef.current;
    const originalStyle = element.getAttribute("style") || "";

    // 고정 너비 설정으로 레이아웃 안정화
    element.style.width = "375px";
    element.style.padding = "24px";
    element.style.boxSizing = "border-box";

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#F8E8FF",
        scale: 3, // 고해상도
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 375,
        windowWidth: 375,
        onclone: (clonedDoc) => {
          // 복제된 요소에서 추가 스타일 조정
          const clonedElement = clonedDoc.querySelector("[data-result-card]");
          if (clonedElement instanceof HTMLElement) {
            clonedElement.style.width = "375px";
            clonedElement.style.margin = "0";
            clonedElement.style.padding = "24px";
          }
        },
      });

      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
      });
    } finally {
      // 원래 스타일 복원
      element.setAttribute("style", originalStyle);
    }
  };

  // 이미지 저장 (결과 카드 캡처)
  const handleSaveImage = async () => {
    trackShare('save_image', shareData.typeTitle, shareData.gender);
    setIsCapturing(true);
    try {
      const blob = await captureImage();
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `pms-result-${shareData.nickname}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("이미지가 저장되었어요! 📸");
      }
      onOpenChange(false);
    } catch (error) {
      console.error("Image capture failed:", error);
      toast.error("이미지 저장에 실패했어요");
    } finally {
      setIsCapturing(false);
    }
  };

  // 인스타그램 스토리 공유 모듈
  const handleInstagramShare = async () => {
    trackShare('instagram', shareData.typeTitle, shareData.gender);
    setIsCapturing(true);
    try {
      const blob = await captureImage();
      if (!blob) {
        setIsCapturing(false);
        return;
      }

      const file = new File([blob], `pms-result-${shareData.nickname}.png`, {
        type: "image/png",
      });

      // Web Share API로 이미지 공유 (인스타그램 스토리 선택 가능)
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
            title: `${shareData.emoji} ${shareData.typeTitle}`,
            text: `나의 PMS ${shareData.gender === "female" ? "호르몬" : "대응"} 유형!\n${shareData.url}`,
          });
          toast.success("인스타그램 스토리로 공유되었어요! 📸");
          onOpenChange(false);
        } catch (shareError) {
          // 사용자가 공유 취소한 경우
          if ((shareError as Error).name === "AbortError") {
            // 취소는 정상 동작이므로 에러 표시하지 않음
            return;
          }
          throw shareError;
        }
      } else {
        // Web Share API를 지원하지 않는 경우
        toast.error("이 기기에서는 인스타그램 스토리 공유를 지원하지 않아요");
      }
    } catch (error) {
      // 사용자가 공유 취소한 경우 에러 무시
      if ((error as Error).name !== "AbortError") {
        console.error("Instagram share failed:", error);
        toast.error("공유에 실패했어요");
      }
    } finally {
      setIsCapturing(false);
    }
  };

  // 카카오톡 공유 모듈
  const handleKakaoShare = () => {
    trackShare('kakao', shareData.typeTitle, shareData.gender);
    try {
      if (window.Kakao && window.Kakao.isInitialized()) {
        window.Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: `나의 PMS 유형: ${shareData.typeTitle} ${shareData.emoji}`,
            description: shareData.text,
            imageUrl: `${window.location.origin}/og-main.png`,
            link: {
              mobileWebUrl: shareData.url,
              webUrl: shareData.url,
            },
          },
          buttons: [
            {
              title: "나도 테스트하기",
              link: {
                mobileWebUrl: shareData.url,
                webUrl: shareData.url,
              },
            },
          ],
        });
        toast.success("카카오톡으로 공유되었어요! 💬");
        onOpenChange(false);
      } else {
        // 카카오 SDK가 없으면 카카오톡 공유 URL scheme 사용
        const kakaoShareUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`;
        window.open(kakaoShareUrl, "_blank");
        toast.success("카카오톡 공유 창이 열렸어요! 💬");
        onOpenChange(false);
      }
    } catch (error) {
      console.error("Kakao share failed:", error);
      toast.error("카카오톡 공유에 실패했어요");
    }
  };

  // 엑스(X) 공유 모듈
  const handleTwitterShare = () => {
    trackShare('x', shareData.typeTitle, shareData.gender);
    try {
      const text = `${shareData.emoji} 나의 PMS ${shareData.gender === "female" ? "호르몬" : "대응"} 유형은 "${shareData.typeTitle}"!\n\n나도 테스트하기 👇`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(twitterUrl, "_blank", "width=550,height=420");
      toast.success("엑스(X) 공유 창이 열렸어요! 🐦");
      onOpenChange(false);
    } catch (error) {
      console.error("Twitter share failed:", error);
      toast.error("엑스(X) 공유에 실패했어요");
    }
  };

  // 기타 공유 (Web Share API)
  const handleOtherShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: shareData.url,
        });
        onOpenChange(false);
      } catch {
        // User cancelled
      }
    } else {
      toast.error("이 기기에서는 지원되지 않아요");
    }
  };

  const shareOptions = [
    {
      icon: SiInstagram,
      label: "인스타그램\n스토리",
      color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      iconColor: "text-white",
      onClick: handleInstagramShare,
      disabled: isCapturing,
    },
    {
      icon: SiKakaotalk,
      label: "카카오톡\n공유",
      color: "bg-[#FEE500]",
      iconColor: "text-[#3C1E1E]",
      onClick: handleKakaoShare,
    },
    {
      icon: SiX,
      label: "엑스(X)\n공유",
      color: "bg-black",
      iconColor: "text-white",
      onClick: handleTwitterShare,
    },
    {
      icon: Download,
      label: "이미지 저장",
      color: "bg-gradient-to-br from-violet to-deep-purple",
      iconColor: "text-white",
      onClick: handleSaveImage,
      disabled: isCapturing,
    },
  ];

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="pb-8">
        <DrawerHeader>
          <DrawerTitle className="text-center">공유하기</DrawerTitle>
        </DrawerHeader>

        <div className="px-6 pb-4">
          {/* Share Preview */}
          <div className="bg-gradient-to-r from-[#F8E8FF] to-[#E8D4F8] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{shareData.emoji}</span>
              <div className="flex-1">
                <p className="font-bold text-foreground">
                  {shareData.typeTitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {shareData.nickname}님의 결과
                </p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-4 gap-3">
            {shareOptions.map((option) => (
              <button
                key={option.label}
                onClick={option.onClick}
                disabled={option.disabled}
                className="flex flex-col items-center gap-2 group disabled:opacity-50"
              >
                <div
                  className={`w-14 h-14 rounded-full ${option.color} flex items-center justify-center transition-transform group-active:scale-95`}
                >
                  <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                </div>
                <span className="text-xs text-muted-foreground whitespace-pre-line text-center leading-tight">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Copy link button */}
          <button
            onClick={handleCopyLink}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white rounded-xl font-bold text-sm transition-transform active:scale-[0.98] shadow-lg shadow-purple-500/30"
          >
            🔗 링크 복사하기
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
