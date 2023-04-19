import { useState } from "react";
import syteles from "@/styles/Buymed.module.css";
import { render } from "react-dom";

export default function Ex3() {
  let [name, setName] = useState("");
  let [gender, setGender] = useState("male");
  let [otherGender, setOtherGender] = useState("");
  let [showOtherGenderInput, setShowOtherGenderInput] = useState(false);

  function handleUpdateGender(e) {
    let genderValue = e.target.value;
    if (genderValue == "male" || genderValue == "female") {
      setShowOtherGenderInput(false);
    } else {
      setShowOtherGenderInput(true);
    }
    setGender(genderValue);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function OtherGender() {
    if (showOtherGenderInput) {
      return (
        <div>
          <label>
            Other gender:
            <input
              type="text"
              name="otherGender"
              onChange={handleUpdateGender}
            />
          </label>
        </div>
      );
    }
  }

  function handleSubmit(e) {
    if (name == "" || gender == "") {
      alert("Please fill in the form");
    } else {
      alert(`Name ${name} - gender ${gender}`);
    }
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChangeName} />
          </label>
        </div>

        <div>
          <label>
            Gender:
            <select onChange={handleUpdateGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <OtherGender></OtherGender>

        <div>
          <button className={syteles.button} type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
