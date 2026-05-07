import { LessonGraphContent } from "@/components/lesson/lesson-graph-content";
import { LessonTypesContent } from "@/components/lesson/lesson-types-content";
import { LessonStructuredTypesContent } from "@/components/lesson/lesson-structured-types-content";
import { LessonExpressionsContent } from "@/components/lesson/lesson-expressions-content";
import { LessonIfContent } from "@/components/lesson/lesson-if-content";
import { LessonSwitchContent } from "@/components/lesson/lesson-switch-content";
import { LessonOperatorsContent } from "@/components/lesson/lesson-operators-content";
import { LessonIomanipContent } from "@/components/lesson/lesson-iomanip-content";
import { LessonForContent } from "@/components/lesson/lesson-for-content";
import { LessonWhileContent } from "@/components/lesson/lesson-while-content";
import { LessonDoWhileContent } from "@/components/lesson/lesson-do-while-content";
import { LessonLoopsComparisonContent } from "@/components/lesson/lesson-loops-comparison-content";
import { LessonVectorContent } from "@/components/lesson/lesson-vector-content";
import { LessonMatrixContent } from "@/components/lesson/lesson-matrix-content";
import { LessonStringsContent } from "@/components/lesson/lesson-strings-content";
import { LessonStructContent } from "@/components/lesson/lesson-struct-content";
import { LessonFilesContent } from "@/components/lesson/lesson-files-content";
import { LessonFunctionsContent } from "@/components/lesson/lesson-functions-content";
import { LessonNumSystemsContent } from "@/components/lesson/lesson-num-systems-content";
import { LessonLogicCircuitsContent } from "@/components/lesson/lesson-logic-circuits-content";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { LessonBlockContent } from "@/components/lesson/lesson-block-content";

interface LessonContentProps {
  lessonId: number;
  content?: string;
  structuredData?: any;
  resources?: any[];
}

export function LessonContent({
  lessonId,
  content,
  structuredData,
  resources,
}: LessonContentProps) {
  if (structuredData) {
    return <LessonBlockContent data={structuredData} resources={resources} />;
  }

  if (content) {
    return <MarkdownRenderer content={content} />;
  }

  if (lessonId === 2) {
    return <LessonTypesContent />;
  }

  if (lessonId === 3) {
    return <LessonStructuredTypesContent />;
  }

  if (lessonId === 4) {
    return <LessonExpressionsContent />;
  }

  if (lessonId === 5) {
    return <LessonIfContent />;
  }

  if (lessonId === 6) {
    return <LessonSwitchContent />;
  }

  if (lessonId === 7) {
    return <LessonOperatorsContent />;
  }

  if (lessonId === 8) {
    return <LessonIomanipContent />;
  }

  if (lessonId === 9) {
    return <LessonForContent />;
  }

  if (lessonId === 10) {
    return <LessonWhileContent />;
  }

  if (lessonId === 11) {
    return <LessonDoWhileContent />;
  }

  if (lessonId === 12) {
    return <LessonLoopsComparisonContent />;
  }

  if (lessonId === 13) {
    return <LessonVectorContent />;
  }

  if (lessonId === 14) {
    return <LessonMatrixContent />;
  }

  if (lessonId === 15) {
    return <LessonStringsContent />;
  }

  if (lessonId === 16) {
    return <LessonStructContent />;
  }

  if (lessonId === 17) {
    return <LessonFilesContent />;
  }

  if (lessonId === 18) {
    return <LessonFunctionsContent />;
  }

  if (lessonId === 19) {
    return <LessonNumSystemsContent />;
  }

  if (lessonId === 20) {
    return <LessonLogicCircuitsContent />;
  }

  // Default to Graph content
  return <LessonGraphContent />;
}
