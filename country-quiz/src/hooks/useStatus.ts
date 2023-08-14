import React, { useEffect, useState } from "react";

const useStatus = (
  answer: string,
  correctAnswer: string,
  selectedAnswer: string | null
) => {
  const [status, setStatus] = useState("normal");

  useEffect(() => {
    if (!selectedAnswer) {
      setStatus("normal");
    } else if (answer === correctAnswer) {
      setStatus("success");
    } else if (answer === selectedAnswer) {
      setStatus("error");
    }
  }, [selectedAnswer, answer, correctAnswer]);

  return status;
};

export default useStatus;
