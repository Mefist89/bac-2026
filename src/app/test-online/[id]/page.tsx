"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TestRunnerHeader } from "@/components/test-runner/test-runner-header";
import { QuestionNavigator } from "@/components/test-runner/question-navigator";
import { TestRunnerFooter } from "@/components/test-runner/test-runner-footer";
import { QuestionCard, Question } from "@/components/test-runner/question-card";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import quizzesData from "@/data/quizzes.json";

export default function TestRunnerPage() {
  const params = useParams();
  const router = useRouter();
  const testId = Number(params?.id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [validationResults, setValidationResults] = useState<Record<
    number,
    any
  > | null>(null);
  // Result Modal State
  const [showResultModal, setShowResultModal] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Reset Confirmation Modal State
  const [showResetModal, setShowResetModal] = useState(false);

  // Mock checking if valid test
  if (isNaN(testId)) {
    return <div>Test not found</div>;
  }

  // Find test by ID from JSON data
  const test = quizzesData.tests.find((t) => t.id === testId);

  if (!test) {
    return (
      <div className="flex bg-gray-50 dark:bg-navy-deep min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Test nu a fost găsit
          </h1>
          <button
            onClick={() => router.push("/test-online")}
            className="text-primary hover:underline"
          >
            Înapoi la lista de teste
          </button>
        </div>
      </div>
    );
  }

  const questions = test.questions as Question[];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isTestValidated = !!validationResults;

  const handleAnswerChange = (answer: any) => {
    if (isTestValidated) return; // Disable changes after validation
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setAnswers({});
    setValidationResults(null);
    setScore({ correct: 0, total: 0 });
    setShowResultModal(false);
    setShowResetModal(false);
    setCurrentQuestionIndex(0);
  };

  const handleCheck = () => {
    if (isTestValidated) {
      setShowResultModal(true);
      return;
    }

    const results: Record<number, any> = {};
    let correctCount = 0;

    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      let isQuestionCorrect = true;

      if (question.type === "match_value") {
        const questionResults: Record<
          string,
          { isCorrect: boolean; correctValue: string }
        > = {};
        const items = question.data.items as any[];

        items.forEach((item) => {
          const userVal = userAnswer?.[item.id]?.trim().toLowerCase() || "";
          const correctVal = item.correctValue.toLowerCase();
          const isItemCorrect = userVal === correctVal;

          questionResults[item.id] = {
            isCorrect: isItemCorrect,
            correctValue: item.correctValue,
          };

          if (!isItemCorrect) isQuestionCorrect = false;
        });
        results[index] = questionResults;
      } else if (question.type === "single_choice") {
        // Logic placeholder
      } else if (question.type === "short_answer") {
        // Logic placeholder
      }

      if (isQuestionCorrect) {
        correctCount++;
      }
    });

    setScore({ correct: correctCount, total: totalQuestions });
    setValidationResults(results);
    setShowResultModal(true);
  };

  const percentage = Math.round((score.correct / score.total) * 100);
  let message = "Mai încearcă!";
  let messageColor = "text-red-500";
  if (percentage >= 50) {
    message = "Bun!";
    messageColor = "text-yellow-500";
  }
  if (percentage >= 80) {
    message = "Felicitări!";
    messageColor = "text-green-500";
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-20">
      <TestRunnerHeader title={test.title} timeLeft={test.timeLimit} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <QuestionNavigator
          totalQuestions={totalQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onQuestionSelect={setCurrentQuestionIndex}
          answers={answers}
        />

        <div className="mt-8">
          <QuestionCard
            key={currentQuestion.id} // key ensures reset on question change
            question={currentQuestion}
            currentAnswer={answers[currentQuestionIndex] || {}}
            onAnswerChange={handleAnswerChange}
            validation={validationResults?.[currentQuestionIndex]}
          />
        </div>

        <TestRunnerFooter
          onCheck={handleCheck}
          onReset={handleReset}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={currentQuestionIndex === totalQuestions - 1}
        />
      </main>

      {/* Result Modal */}
      <Modal isOpen={showResultModal} onClose={() => setShowResultModal(false)}>
        <div className="flex flex-col items-center text-center">
          <div
            className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 transition-colors ${
              percentage >= 80
                ? "border-green-500 text-green-500"
                : percentage >= 50
                  ? "border-yellow-500 text-yellow-500"
                  : "border-red-500 text-red-500"
            }`}
          >
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>

          <h2 className={`text-2xl font-bold mb-2 ${messageColor}`}>
            {message}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ai răspuns corect la{" "}
            <strong className="text-gray-900 dark:text-white">
              {score.correct}
            </strong>{" "}
            din{" "}
            <strong className="text-gray-900 dark:text-white">
              {score.total}
            </strong>{" "}
            întrebări.
          </p>

          <div className="flex gap-4 w-full">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setShowResultModal(false)}
            >
              Vezi Răspunsurile
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              onClick={() => router.push("/test-online")}
            >
              Alte Teste
            </Button>
          </div>
        </div>
      </Modal>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Resetare Test"
      >
        <div className="flex flex-col">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Sigur doriți să resetați testul? Pierdeți toate răspunsurile
            salvate.
          </p>
          <div className="flex gap-4 justify-end">
            <Button variant="outline" onClick={() => setShowResetModal(false)}>
              Anulează
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={confirmReset}
            >
              Da, Resetează
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
