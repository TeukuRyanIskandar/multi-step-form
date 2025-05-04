"use client";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { cardData } from "@/data/CardData";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FooterOne, FooterTwo, FooterThree } from "@/components/dashboard/Footer";

export default function BookingPage() {

  const { steps, currentStepIndex, nextStep, previousStep } = useMultiStepForm(cardData)
  const currentCard = cardData[currentStepIndex];

  return (
    <>
      <CardHeader>
        <CardTitle>{currentCard.title}</CardTitle>
        <CardDescription>{currentCard?.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{currentCard.body}</CardContent>
      <CardFooter className="flex justify-between">
        {typeof currentCard.footer === "function" &&
          currentCard.footer({ onNext: nextStep, onBack: previousStep })}
      </CardFooter>

    </>
  )
}