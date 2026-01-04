"use client";

import { useRouter } from "next/navigation";
import { Suspense, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FLOWERS, type FlowerCard } from "@/data/flowers.generated";
import { parseDeepBody, SECTION_COLORS, cleanUnderlines } from "@/lib/parseDeepBody";
import { getShareText, generateShareUrl, openShareWindow } from "@/data/shareTexts";
import { generateShareImage } from "@/lib/generateShareImage";
import { ZH } from "@/content/zh";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


function ResultClient(props: { cardSlug: string }) {
  
  const router = useRouter();
  const cardSlug = props.cardSlug;
  const [activeTab, setActiveTab] = useState<"quick" | "deep" | "therapist">("quick");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  // 找到對應的花精
  const flower = FLOWERS.find(f => f.slug === cardSlug) || FLOWERS[0];
  
  // 切割深度解析段落
  const deepSections = parseDeepBody(flower.deep.body);

  // 取得分享文案
  const shareText = getShareText(flower.slug, flower.name);

  // 取得當前頁面 URL
  const getPageUrl = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  }, []);

  // 顯示分享提示彈窗
  const handleShowShareModal = useCallback(() => {
    setShowShareModal(true);
  }, []);

  // 複製文字後分享到 Facebook
  const handleCopyAndShareFacebook = useCallback(async () => {
    const pageUrl = getPageUrl();
    const textToCopy = shareText.fb;
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    // 關閉彈窗並開啟 Facebook 分享
    setShowShareModal(false);
    const shareUrl = generateShareUrl("facebook", pageUrl, shareText);
    openShareWindow(shareUrl);
  }, [getPageUrl, shareText]);

  // 分享到 Facebook（直接分享，不複製文字）
  const handleShareFacebook = useCallback(() => {
    const pageUrl = getPageUrl();
    const shareUrl = generateShareUrl("facebook", pageUrl, shareText);
    openShareWindow(shareUrl);
  }, [getPageUrl, shareText]);

  // 分享到 LINE
  const handleShareLine = useCallback(() => {
    const pageUrl = getPageUrl();
    const shareUrl = generateShareUrl("line", pageUrl, shareText);
    openShareWindow(shareUrl);
  }, [getPageUrl, shareText]);

  // 下載 IG 圖片
  const handleDownloadIGImage = useCallback(async () => {
    setIsGeneratingImage(true);
    try {
      await generateShareImage({
        cardId: flower.slug,
        cardName: flower.name,
        cardImageUrl: flower.image,
        shareText: shareText.ig || shareText.fb,
      });
    } catch (error) {
      console.error("產生圖片失敗:", error);
      alert("產生圖片失敗，請稍後再試");
    } finally {
      setIsGeneratingImage(false);
    }
  }, [flower, shareText]);

  // 複製分享文字
  const handleCopyShareText = useCallback(async () => {
    const pageUrl = getPageUrl();
    const textToCopy = `${shareText.fb}\n\n${pageUrl}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    } catch (error) {
      console.error("複製失敗:", error);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    }
  }, [getPageUrl, shareText]);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
        {/* 固定 Header */}
        <Header />

        {/* 背景 */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src="/images/home-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#F9F7F2]" />
        </div>

        <main className="relative z-10 container mx-auto px-4 py-8 max-w-4xl pt-24">
          {/* 返回按鈕 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <button
              onClick={() => router.push("/draw")}
              className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>{ZH.draw.result.again}</span>
            </button>
          </motion.div>

          {/* 牌卡展示區 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* 牌卡圖片 */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
                <Image
                  src={flower.image}
                  alt={flower.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* 花精名稱 */}
              <div className="text-center mt-4">
                <h1 className="font-serif text-2xl font-bold text-[#4a5548]">
                  {flower.name}
                </h1>
              </div>

              {/* 分享按鈕區 */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {/* Facebook 分享 */}
                <button
                  onClick={handleShowShareModal}
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full px-4 py-2 text-sm transition-colors"
                  title="分享到 Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="hidden sm:inline">Facebook</span>
                </button>

                {/* LINE 分享 */}
                <button
                  onClick={handleShareLine}
                  className="flex items-center gap-2 bg-[#00B900] hover:bg-[#00A000] text-white rounded-full px-4 py-2 text-sm transition-colors"
                  title="分享到 LINE"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  <span className="hidden sm:inline">LINE</span>
                </button>

                {/* IG 圖片下載 */}
                <button
                  onClick={handleDownloadIGImage}
                  disabled={isGeneratingImage}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-full px-4 py-2 text-sm transition-opacity disabled:opacity-50"
                  title="下載 IG 圖片"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="hidden sm:inline">
                    {isGeneratingImage ? "產生中..." : "下載圖片"}
                  </span>
                </button>

                {/* 複製分享文字 */}
                <button
                  onClick={handleCopyShareText}
                  className="flex items-center gap-2 bg-stone-500 hover:bg-stone-600 text-white rounded-full px-4 py-2 text-sm transition-colors"
                  title="複製分享文字"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">複製文字</span>
                </button>
              </div>

              {/* Toast 提示 */}
              {showCopyToast && (
                <div className="mt-3 text-center">
                  <span className="inline-block bg-stone-800 text-white text-sm px-4 py-2 rounded-full">
                    已複製分享文字！
                  </span>
                </div>
              )}

              {/* Facebook 分享提示彈窗 */}
              {showShareModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowShareModal(false)}>
                  <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-stone-800">分享到 Facebook</h3>
                      <button
                        onClick={() => setShowShareModal(false)}
                        className="text-stone-400 hover:text-stone-600"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-sm text-stone-600 mb-3">建議分享文字（點擊「複製並分享」後貼上）：</p>
                    
                    <div className="bg-stone-50 rounded-lg p-4 mb-4 text-sm text-stone-700 whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {shareText.fb}
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={handleCopyAndShareFacebook}
                        className="flex-1 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full px-4 py-3 text-sm font-medium transition-colors"
                      >
                        複製並分享
                      </button>
                      <button
                        onClick={() => {
                          setShowShareModal(false);
                          handleShareFacebook();
                        }}
                        className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-full px-4 py-3 text-sm font-medium transition-colors"
                      >
                        直接分享
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* MUNI 能量支持按鈕 */}
              <div className="mt-6">
                <Link
                  href="/energy-support"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4a5548] to-[#6b7a5f] hover:from-[#3d4a3c] hover:to-[#5a6950] text-white rounded-full px-6 py-3 text-base font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  MUNI 能量支持
                </Link>
              </div>
            </div>

            {/* 內容區域 */}
            <div className="flex-1 w-full">
              {/* Tab 切換 */}
              <div className="flex border-b border-stone-200 mb-6">
                <button
                  onClick={() => setActiveTab("quick")}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === "quick"
                      ? "text-[#4a5548] border-b-2 border-[#4a5548]"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {ZH.draw.result.tabQuick}
                </button>
                <button
                  onClick={() => setActiveTab("deep")}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === "deep"
                      ? "text-[#4a5548] border-b-2 border-[#4a5548]"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {ZH.draw.result.tabDeep}
                </button>
                <button
                  onClick={() => setActiveTab("therapist")}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === "therapist"
                      ? "text-[#4a5548] border-b-2 border-[#4a5548]"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {ZH.draw.result.tabTherapist}
                </button>
              </div>

              {/* 內容 */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "quick" && (
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                      <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                        {flower.quick.step1Title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                        {flower.quick.step1Body}
                      </p>
                    </div>

                    {/* Step 2 - 核心 */}
                    <div className="bg-[#9A7B4F]/10 rounded-xl p-5 shadow-sm border border-[#9A7B4F]/20">
                      <h3 className="text-xs text-[#9A7B4F] uppercase tracking-wider mb-2 font-medium">
                        {flower.quick.step2Title}
                      </h3>
                      <p className="text-[#9A7B4F] text-lg font-medium leading-relaxed whitespace-pre-line">
                        {flower.quick.step2Body}
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                      <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                        {flower.quick.step3Title}
                      </h3>
                      <p className="text-[#6b7c6b] leading-relaxed whitespace-pre-line">
                        {cleanUnderlines(flower.quick.step3Body)}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "deep" && (
                  <div className="space-y-4">
                    {/* 深度解析多區塊卡片 */}
                    {deepSections.map((section, index) => {
                      const colors = SECTION_COLORS[section.title] || { bg: "bg-stone-50/80", border: "border-stone-100" };
                      return (
                        <div 
                          key={index}
                          className={`${colors.bg} backdrop-blur-sm rounded-xl p-5 shadow-sm border ${colors.border}`}
                        >
                          <h3 className="text-sm font-medium text-[#4a5548] mb-3">
                            {section.title}
                          </h3>
                          <div className="whitespace-pre-line text-stone-600 leading-relaxed text-sm">
                            {section.content}
                          </div>
                        </div>
                      );
                    })}

                    {/* 覺察方式說明 */}
                    <div className="bg-[#4a5548]/5 rounded-xl p-5 shadow-sm border border-[#4a5548]/10 mt-6">
                      <h3 className="text-sm font-medium text-[#4a5548] mb-3">
                        {ZH.draw.result.howTo}
                      </h3>
                      <div className="whitespace-pre-line text-stone-600 leading-relaxed text-sm">
                        {cleanUnderlines(flower.deep.awareness)}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "therapist" && (
                  <div className="space-y-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-100">
                      <h3 className="text-sm font-medium text-[#4a5548] mb-3">
                        {ZH.draw.result.therapistZone}
                      </h3>
                      <div className="whitespace-pre-line text-stone-600 leading-relaxed text-sm">
                        {cleanUnderlines(flower.deep.therapist)}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* 操作按鈕 */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/draw")}
                  className="flex-1 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-6 py-3 text-center transition-colors"
                >
                  {ZH.draw.result.again}
                </button>
                <Link
                  href={`/flowers/${flower.slug}`}
                  className="flex-1 border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-6 py-3 text-center transition-colors"
                >
                  {ZH.draw.result.viewDetail}
                </Link>
              </div>
            </div>
          </motion.div>
        </main>
    </div>
  );
}

export default ResultClient;
