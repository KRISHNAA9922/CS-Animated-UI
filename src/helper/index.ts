import { getAllEntries } from "@/contentstack-sdk";

export const getHeroSection = async () => {
  try {
    const entries: any = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0) {
      return entries[0].hero;
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
    return entries[0]?.movinglogo;
  } catch (error) {
    console.error("Error fetching moving logos:", error);
    return null;
  }
};

export const getGrowthSection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const growthSection = entries[0]?.growth_section;
    console.log("Growth Section Data:", growthSection);
    return growthSection;
  } catch (error) {
    console.error("Error fetching Growth Section:", error);
    return null;
  }
};

export const getGyngerPaySection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const gyngerPayData = entries[0]?.gynger_pay_section;
    console.log("Gynger Pay Section Data:", gyngerPayData);
    return gyngerPayData;
  } catch (error) {
    console.error("Error fetching Gynger Pay section:", error);
    return null;
  }
};

export const getGyngerCapitalSection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const capitalSection = entries[0]?.gynger_capital_section;
    console.log("Gynger Capital Section Data:", capitalSection);
    return capitalSection;
  } catch (error) {
    console.error("Error fetching Gynger Capital section:", error);
    return null;
  }
};

export const getGyngerSolution = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const gyngerSolutionData = entries[0]?.gynger_solution;
    console.log("Gynger Solution Section:", gyngerSolutionData);
    return gyngerSolutionData;
  } catch (error) {
    console.error("Error fetching Gynger Solution section:", error);
    return null;
  }
};

export const getConvenienceSection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const convenienceData = entries[0]?.convenience_section;
    console.log("Convenience Section Data:", convenienceData);
    return convenienceData;
  } catch (error) {
    console.error("Error fetching Convenience section:", error);
    return null;
  }
};

export const getTestimonialSection = async () => {
  try {
    const entries: any[] = await getAllEntries("homepage_content_model_fields");
    const testimonialData = entries[0]?.testimonial_section;
    console.log("Testimonial Section Data:", testimonialData);
    return testimonialData;
  } catch (error) {
    console.error("Error fetching Testimonial section:", error);
    return null;
  }
};