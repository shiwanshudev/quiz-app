import Quiz from "./Quiz";
const QuizList = (props) => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px",
        background: "#fff",
        borderRadius: "5px",
      }}
    >
      {props.questionsArr.map((quizObj, index) => {
        const options = [...quizObj.incorrect_answers, quizObj.correct_answer];
        const randomOptions = options.sort(() => 0.5 - Math.random());
        return (
          <Quiz
            key={`${index}-${Date.now()}`}
            randomOptions={randomOptions}
            question={quizObj.question}
            correctAns={quizObj.correct_answer}
          />
        );
      })}
    </div>
  );
};

export default QuizList;
