// 匿名裝置 id：reading 紀錄的 user_id。之後可換成會員 id，ReadingStore 介面不變。
const KEY = "muni.threeCard.device";

export function getDeviceId(): string {
  try {
    const cur = window.localStorage.getItem(KEY);
    if (cur) return cur;
    const id = `dev-${globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : Date.now().toString(36)}`;
    window.localStorage.setItem(KEY, id);
    return id;
  } catch {
    return "dev-anon";
  }
}
