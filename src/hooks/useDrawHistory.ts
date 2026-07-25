"use client";

import { useSyncExternalStore } from "react";
import {
  subscribe,
  getHistory,
  getServerHistory,
  type DrawRecord,
} from "@/lib/drawHistory";

/**
 * 讀取本機抽牌紀錄。
 * 伺服器端與 hydration 當下回傳空陣列，掛載後才顯示實際紀錄，避免畫面不一致。
 */
export function useDrawHistory(): DrawRecord[] {
  return useSyncExternalStore(subscribe, getHistory, getServerHistory);
}
