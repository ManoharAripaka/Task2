import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../Store/DataStore";
import "./Suggest.css";

export default function Suggest() {
  const { title } = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const recommended = ["Christmas Gifts", "Birthday Gifts", "Back to School"];
  const changeOption = (e) => {
    console.log(e)
    dispatch(updateTitle(e))
  }

  return (
    <div className="suggest">
      <p id="suggest_title">recommended search:</p>
      {recommended.map(each => (
        (each !== title) ? <p id="suggest_opt" onClick={() => changeOption(each)}>{each}</p> : null
      ))}
    </div>
  );
}
