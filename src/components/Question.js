export default function Question(props) {
  return (
    <div className="flex flex-col text-left">
      <h1 className=" text-xl font-bold pt-10 py-3 px-40">{props.question}</h1>
      <ul className="flex justify-around">
        <li className="p-2 border-2 border-black rounded-md cursor-pointer">
          {props.correct_answer}
        </li>
        <li className="p-2 border-2 border-black rounded-md cursor-pointer">
          {props.incorrect_answers[1]}
        </li>
        <li className="p-2 border-2 border-black rounded-md cursor-pointer">
          {props.incorrect_answers[0]}
        </li>
        <li className="p-2 border-2 border-black rounded-md cursor-pointer">
          {props.incorrect_answers[2]}
        </li>
      </ul>
    </div>
  );
}
