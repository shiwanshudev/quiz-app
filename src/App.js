import { useEffect, useState } from "react";
import QuizList from "./components/QuizList";
import axios from "axios";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const [quizItems, setQuizItems] = useState([]);
  const APIURI = "https://opentdb.com/api.php?amount=10";
  useEffect(() => {
    axios
      .get(APIURI)
      .then((res) => setQuizItems(res.data.results));
  }, []);

  const handleReload = ()=>{
    axios.get(APIURI).then(res => setQuizItems(res.data.results));
  }

  return (
    <div>
      <h1
        className="display-3"
        style={{ textAlign: "center", padding: "30px 0 5px 0" }}
      >
        Dynamic Quiz
      </h1>
        <div style={{textAlign:'center', marginBottom: "35px"}}>
         <button className="refreshButton" onClick={handleReload}>Click to Refresh!</button>
        </div>
      <QuizList questionsArr={quizItems} />
      <footer style={{ textAlign: "center", padding: "20px" }}>
        &copy; Shiwanshu Shubham 2021
      </footer>
    </div>
  );
}

export default App;
