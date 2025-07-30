// Declaring all of the types
interface Job {
    title: string;
    description: string;
    location: string;
    requiredSkills: string[];
  }
  
  interface Resume {
    id: string;
    companyName?: string;
    jobTitle?: string;
    imagePath: string;
    resumePath: string;
    feedback: Feedback;
  }
  
  interface Feedback {
    overallScore: number;
    ATS: {
      score: number;
      tips: {
        type: "good" | "improve";
        tip: string;
      }[];
    };
    toneAndStyle: {
      score: number;
      tips: {
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }[];
    };
    content: {
      score: number;
      tips: {
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }[];
    };
    structure: {
      score: number;
      tips: {
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }[];
    };
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
  };
  