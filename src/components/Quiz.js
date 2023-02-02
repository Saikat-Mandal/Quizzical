import { useEffect, useState } from "react";
import Question from "./Question";
import memeData from "../memeData";

export default function Quiz() {
  //array rendering function
  function getQuestions() {
    const f = memeData.results;
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push({
        id: f[i].id,
        category: f[i].category,
        type: f[i].type,
        difficulty: f[i].difficulty,
        question: f[i].question,
        correct_answer: f[i].correct_answer,
        incorrect_answers: f[i].incorrect_answers,
        isHeld: false,
      });
    }
    return arr;
  }

  //state for creating array of questions
  const [qArray, setqArray] = useState(getQuestions());

  console.log(qArray);

  //useeffect for fetching data from api
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const arr = data.results;
        setqArray(arr);
      });
  }, []);

  //mapping over array
  const finalArray = qArray.map((item) => {
    return (
      <Question
        key={item.id}
        question={item.question}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
      />
    );
  });

  return <main>{finalArray}</main>;
}
