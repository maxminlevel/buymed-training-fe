import Link from "next/link";
import styles from "@/styles/Buymed.module.css";

function ListExercise() {
  let a = [];
  let maxExercise = 6;
  for (let i = 0; i < maxExercise; i += 1) {
    let link = "/exercise/" + i;
    a.push(
      <h1 className={styles.main}>
        <Link href={link}>Exercise {i}</Link>
      </h1>
    );
  }
  console.log(a);
  return <div>{a.map((b) => b)}</div>;
}

export default ListExercise;
