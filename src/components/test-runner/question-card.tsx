"use client";

import { MatchValueType } from "./question-types/match-value-type";
import { SingleChoiceType } from "./question-types/single-choice-type";
import { ShortAnswerType } from "./question-types/short-answer-type";

// Define Question Types
export type QuestionType = "match_value" | "single_choice" | "short_answer";

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  type: QuestionType;
  data: Record<string, unknown>; // Specific data for the question type
}

interface QuestionCardProps {
  question: Question;
  onAnswerChange: (answer: unknown) => void;
  currentAnswer: unknown;
  validation?: any; // Validation results for this question
}

export function QuestionCard({
  question,
  onAnswerChange,
  currentAnswer,
  validation,
}: QuestionCardProps) {
  return (
    <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 flex gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-1">
            {question.id}
          </span>
          {question.text}
        </h2>
        {question.subtext && (
          <p className="text-gray-500 dark:text-gray-400 ml-11">
            {question.subtext}
          </p>
        )}
      </div>

      <div className="ml-0 md:ml-11">
        {question.type === "match_value" && (
          <MatchValueType
            items={(question.data.items as any[]) || []}
            placeholder={question.data.placeholder as string}
            currentAnswers={(currentAnswer as Record<string, string>) || {}}
            onChange={onAnswerChange}
            validation={validation}
          />
        )}
        {question.type === "single_choice" && (
          <SingleChoiceType
            items={(question.data.items as any[]) || []}
            currentAnswer={currentAnswer as string | undefined}
            onChange={onAnswerChange}
            validation={validation}
          />
        )}
        {question.type === "short_answer" && (
          <ShortAnswerType
            placeholder={question.data.placeholder as string}
            currentAnswer={currentAnswer as string | undefined}
            onChange={onAnswerChange}
            validation={validation}
          />
        )}
      </div>
    </div>
  );
}
