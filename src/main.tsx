import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Pretendard 폰트 (self-hosted via fontsource)
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@fontsource/pretendard/900.css";

// Initialize Kakao SDK
declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
    };
  }
}

const initKakao = () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
  if (window.Kakao && kakaoKey && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
    console.log("Kakao SDK initialized");
  }
};

// Initialize after SDK loads
if (document.readyState === "complete") {
  initKakao();
} else {
  window.addEventListener("load", initKakao);
}

createRoot(document.getElementById("root")!).render(<App />);
