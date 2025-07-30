import React from 'react'
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordian";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";

const ScoreBadge = ({ score }: { score: number }) => {
    return (
        <div
          className={cn(
              "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
              score > 69
                  ? "bg-badge-green"
                  : score > 39
                      ? "bg-badge-yellow"
                      : "bg-badge-red"
          )}
        >
        <div className="size-4">
            {score > 69 ? (
                <FaCircleCheck className="text-badge-green-text w-full h-full" />
            ): <FaCircleExclamation className="text-badge-yellow-text w-full h-full" />}
        </div>
        <p
            className={cn(
                "text-sm font-medium",
                score > 69
                    ? "text-badge-green-text"
                    : score > 39
                        ? "text-badge-yellow-text"
                        : "text-badge-red-text"
            )}
        >
          {score}/100
        </p>
      </div>
  );
};

const CategoryHeader = ({
                          title,
                          categoryScore,
                        }: {
  title: string;
  categoryScore: number;
}) => {
  return (
      <div className="flex flex-row gap-4 items-center py-2">
        <p className="text-2xl font-semibold">{title}</p>
        <ScoreBadge score={categoryScore} />
      </div>
  );
};

const CategoryContent = ({
                           tips,
                         }: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex flex-col gap-4 w-full">
          {tips.map((tip, index) => (
              <div
                  key={index + tip.tip}
                  className={cn(
                      "flex flex-col gap-2 rounded-2xl p-4",
                      tip.type === "good"
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : "bg-yellow-50 border border-yellow-200 text-yellow-700"
                  )}
              >
                <div className="flex flex-row gap-2 items-center">
                    <div className="size-5">
                        {tip.type === "good" ? <FaCircleCheck className="text-green-600"/>
                            : <FaCircleExclamation className="text-yellow-600"/>}
                    </div>
                  <p className="text-sm font-semibold">{tip.tip}</p>
                </div>
                <p className='text-sm'>{tip.explanation}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

const CategoryContent2 = ({
                           items,
                         }: {
  items: { item: string; explanation: string }[];
}) => {
  return (
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex flex-col gap-4 w-full">
          {items.map((item, index) => (
              <div
                  key={index + item.item}
                  className={
                      "flex flex-col gap-2 rounded-2xl p-4 bg-yellow-50 border border-yellow-200 text-yellow-700"
                  }
              >
                <div className="flex flex-row gap-2 items-center">
                    <div className="size-5">
                        <FaCircleExclamation className="text-yellow-600"/>
                    </div>
                  <p className="text-sm font-semibold">{item.item}</p>
                </div>
                <p className='text-sm'>{item.explanation}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

const BulletHeader = ({
                          title,
                        }: {
  title: string;
}) => {
  return (
      <div className="flex flex-row gap-4 items-center py-2">
        <p className="text-2xl font-semibold">{title}</p>
      </div>
  );
};


const BulletList = ({
  items,
  type = "improve", // default type
}: {
  title: string;
  items: string[];
  type?: "good" | "improve";
}) => {
  const icon =
    type === "good" ? (
      <FaCircleCheck className="text-green-600" />
    ) : (
      <FaCircleExclamation className="text-yellow-600" />
    );

  const tileColor =
    type === "good"
      ? "bg-green-50 border border-green-200 text-green-700"
      : "bg-yellow-50 border border-yellow-200 text-yellow-700";

  return (
    <div className="flex flex-col gap-4 items-center w-full">

      {/* Full Tiles */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, index) => (
          <div key={index} className={cn("flex flex-col gap-2 rounded-2xl p-4", tileColor)}>
            <div className="flex flex-row gap-2 items-center">
              <div className="size-5">{icon}</div>
              <p className="text-sm font-semibold">{item}</p>
            </div>
            {/* You can add explanation if needed later */}
          </div>
        ))}
      </div>
    </div>
  );
};

const BulletListGood = ({
  items,
  type = "good", // default type
}: {
  title: string;
  items: string[];
  type?: "good" | "improve";
}) => {
  const icon =
    type === "good" ? (
      <FaCircleCheck className="text-green-600" />
    ) : (
      <FaCircleExclamation className="text-yellow-600" />
    );

  const tileColor =
    type === "good"
      ? "bg-green-50 border border-green-200 text-green-700"
      : "bg-yellow-50 border border-yellow-200 text-yellow-700";

  return (
    <div className="flex flex-col gap-4 items-center w-full">

      {/* Full Tiles */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, index) => (
          <div key={index} className={cn("flex flex-col gap-2 rounded-2xl p-4", tileColor)}>
            <div className="flex flex-row gap-2 items-center">
              <div className="size-5">{icon}</div>
              <p className="text-sm font-semibold">{item}</p>
            </div>
            {/* You can add explanation if needed later */}
          </div>
        ))}
      </div>
    </div>
  );
};


const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
        <Accordion> {/* Accordion to display different categories of feedback */}
            <AccordionItem id="tone-style"> {/* Accordion item for Tone & Style */}
                <AccordionHeader itemId="tone-style">
                     <CategoryHeader title="Tone & Style" categoryScore={feedback.toneAndStyle.score}/>
                </AccordionHeader>
                <AccordionContent itemId="tone-style">
                    <CategoryContent tips={feedback.toneAndStyle.tips} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="content"> {/* Accordion item for Content */}
                <AccordionHeader itemId="content">
                    <CategoryHeader title="Content" categoryScore={feedback.content.score}/>
                </AccordionHeader>
                <AccordionContent itemId="content">
                    <CategoryContent tips={feedback.content.tips} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="structure"> {/* Accordion item for Structure */}
                <AccordionHeader itemId="structure">
                    <CategoryHeader title="Structure" categoryScore={feedback.structure.score}/>
                </AccordionHeader>
                <AccordionContent itemId="structure">
                    <CategoryContent tips={feedback.structure.tips} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="impactOrientation"> {/* Accordion item for Impact Orientation */}
                <AccordionHeader itemId="impactOrientation">
                    <CategoryHeader title="Impact Orientation" categoryScore={feedback.impactOrientation.score}/>
                </AccordionHeader>
                <AccordionContent itemId="impactOrientation">
                    <CategoryContent tips={feedback.impactOrientation.tips} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="jobSuitability"> {/* Accordion item for Job Suitability */}
                <AccordionHeader itemId="jobSuitability">
                    <CategoryHeader title="Job Suitability" categoryScore={feedback.jobSuitability.matchScore}/>
                </AccordionHeader>
                <AccordionContent itemId="jobSuitability">
                    <div className="bg-gray-50 w-full rounded-lg px-5 py-4 gap-4 mb-4">
                        <p className="text-sm text-gray-500 mb-4">{feedback.jobSuitability.matchSummary}</p>
                    </div>
                    <CategoryContent tips={feedback.jobSuitability.tips} />
                </AccordionContent>
            </AccordionItem>


            <div className="my-4 border-t border-gray-200 w-full" /> {/*Gap for clean UI */}


            {/* Accordions for non scored segments */}

            <AccordionItem id="strengths"> {/* Strengths*/}
                <AccordionHeader itemId="strengths">
                    <div className="flex flex-row items-center gap-2">
                        <BulletHeader title="Overall Resume Strengths"/>
                        <FaCircleCheck className="text-green-600 size-6" />
                    </div>
                </AccordionHeader>
                <AccordionContent itemId="strengths">
                    <BulletListGood title="Strengths" items={feedback.strengths} />
                </AccordionContent>
            </AccordionItem>

            {/* Accordions for Matching Technologies */}
            <AccordionItem id="matchingTechnologies"> 
                <AccordionHeader itemId="matchingTechnologies">
                    <div className="flex flex-row items-center gap-2">
                        <BulletHeader title="Matching Technologies" />
                        <FaCircleCheck className="text-green-600 size-6" />
                    </div>
                </AccordionHeader>
                <AccordionContent itemId="matchingTechnologies">
                    <BulletListGood title="Matching Technologies" items={feedback.jobSuitability.matchingTechnologies}/>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="weakness"> {/* Weakness*/}
                <AccordionHeader itemId="weakness">
                    <div className="flex flex-row items-center gap-2">
                        <BulletHeader title="Overall Resume Weaknesses"/>
                        <FaCircleExclamation className="text-yellow-600 size-6" />
                    </div>
                </AccordionHeader>
                <AccordionContent itemId="weakness">
                    <BulletList title="weakness" items={feedback.weaknesses} />
                </AccordionContent>
            </AccordionItem>
            
            {/* Accordions for Missing Requirements */}
            <AccordionItem id="missingRequirements"> 
                <AccordionHeader itemId="missingRequirements">
                    <div className="flex flex-row items-center gap-2">
                        <BulletHeader title="Missing Requirements"/>
                        <FaCircleExclamation className="text-yellow-600 size-6" />
                    </div>
                </AccordionHeader>
                <AccordionContent itemId="missingRequirements">
                    <BulletList title="Missing Requirements" items={feedback.jobSuitability.missingRequirements} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="priorityFixes"> {/* Priority Fixes */}
                <AccordionHeader itemId="priorityFixes">
                    <div className="flex flex-row items-center gap-2">
                        <BulletHeader title="Priority Fixes"/>
                        <FaCircleExclamation className="text-red-600 size-6" />
                    </div>
                </AccordionHeader>
                <AccordionContent itemId="priorityFixes">
                    <CategoryContent2 items={feedback.priorityFixes} />
                </AccordionContent>
            </AccordionItem>


        </Accordion>
    </div>
  )
}

export default Details
