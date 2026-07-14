"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import ProgressBar from "./components/ProgressBar";

import Step1Concern from "./components/Step1Concern";
import Step2BodyArea from "./components/Step2BodyArea";
import Step3Symptoms from "./components/Step3Symptoms";
import Step4Details from "./components/Step4Details";
import Step5Results from "./components/Step5Results";

export default function HealthAssessmentPage() {
  const [step, setStep] = useState(1);

  const [assessment, setAssessment] = useState({
    concern: "",
    bodyArea: "",
    symptoms: [],
    age: "",
    gender: "",
    duration: "",
    conditions: [],
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));

  const previousStep = () =>
    setStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50">

      <Hero />

      <div className="mx-auto max-w-5xl px-6 pb-24">

        <ProgressBar currentStep={step} totalSteps={5} />

        <div className="mt-10">

          {step === 1 && (
            <Step1Concern
              value={assessment.concern}
              onChange={(value) =>
                setAssessment((prev) => ({
                  ...prev,
                  concern: value,
                }))
              }
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <Step2BodyArea
              value={assessment.bodyArea}
              onChange={(value) =>
                setAssessment((prev) => ({
                  ...prev,
                  bodyArea: value,
                }))
              }
              previousStep={previousStep}
              nextStep={nextStep}
            />
          )}

          {step === 3 && (
            <Step3Symptoms
              assessment={assessment}
              setAssessment={setAssessment}
              previousStep={previousStep}
              nextStep={nextStep}
            />
          )}

          {step === 4 && (
            <Step4Details
              assessment={assessment}
              setAssessment={setAssessment}
              previousStep={previousStep}
              nextStep={nextStep}
            />
          )}

          {step === 5 && (
            <Step5Results
              assessment={assessment}
              previousStep={previousStep}
            />
          )}

        </div>

      </div>

    </main>
  );
}