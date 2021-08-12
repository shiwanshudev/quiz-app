import { useState } from "react";
import ListItem from "./ListItem";

const Quiz = ({ randomOptions, correctAns, question }) => {
  const [disableBtn, setDisableBtn] = useState(false);

  const handleClick = (e) => {
    setDisableBtn(true);
  };

  return (
    <div style={{ marginBottom: "35px" }}>
      <h5 style={{ marginBottom: "20px", color: "#777" }}>
        {decodeStr(question)}
      </h5>
      <div>
        <div className="list-group" style={{ maxWidth: "400px" }}>
          {randomOptions.map((option, index) => (
            <ListItem
              key={index}
              index={index}
              handleClick={handleClick}
              disableBtn={disableBtn}
              option={decodeStr(option)}
              correctAns={decodeStr(correctAns)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

function decodeStr(str) {
  const tempEl = document.createElement("textarea");
  tempEl.innerHTML = str;
  return tempEl.value;
}
