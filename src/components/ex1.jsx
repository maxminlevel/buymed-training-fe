import { useState } from "react";
import syteles from "@/styles/Buymed.module.css";

export default function Ex1() {
  let [text, setText] = useState("");

  function handleChangeText() {
    let randomText = Math.random().toString(36).slice(2, 9);
    setText(randomText);
  }

  return (
    <div>
      <button onClick={handleChangeText} className={syteles.button}>
        Click me !!!
      </button>
      <h4>{text}</h4>
    </div>
  );
}
