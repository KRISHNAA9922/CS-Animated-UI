import { getAllEntries } from "@/contentstack-sdk";

export const getHeroSection = async () => {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
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
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].movinglogo) {
      return entries[0].movinglogo;
    }
    return null;
  } catch (error) {
    console.error("Error fetching moving logos:", error);
    return null;
  }
};

export const getGrowthSection = async () => {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].growth_section) {
      return entries[0].growth_section;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Growth Section:", error);
    return null;
  }
};

export const getGyngerPaySection = async () => {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].gynger_pay_section) {
      return entries[0].gynger_pay_section;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Gynger Pay section:", error);
    return null;
  }
};

export const getGyngerCapitalSection = async ()=> {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].gynger_capital_section) {
      return entries[0].gynger_capital_section;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Gynger Capital section:", error);
    return null;
  }
};

export const getGyngerSolution = async () => {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].gynger_solution) {
      return entries[0].gynger_solution;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Gynger Solution section:", error);
    return null;
  }
};

export const getConvenienceSection = async () => {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].convenience_section) {
      return entries[0].convenience_section;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Convenience section:", error);
    return null;
  }
};

export const getTestimonialSection = async ()=> {
  try {
    const entries = await getAllEntries("homepage_content_model_fields");
    if (entries && entries.length > 0 && entries[0].testimonial_section) {
      return entries[0].testimonial_section;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Testimonial section:", error);
    return null;
  }
};
