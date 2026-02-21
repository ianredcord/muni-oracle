"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import acupointsData from "@/data/acupoints.json";

interface Acupoint {
  name: string;
  code: string;
  anatomy: string;
  location: string;
  meridian: string;
  properties: string;
  indications: string;
  technique: string;
  needleFeeling: string;
  application: string;
  notes: string;
  configNotes: string | string[];
  imageUrls: string[];
}

interface Section {
  id: string;
  bodyPart: string;
  acupoints: Acupoint[];
}

const sections = acupointsData as Section[];

export default function AcupunctureClient() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedAcupoint, setSelectedAcupoint] = useState<Acupoint | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections
      .map((section) => ({
        ...section,
        acupoints: section.acupoints.filter(
          (ap) =>
            ap.name.toLowerCase().includes(q) ||
            ap.indications.toLowerCase().includes(q) ||
            ap.meridian.toLowerCase().includes(q) ||
            ap.location.toLowerCase().includes(q)
        ),
      }))
      .filter((section) => section.acupoints.length > 0);
  }, [searchQuery]);

  const totalCount = sections.reduce((sum, s) => sum + s.acupoints.length, 0);

  return (
    <>
      {/* 搜尋列 */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="搜尋穴位名稱、主治症狀、歸經..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4a5548]/30 focus:border-[#4a5548] transition-all"
          />
        </div>
        <p className="text-center text-stone-400 text-sm mt-3">
          共收錄 {totalCount} 個穴位，分佈於十大部位
        </p>
      </div>

      {/* 部位列表 */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredSections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm"
          >
            {/* 部位標題 */}
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === section.id ? null : section.id
                )
              }
              className="w-full flex items-center justify-between p-5 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-gradient-to-br from-[#4a5548] to-[#6b8f6b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {section.id.slice(0, 2)}
                </span>
                <div className="text-left">
                  <h3 className="font-serif text-lg font-bold text-[#4a5548]">
                    {section.id}
                  </h3>
                  <p className="text-sm text-stone-500">
                    【{section.bodyPart}】· {section.acupoints.length} 個穴位
                  </p>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${
                  expandedSection === section.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* 穴位卡片列表 */}
            {expandedSection === section.id && (
              <div className="px-5 pb-5 border-t border-stone-100">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
                  {section.acupoints.map((ap, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAcupoint(ap)}
                      className="group bg-stone-50 hover:bg-[#4a5548] rounded-xl p-3 text-left transition-all duration-200 border border-stone-100 hover:border-[#4a5548]"
                    >
                      {ap.imageUrls.length > 0 && (
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 bg-white">
                          <Image
                            src={ap.imageUrls[0]}
                            alt={ap.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            unoptimized
                          />
                        </div>
                      )}
                      <p className="font-serif font-bold text-sm text-[#4a5548] group-hover:text-white truncate">
                        {ap.name}
                      </p>
                      {ap.meridian && (
                        <p className="text-xs text-stone-400 group-hover:text-white/70 truncate mt-0.5">
                          {ap.meridian}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 穴位詳細彈窗 */}
      {selectedAcupoint && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedAcupoint(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 彈窗標題 */}
            <div className="sticky top-0 bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <h3 className="font-serif text-xl font-bold text-[#4a5548]">
                {selectedAcupoint.name}
              </h3>
              <button
                onClick={() => setSelectedAcupoint(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-stone-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* 穴位圖片 */}
              {selectedAcupoint.imageUrls.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedAcupoint.imageUrls.map((url, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden bg-stone-50 border border-stone-100"
                    >
                      <Image
                        src={url}
                        alt={`${selectedAcupoint.name} 圖${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* 穴位編碼 */}
              {selectedAcupoint.code && (
                <p className="text-sm text-[#9A7B4F] font-medium">
                  {selectedAcupoint.code}
                </p>
              )}

              {/* 詳細資訊 */}
              {[
                { label: "解剖", value: selectedAcupoint.anatomy },
                { label: "取穴", value: selectedAcupoint.location },
                { label: "歸經", value: selectedAcupoint.meridian },
                { label: "穴性", value: selectedAcupoint.properties },
                { label: "主治", value: selectedAcupoint.indications },
                { label: "針法與劑量", value: selectedAcupoint.technique },
                { label: "針感", value: selectedAcupoint.needleFeeling },
                { label: "應用", value: selectedAcupoint.application },
                { label: "說明", value: selectedAcupoint.notes },
                { label: "配穴", value: Array.isArray(selectedAcupoint.configNotes) ? selectedAcupoint.configNotes.join('\n') : selectedAcupoint.configNotes },
              ]
                .filter((item) => item.value)
                .map((item) => (
                  <div key={item.label}>
                    <h4 className="text-sm font-bold text-[#4a5548] mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#9A7B4F] rounded-full" />
                      {item.label}
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed pl-4 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                ))}

              {/* MUNI 搭配建議 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
                <h4 className="font-serif font-bold text-[#9A7B4F] mb-2">
                  MUNI 搭配建議
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  在{selectedAcupoint.name}
                  貼上 Somaniks 日本針灸貼，搭配 MUNI
                  聖杯精油在穴位周圍輕柔按摩，可增強穴位刺激效果，促進氣血循環。
                </p>
                <a
                  href="https://ai.munione.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[#9A7B4F] hover:text-[#8A6B3F] text-sm font-medium transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  詢問療癒顧問最適合的搭配方案
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
