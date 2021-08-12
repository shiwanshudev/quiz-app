import { useState } from "react";
export default function ListItem({
  handleClick,
  disableBtn,
  option,
  correctAns,
  index,
}) {
  const [updatedClass, setUpdatedClass] = useState("");
  return (
    <button
      onClick={(e) => {
        handleClick(e);

        if (e.target.innerText === correctAns) {
          setUpdatedClass("success");
        } else {
          setUpdatedClass("warning");
        }
      }}
      key={`${index}-${Date.now()}`}
      className={` list-group-item-action list-group-item ${updatedClass}`}
      disabled={disableBtn}
    >
      {option}
    </button>
  );
}
