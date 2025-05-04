// hooks/useMultiStepForm.ts
import { useState } from "react";

export function useMultiStepForm<T>(steps: T[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () =>
    setCurrentStepIndex(i => (i >= steps.length - 1 ? i : i + 1));

  const previousStep = () =>
    setCurrentStepIndex(i => (i <= 0 ? i : i - 1));

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    nextStep,
    previousStep,
  };
}
