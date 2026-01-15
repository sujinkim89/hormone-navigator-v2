/**
 * Google Analytics 4 유틸리티 모듈
 * 핵심 이벤트 트래킹을 위한 함수들을 제공합니다.
 *
 * Reference: https://www.mykolaaleksandrov.dev/posts/2025/11/react-google-analytics-implementation/
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// GA가 초기화되었는지 확인
const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// gtag 함수 래퍼 - 안전하게 이벤트 전송
const sendEvent = (eventName: string, params?: Record<string, unknown>): void => {
  if (!isGAAvailable()) return;
  window.gtag('event', eventName, params);
};

// ============================================
// 페이지뷰 트래킹
// ============================================

export const trackPageView = (path: string, title?: string): void => {
  sendEvent('page_view', {
    page_path: path,
    page_title: title,
  });
};

// ============================================
// 핵심 이벤트 트래킹 함수들
// ============================================

/**
 * 성별 선택 이벤트
 */
export const trackSelectGender = (gender: 'female' | 'male'): void => {
  sendEvent('select_gender', {
    gender,
    gender_label: gender === 'female' ? '빌런 진단 (본인용)' : '빌런 대응력 (파트너용)',
  });
};

/**
 * 닉네임 자동 생성 이벤트
 */
export const trackNicknameGenerated = (): void => {
  sendEvent('nickname_generated', {
    action: 'auto_generate',
  });
};

/**
 * 퀴즈 시작 이벤트
 */
export const trackQuizStart = (gender: 'female' | 'male'): void => {
  sendEvent('quiz_start', {
    gender,
  });
};

/**
 * 퀴즈 질문 응답 이벤트
 */
export const trackQuizAnswer = (
  questionNumber: number,
  answerType: string,
  gender: 'female' | 'male'
): void => {
  sendEvent('quiz_answer', {
    question_number: questionNumber,
    answer_type: answerType,
    gender,
  });
};

/**
 * 퀴즈 완료 및 결과 도달 이벤트
 */
export const trackQuizComplete = (
  resultType: string,
  gender: 'female' | 'male'
): void => {
  sendEvent('quiz_complete', {
    result_type: resultType,
    gender,
  });
};

/**
 * 결과 페이지 도달 이벤트
 */
export const trackResultView = (
  resultType: string,
  gender: 'female' | 'male'
): void => {
  sendEvent('result_view', {
    result_type: resultType,
    gender,
  });
};

/**
 * 공유 이벤트
 */
export const trackShare = (
  method: 'instagram' | 'kakao' | 'x' | 'save_image' | 'copy_link' | 'other',
  resultType: string,
  gender: 'female' | 'male'
): void => {
  sendEvent('share', {
    method,
    content_type: 'quiz_result',
    item_id: resultType,
    gender,
  });
};

/**
 * RHABO CTA 클릭 이벤트
 */
export const trackRhaboCTAClick = (
  gender: 'female' | 'male',
  resultType: string
): void => {
  sendEvent('click_rhabo_cta', {
    gender,
    result_type: resultType,
    link_url: 'http://pf.kakao.com/_dlxkQn',
  });
};

/**
 * 재시작 버튼 클릭 이벤트
 */
export const trackRestartQuiz = (
  previousResultType: string,
  gender: 'female' | 'male'
): void => {
  sendEvent('restart_quiz', {
    previous_result_type: previousResultType,
    gender,
  });
};

/**
 * 닉네임 수정 이벤트
 */
export const trackNicknameEdit = (): void => {
  sendEvent('nickname_edit', {
    action: 'edit',
  });
};

/**
 * 공유 바텀시트 오픈 이벤트
 */
export const trackShareOpen = (resultType: string): void => {
  sendEvent('share_sheet_open', {
    result_type: resultType,
  });
};
