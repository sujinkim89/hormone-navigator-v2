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
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Initialize Google Analytics 4
// Reference: https://www.mykolaaleksandrov.dev/posts/2025/11/react-google-analytics-implementation/
let gaInitialized = false;

const initGA = () => {
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!gaMeasurementId || gaInitialized) return;
  gaInitialized = true;

  // Load gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  // IMPORTANT: Use 'arguments' object, not spread operator
  // This is critical for GA4 to work properly
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, {
    send_page_view: false, // Manual page view tracking for SPA
    debug_mode: import.meta.env.DEV,
    transport_type: "beacon", // Use sendBeacon API for reliability
  });
};

const initKakao = () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
  if (window.Kakao && kakaoKey && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
    console.log("Kakao SDK initialized");
  }
};

// Initialize SDKs
initGA();

// Initialize Kakao after SDK loads
if (document.readyState === "complete") {
  initKakao();
} else {
  window.addEventListener("load", initKakao);
}

createRoot(document.getElementById("root")!).render(<App />);
