export default function Start(props) {
  return (
    //   {/* starting page */}
    <main className=" min-h-screen flex justify-center items-center">
      <div className=" text-center w-96 h-96 ">
        <h1 className=" text-5xl py-3">Quizzical</h1>
        <p className=" text-2xl pb-3">
          Here comes the challange of the day , start now !
        </p>
        <button
          onClick={props.functionClick}
          className=" bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-500"
        >
          Start Quiz
        </button>
      </div>
    </main>
  );
}
