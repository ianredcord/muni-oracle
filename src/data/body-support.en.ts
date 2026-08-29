// 身體支持點英文版文案。結構資料（slug / type / image / pairings）沿用
// body-support.ts，此處只提供各點的英文敘述。
import type { BodySupportPoint } from "./body-support";

export type BodySupportPointText = Pick<
  BodySupportPoint,
  | "title"
  | "shortLabel"
  | "locationText"
  | "acupointName"
  | "helperText"
  | "supportText"
  | "usageText"
  | "pairingText"
>;

const PAIRING_TEXT =
  "Draw a flower essence card first, take in the MUNI Scent, then place the Somaniks.";

export const BODY_SUPPORT_TEXT_EN: Record<string, BodySupportPointText> = {
  ki6: {
    title: "When you can't hold it up any longer",
    shortLabel: "Steadying",
    locationText: "Inner ankle",
    acupointName: "Zhaohai KI-6",
    helperText: "In the hollow just below the inner ankle bone",
    supportText: [
      "Lets the body settle, slowly",
      "Brings back a little of the feeling of being anchored",
      "Helps you need to brace less",
    ],
    usageText:
      "Once it's on, just let your breathing slow. Nothing else to do — let the body adjust in its own time.",
    pairingText: PAIRING_TEXT,
  },
  sp4: {
    title: "When you're scattered and can't find your centre",
    shortLabel: "Centring",
    locationText: "Inner edge of the foot",
    acupointName: "Gongsun SP-4",
    helperText: "Along the inner foot, below the bone in front of the arch",
    supportText: [
      "Supports the return to a steadier centre",
      "Lets a scattered feeling settle",
      "Helps a sense of direction come back more easily",
    ],
    usageText:
      "Once it's on, feel the contact between your soles and the floor first, and let attention come slowly back to you.",
    pairingText: PAIRING_TEXT,
  },
  si3: {
    title: "When you're drifting and can't get back to now",
    shortLabel: "Returning",
    locationText: "Outer edge of the little finger",
    acupointName: "Houxi SI-3",
    helperText:
      "Make a fist: just behind the ridge at the base of the little finger",
    supportText: [
      "Supports a slow return to the present",
      "Brings attention back into the body",
      "Helps the feeling of being here take hold",
    ],
    usageText:
      "Once it's on, rest your attention on the sensation in your hand and stay for a few natural breaths.",
    pairingText: PAIRING_TEXT,
  },
  bl62: {
    title: "When you need to land and come back to the body",
    shortLabel: "Grounding",
    locationText: "Outer ankle",
    acupointName: "Shenmai BL-62",
    helperText: "In the hollow below the outer ankle bone",
    supportText: [
      "Supports a return to more solid ground",
      "Lets a scattered, floating feeling settle",
      "Helps the body find some steadiness underneath it",
    ],
    usageText:
      "Once it's on, bring your attention to the soles of your feet and feel yourself received by the floor.",
    pairingText: PAIRING_TEXT,
  },
  pc6: {
    title: "When your chest is tight and you can't stop",
    shortLabel: "Releasing pressure",
    locationText: "Inner wrist",
    acupointName: "Neiguan PC-6",
    helperText: "About three finger-widths above the crease of the inner wrist",
    supportText: [
      "Releases the tightness and pressure in the chest",
      "Lets the can't-stop feeling loosen",
      "Helps thought and breath ease down",
    ],
    usageText:
      "Once it's on, there's no need to adjust yourself. Let the breath slow, and let the body come down on its own.",
    pairingText: PAIRING_TEXT,
  },
  sj5: {
    title: "When you're too full, too tight, and need to loosen",
    shortLabel: "Releasing tension",
    locationText: "Outer wrist",
    acupointName: "Waiguan SJ-5",
    helperText: "About three finger-widths above the crease on the back of the wrist",
    supportText: [
      "Releases the tension the body has stored",
      "Lets a state of over-effort loosen",
      "Helps you back to a more natural rhythm",
    ],
    usageText:
      "Once it's on, let your shoulders and arms be easy. Nothing needs to be done deliberately.",
    pairingText: PAIRING_TEXT,
  },
  gb41: {
    title: "When something feels stuck",
    shortLabel: "Unsticking",
    locationText: "Outer top of the foot",
    acupointName: "Zulinqi GB-41",
    helperText:
      "In the hollow on the outer top of the foot, between the fourth and fifth toe bones",
    supportText: [
      "Releases the stuck feeling held in the body",
      "Gives held-down emotion room to move",
      "Helps what can't be said begin to loosen",
    ],
    usageText:
      "Once it's on, stand or sit steadily and feel the contact between your feet and the ground, so the stuck feeling has somewhere to move.",
    pairingText: PAIRING_TEXT,
  },
  lu7: {
    title: "When you need a boundary and some space",
    shortLabel: "Releasing pressure",
    locationText: "Thumb side of the wrist",
    acupointName: "Lieque LU-7",
    helperText:
      "In the small hollow above the wrist, beside the bone on the thumb side",
    supportText: [
      "Releases the pressure and pull coming from outside",
      "Puts a little more space between you and everything else",
      "Helps the body set down some of its sensitivity",
    ],
    usageText:
      "Once it's on, don't rush to answer anything. Give yourself a short stretch of quiet.",
    pairingText: PAIRING_TEXT,
  },
};
