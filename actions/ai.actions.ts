"use server";

import ai from "@/lib/ai";

export const getCareerRelevantSkills = async (career = "web developer") => {
  "use cache";

  const result = await ai.prompt(
    `what skills is relevant in 2025 as a ${career}? return the output in this format:
    
    {
      career_name: string,
      valid_career: boolean,
      relevant_skills: [{ category: string, skills: string[] }, ...]
    }
    .`
  );
  return result;
};
