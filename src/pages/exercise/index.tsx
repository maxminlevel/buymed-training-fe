import Link from "next/link";
import styles from "@/styles/Buymed.module.css";

function ListExercise() {
  let a = [];
  let maxExercise = 6;
  let link = "/exercise/";
  for (let i = 0; i < maxExercise; i += 1) {
    a.push(i + 1);
  }
  console.log(a);

  return (
    <div className={styles.main}>
      {a?.map((item, key) => (
        <h1 key={key}>
          <Link href={`${link}${item}`}>Exercise {item}</Link>
        </h1>
      ))}
    </div>
  );
}

export default ListExercise;
