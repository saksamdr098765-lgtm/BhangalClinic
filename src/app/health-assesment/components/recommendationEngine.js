import { symptoms } from "./data";

export function getRecommendations(assessment) {
  const selectedSymptoms = symptoms.filter((symptom) =>
    assessment.symptoms.includes(symptom.id)
  );

  const testScores = {};
  const packageScores = {};

  selectedSymptoms.forEach((symptom) => {
    // Score Tests
    symptom.tests.forEach((testId) => {
      testScores[testId] =
        (testScores[testId] || 0) + symptom.priority;
    });

    // Score Packages
    symptom.packages.forEach((packageId) => {
      packageScores[packageId] =
        (packageScores[packageId] || 0) + symptom.priority;
    });
  });

  const recommendedTests = Object.entries(testScores)
    .map(([testId, score]) => ({
      testId,
      score,
    }))
    .sort((a, b) => b.score - a.score);

  const recommendedPackages = Object.entries(packageScores)
    .map(([packageId, score]) => ({
      packageId,
      score,
    }))
    .sort((a, b) => b.score - a.score);

  return {
    tests: recommendedTests,
    packages: recommendedPackages,
  };
}