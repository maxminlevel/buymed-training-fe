import { useRouter } from "next/router";
import Ex1 from "@/components/ex1";
import Ex2 from "@/components/ex2";
import Ex3 from "@/components/ex3";
import Ex5 from "@/components/ex5";
import Ex6 from "@/components/ex6";
import styles from "@/styles/Buymed.module.css";

const Exercise = () => {
  const router = useRouter();
  const { exerciseId } = router.query;

  console.log(exerciseId);

  let exe = undefined;
  switch (exerciseId) {
    case "1": {
      exe = <Ex1 />;
      break;
    }
    case "2": {
      exe = <Ex2 value1={"Buymed"} value2={"Hello"} />;
      break;
    }
    case "3": {
      exe = <Ex3></Ex3>;
      break;
    }
    case "4": {
      exe = <text>Đã có</text>;
      break;
    }
    case "5": {
      exe = <Ex5 />;
      break;
    }
    case "6": {
      exe = <Ex6></Ex6>;
      break;
    }
    default: {
      break;
    }
  }
  return <div className={styles.main}>{exe}</div>;
};

export default Exercise;
