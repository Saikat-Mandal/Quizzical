import Start from "./Start";
import Quiz from "./Quiz";
import { useState } from "react";

export default function Main() {
  // state to start quiz
  const [quizStart, setQuizStart] = useState(true);

  function handleClick() {
    setQuizStart((prev) => !prev);
  }

  return quizStart ? <Start functionClick={() => handleClick()} /> : <Quiz />;
}
