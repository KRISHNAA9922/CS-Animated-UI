import { getAllEntries } from "@/contentstack-sdk";

export const getHeroSection = async () => {
  try {
    const entries: any = await getAllEntries("homepage_content_model_fields"); // ✅ Correct UID
    if (entries && entries.length > 0) {
      return entries[0].hero; // ✅ `hero` is a group inside this entry
    }
    return null;
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
};

export const getMovingLogos = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    return entries[0]?.movinglogo; // group field
  } catch (error) {
    console.error("Error fetching moving logos:", error);
    return null;
  }
};

export const getGyngerPaySection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const gyngerPayData = entries[0]?.gynger_pay_section;
    console.log("🚀 Gynger Pay Section Data:", gyngerPayData); // optional debug
    return gyngerPayData;
  } catch (error) {
    console.error("❌ Error fetching Gynger Pay section:", error);
    return null;
  }
};
export const getGyngerCapitalSection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const capitalSection = entries[0]?.gynger_capital_section;
    console.log("💰 Gynger Capital Section Data:", capitalSection);
    return capitalSection;
  } catch (error) {
    console.error("❌ Error fetching Gynger Capital section:", error);
    return null;
  }
};
