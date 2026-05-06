import { LessonGraphContent } from "@/components/lesson/lesson-graph-content";
import { LessonTypesContent } from "@/components/lesson/lesson-types-content";
import { LessonStructuredTypesContent } from "@/components/lesson/lesson-structured-types-content";
import { LessonExpressionsContent } from "@/components/lesson/lesson-expressions-content";
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

  // Default to Graph content (ID 1) - Wait, ID 1 is the new lesson?
  // If ID=1 is passed with content, it will hit the first if.
  return <LessonGraphContent />;
}
