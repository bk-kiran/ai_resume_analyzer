import { cn } from "~/lib/utils";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "./Accordian";

const Score = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {
    
    const subtitle = score > 69 ? 'Great Job!' : score > 49 ? 'Good Start' : 'Needs Improvement';
    
    const icon = (
    <div className="w-6 h-6">
      {score > 69 ? (
        <FaCircleCheck className="text-green-600 w-full h-full" />
      ) : score > 49 ? (
        <FaCircleExclamation className="text-yellow-600 w-full h-full" />
      ) : (
        <FaCircleXmark className="text-red-600 w-full h-full" />
      )}
    </div>
  );


  return (
    <Accordion defaultOpen="ats">
        <AccordionItem id="ats">
            <AccordionHeader itemId="ats" className={cn("flex items-center justify-between bg-gradient-to-b from-yellow-100 to-white px-6 py-4 rounded-t-lg shadow-sm",
                score > 69
                    ? "from-green-100"
                    : score > 49
                    ? "from-yellow-100"
                    : "from-red-100"
            )}
            >
                <p className="text-2xl font-bold text-black flex items-center gap-2">
                    {icon}
                    ATS Score - {score}/100</p>
                
            </AccordionHeader>

            <AccordionContent itemId="ats" className="bg-white shadow-inner">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold mb-2">{subtitle}</h3>
                    <p className="text-gray-600 mb-2">
                        This score represents how well your resume is likely to perform in Applicant Tracking Systems used by recruiters.
                    </p>

                    {suggestions.map((suggestion, index) => (
                        <div className="flex flex-row gap-2 items-center" key={index}>
                            <div className="w-4 h-4">
                                {suggestion.type === "good" ? <FaCircleCheck className="text-green-600"/> 
                                : <FaCircleExclamation className="text-yellow-600"/>}
                            </div>
                            <p className={suggestion.type === "good" ? "text-green-700" : "text-amber-700"}>{suggestion.tip}</p>
                        </div>
                    ))}

                    <p className="text-gray-700 italic">
                        Keep refining your resume using the suggestions below to improve your chances of getting past ATS filters.
                    </p>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );
};

export default Score;

 