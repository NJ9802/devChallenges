import Image from "next/image";
import React from "react";
import Button from "./Button";

interface GameOverProps {
  score: number;
  onResetGame: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, onResetGame }) => {
  return (
    <div className="flex flex-col items-center gap-16 text-darkBlue">
      <Image
        src="/assets/undraw_winners_ao2o 2.svg"
        alt="Game Over"
        width={238}
        height={136}
      />

      <div className="flex flex-col items-center gap-3">
        <h2 className="text-5xl font-bold">Results</h2>
        <p className="text-lg">
          You got{" "}
          <span className="text-4xl text-green font-bold">{score}</span>{" "}
          correct answers
        </p>
      </div>

      <Button buttonType="outline" onClick={onResetGame}>
        Try again
      </Button>
    </div>
  );
};

export default GameOver;
