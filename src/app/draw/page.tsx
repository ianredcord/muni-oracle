"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FLOWERS, type FlowerCard } from "@/data/flowers.generated";
import { ZH } from "@/content/zh";
import { Header } from "@/components/Header";
import Image from "next/image";
import { cn } from "@/lib/utils";

type DrawPhase = "initial" | "shuffling" | "selecting" | "revealing";

export default function DrawPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<DrawPhase>("initial");
  const [shuffledCards, setShuffledCards] = useState<FlowerCard[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 初始化時洗牌
  useEffect(() => {
    shuffleCards();
  }, []);

  // 洗牌函數
  const shuffleCards = () => {
    const shuffled = [...FLOWERS].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setSelectedIndex(null);
    setPhase("initial");
  };

  // 開始洗牌動畫
  const handleStartShuffle = () => {
    setPhase("shuffling");
    // 洗牌動畫後進入選牌階段
    setTimeout(() => {
      setPhase("selecting");
    }, 1500);
  };

  // 選擇牌卡
  const handleCardClick = (index: number) => {
    if (phase !== "selecting") return;
    
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  // 揭示結果
  const handleReveal = () => {
    if (selectedIndex === null) return;
    setPhase("revealing");
    
    // 短暫延遲後跳轉到結果頁
    setTimeout(() => {
      const selectedCard = shuffledCards[selectedIndex];
      router.push(`/draw/result?card=${selectedCard.slug}`);
    }, 800);
  };

  // 牌卡堆疊數量
  const stackCount = 10;
  
  // 牌卡比例 (300x537 = 約 1:1.79)
  const cardWidth = 140; // 手機版寬度
  const cardHeight = Math.round(cardWidth * 1.79); // 保持正確比例

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 overflow-x-hidden">
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

      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center pt-24">
        {/* 標題區 */}
        <header className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {ZH.draw.title}
            </h1>
            <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">
              {phase === "initial" && ZH.draw.subtitle}
              {phase === "shuffling" && "正在洗牌..."}
              {phase === "selecting" && ZH.draw.selectHint}
              {phase === "revealing" && "正在揭示您的指引..."}
            </p>
          </motion.div>
        </header>

        {/* 牌卡區域 */}
        <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {/* 初始狀態：牌卡堆疊（傾斜堆疊效果，完整顯示） */}
            {phase === "initial" && (
              <motion.div
                key="initial"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center"
              >
                {/* 牌卡堆疊效果 - 傾斜堆疊，完整顯示 */}
                <div 
                  className="relative mb-12"
                  style={{ 
                    width: cardWidth + stackCount * 3 + 40, 
                    height: cardHeight + stackCount * 2 + 40 
                  }}
                >
                  {[...Array(stackCount)].map((_, i) => {
                    // 計算每張牌的位置，形成傾斜堆疊效果
                    const offsetX = (stackCount - 1 - i) * 3;
                    const offsetY = (stackCount - 1 - i) * 2;
                    const rotation = -8;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-xl overflow-hidden"
                        style={{
                          width: cardWidth,
                          height: cardHeight,
                          left: "50%",
                          top: "50%",
                          marginLeft: -cardWidth / 2,
                          marginTop: -cardHeight / 2,
                          zIndex: i,
                          boxShadow: i === stackCount - 1 
                            ? "0 10px 30px rgba(0,0,0,0.25), 0 5px 15px rgba(0,0,0,0.15)" 
                            : "0 2px 4px rgba(0,0,0,0.1)"
                        }}
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: -offsetX,
                          y: offsetY,
                          rotate: rotation,
                        }}
                        transition={{ 
                          delay: (stackCount - 1 - i) * 0.03,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                      >
                        <Image
                          src="/cards/back.jpg"
                          alt="Card Back"
                          width={cardWidth}
                          height={cardHeight}
                          className="w-full h-full object-contain"
                          priority={i === stackCount - 1}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* 開始洗牌按鈕 */}
                <motion.button
                  onClick={handleStartShuffle}
                  className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ZH.draw.startShuffle}
                </motion.button>
              </motion.div>
            )}

            {/* 洗牌動畫 */}
            {phase === "shuffling" && (
              <motion.div
                key="shuffling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-80 h-72 mb-8">
                  {[...Array(16)].map((_, i) => {
                    const smallCardWidth = 70;
                    const smallCardHeight = Math.round(smallCardWidth * 1.79);
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-lg overflow-hidden shadow-md"
                        style={{
                          width: smallCardWidth,
                          height: smallCardHeight,
                          left: "50%",
                          top: "50%",
                          marginLeft: -smallCardWidth / 2,
                          marginTop: -smallCardHeight / 2,
                        }}
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          rotate: -8,
                          opacity: 0,
                          scale: 0.8
                        }}
                        animate={{ 
                          x: [0, (Math.random() - 0.5) * 220, (Math.random() - 0.5) * 100],
                          y: [0, (Math.random() - 0.5) * 140, (Math.random() - 0.5) * 70],
                          rotate: [-8, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 30],
                          opacity: [0, 1, 1],
                          scale: [0.8, 1, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.04,
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src="/cards/back.jpg"
                          alt="Card Back"
                          width={smallCardWidth}
                          height={smallCardHeight}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    );
                  })}
                </div>
                <p className="text-[#4a5548] text-lg animate-pulse">洗牌中...</p>
              </motion.div>
            )}

            {/* 選牌階段：牌卡網格 */}
            {(phase === "selecting" || phase === "revealing") && (
              <motion.div
                key="selecting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 sm:gap-3 max-w-4xl mx-auto mb-8">
                  {shuffledCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateY: 0,
                        y: selectedIndex === index ? -12 : 0,
                      }}
                      transition={{ 
                        delay: index * 0.02,
                        y: { duration: 0.2 }
                      }}
                      className="relative"
                    >
                      <div
                        onClick={() => handleCardClick(index)}
                        className={cn(
                          "aspect-[1/1.79] rounded-lg cursor-pointer transition-all duration-300 overflow-hidden border-2",
                          selectedIndex === index 
                            ? "border-[#9A7B4F] shadow-lg ring-2 ring-[#9A7B4F]/30 z-10" 
                            : "border-transparent hover:border-stone-300 hover:shadow-md hover:-translate-y-1",
                          phase === "revealing" && selectedIndex !== index && "opacity-50"
                        )}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/cards/back.jpg"
                            alt="Card Back"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 100px"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 提示文字 */}
                <p className="text-center text-stone-400 text-sm mb-4">
                  {ZH.draw.clickHint}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 底部操作按鈕 */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
          <AnimatePresence>
            {phase === "selecting" && selectedIndex !== null && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={handleReveal}
                className="bg-[#9A7B4F] hover:bg-[#8A6B3F] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ZH.draw.reveal}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
