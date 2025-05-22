"use client";  // Next.js app 디렉터리에서 useEffect 등 클라이언트 전용 훅을 쓰기 위해 필요합니다.
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Heroicons 설치되어 있어야 합니다.

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 보이기/숨기기
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 상단으로 부드럽게 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 
        p-3 bg-black text-white rounded-full shadow-lg 
        hover:bg-black/80 focus:outline-none
      "
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}