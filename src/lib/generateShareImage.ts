// IG 分享圖片產生器
// 使用 Canvas 在前端產生可下載的圖片

export interface ShareImageOptions {
  cardId: string;
  cardName: string;
  cardImageUrl: string;
  shareText: string;
}

export async function generateShareImage(options: ShareImageOptions): Promise<void> {
  const { cardId, cardName, cardImageUrl, shareText } = options;

  // 建立 Canvas（IG 直式尺寸 1080x1350）
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("無法建立 Canvas context");
  }

  const width = 1080;
  const height = 1350;
  canvas.width = width;
  canvas.height = height;

  // 背景色（淺米色，與網站風格一致）
  ctx.fillStyle = "#F9F7F2";
  ctx.fillRect(0, 0, width, height);

  // 載入卡片圖片
  const cardImage = await loadImage(cardImageUrl);

  // 計算卡片圖片位置（置中，保持比例）
  const cardMaxWidth = 600;
  const cardMaxHeight = 900;
  const cardAspect = cardImage.width / cardImage.height;
  let cardDrawWidth = cardMaxWidth;
  let cardDrawHeight = cardDrawWidth / cardAspect;

  if (cardDrawHeight > cardMaxHeight) {
    cardDrawHeight = cardMaxHeight;
    cardDrawWidth = cardDrawHeight * cardAspect;
  }

  const cardX = (width - cardDrawWidth) / 2;
  const cardY = 120;

  // 繪製卡片陰影
  ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;

  // 繪製卡片圖片
  ctx.drawImage(cardImage, cardX, cardY, cardDrawWidth, cardDrawHeight);

  // 重置陰影
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 繪製卡片名稱
  ctx.fillStyle = "#4a5548";
  ctx.font = "bold 48px serif";
  ctx.textAlign = "center";
  ctx.fillText(cardName, width / 2, cardY + cardDrawHeight + 80);

  // 繪製分享文字（多行處理）
  ctx.fillStyle = "#6b7280";
  ctx.font = "32px sans-serif";
  const maxTextWidth = width - 120;
  const lines = wrapText(ctx, shareText, maxTextWidth);
  let textY = cardY + cardDrawHeight + 140;
  for (const line of lines) {
    ctx.fillText(line, width / 2, textY);
    textY += 44;
  }

  // 繪製底部品牌文字
  ctx.fillStyle = "#9ca3af";
  ctx.font = "24px sans-serif";
  ctx.fillText("牟尼花精指引 MUNI", width / 2, height - 60);

  // 轉換為 Blob 並下載
  canvas.toBlob((blob) => {
    if (!blob) {
      throw new Error("無法產生圖片");
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `muni-${cardId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, "image/png");
}

// 載入圖片的 Promise 包裝
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// 文字換行處理
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  const paragraphs = text.split("\n");

  for (const paragraph of paragraphs) {
    const words = paragraph.split("");
    let currentLine = "";

    for (const char of words) {
      const testLine = currentLine + char;
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && currentLine !== "") {
        lines.push(currentLine);
        currentLine = char;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }
  }

  return lines;
}
