// Array of Resumes
export const resumes: Resume[] = [
    {
      id: "1",
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
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "2",
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
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "3",
      companyName: "Apple",
      jobTitle: "iOS Developer",
      imagePath: "/images/resume_03.png",
      resumePath: "/resumes/resume-3.pdf",
      feedback: {
        overallScore: 75,
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
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
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
          skills: {
            score: 90,
            tips: [],
          },
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
          skills: {
            score: 90,
            tips: [],
          },
        },
      },
      {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
          overallScore: 75,
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
          skills: {
            score: 90,
            tips: [],
          },
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
  }, null, 2)
  
  export const prepareInstructions = ({
    jobTitle,
    jobDescription,
  }: {
    jobTitle: string;
    jobDescription: string;
  }) =>
      `You are an expert in ATS (Applicant Tracking Systems), resume optimization, and technical job-fit analysis.
      Analyze the provided resume thoroughly and provide a detailed review across each category. Give honest feedback — if the resume is weak or misaligned, assign appropriately low scores.
      Use the job title and job description below to evaluate how well the resume matches the role. Highlight missing keywords, technologies, or qualifications.
      Prioritize impact-driven feedback: point out missing metrics, vague bullet points, or unquantified achievements.
      The job title is: ${jobTitle}
      The job description is: ${jobDescription}
      Respond strictly in the following JSON format: ${AIResponseFormat}. Do not include markdown, backticks, or any surrounding text. Only return valid JSON. 
      `;