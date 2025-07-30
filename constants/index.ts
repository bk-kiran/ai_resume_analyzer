// Array of Resumes
export const resumes: Resume[] = [
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
          overallScore: 85,
          ATS: {
            score: 90,
            tips: [],
          },
          toneAndStyle: {
            score: 90,
            tips: [],
          },
          content: {
            score: 90,
            tips: [],
          },
          structure: {
            score: 90,
            tips: [],
          },
          impactOrientation: {
            score: 0,
            quantifiedStatements: 0,
            examples: [],
            improvementAreas: [],
            tips: [{ type: "good", tip: "", explanation: "" }],
          },
          jobSuitability: {
            matchScore: 0,
            matchSummary: "",
            matchingTechnologies: [],
            missingRequirements: [],
            recommendation: "partial match",
            tips: [{ type: "improve", tip: "", explanation: "" }],
          }, 
          priorityFixes: [{ item: "", explanation: "" }],
          strengths: [""],
          weaknesses: [""],
        },
      },
      {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
          overallScore: 55,
          ATS: {
            score: 90,
            tips: [],
          },
          toneAndStyle: {
            score: 90,
            tips: [],
          },
          content: {
            score: 90,
            tips: [],
          },
          structure: {
            score: 90,
            tips: [],
          },
          impactOrientation: {
            score: 0,
            quantifiedStatements: 0,
            examples: [],
            improvementAreas: [],
            tips: [{ type: "good", tip: "", explanation: "" }],
          },
          jobSuitability: {
            matchScore: 0,
            matchSummary: "",
            matchingTechnologies: [],
            missingRequirements: [],
            recommendation: "partial match",
            tips: [{ type: "improve", tip: "", explanation: "" }],
          }, 
          priorityFixes: [{ item: "", explanation: "" }],
          strengths: [""],
          weaknesses: [""],
        },
      },
  ];
  
  export const AIResponseFormat = JSON.stringify({
    overallScore: 0,
    ATS: {
      score: 0,
      tips: [{ type: "good", tip: "" }],
    },
    toneAndStyle: {
      score: 0,
      tips: [{ type: "improve", tip: "", explanation: "" }],
    },
    content: {
      score: 0,
      tips: [{ type: "good", tip: "", explanation: "" }],
    },
    structure: {
      score: 0,
      tips: [{ type: "improve", tip: "", explanation: "" }],
    },
    impactOrientation: {
      score: 0,
      quantifiedStatements: 0,
      examples: [],
      improvementAreas: [],
      tips: [{ type: "good", tip: "", explanation: "" }],
    },
    jobSuitability: {
      matchScore: 0,
      matchSummary: "",
      matchingTechnologies: [],
      missingRequirements: [],
      recommendation: "partial match",
      tips: [{ type: "improve", tip: "", explanation: "" }],
    },
    priorityFixes: [{ item: "", explanation: "" }],
    strengths: [
      // AI will fill this with key strong points in the resume
      "",
    ],
    weaknesses: [
      // AI will fill this with areas needing improvement
      "",
    ],
  }, null, 2);
  
  export const prepareInstructions = ({
    jobTitle,
    jobDescription,
  }: {
    jobTitle: string;
    jobDescription: string;
  }) =>
      `You are an expert in ATS (Applicant Tracking Systems), resume optimization, and technical job-fit analysis.
      Analyze the provided resume thoroughly and provide a detailed review across each category. Give honest feedback — if the resume is weak or misaligned, assign appropriately low scores but don't be too strict at the same time.
      Score each category on a scale from 0 to 100. 1) 0 means no relevance or very poor quality 2) 100 means an excellent, perfectly aligned resume. 3) For partial matches or some alignment, assign scores between 30 and 70. 4) Avoid assigning zero scores unless the resume completely lacks relevant content.
      Use the job title and job description below to evaluate how well the resume matches the role. Highlight missing keywords, technologies, or qualifications.
      Prioritize impact-driven feedback: point out missing metrics, vague bullet points, or unquantified achievements.
      The job title is: ${jobTitle}
      The job description is: ${jobDescription}
      Provide the feedback using the following format: ${AIResponseFormat}
      Respond with **ONLY valid JSON**.Do NOT include any text outside the JSON. No apologies, explanations, or markdown. If you cannot generate the JSON, respond with an empty JSON object: {}.
      `;

      