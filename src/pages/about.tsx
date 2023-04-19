import Link from "next/link";
import styles from "@/styles/Buymed.module.css";

function About({ productId = 100 }) {
  return (
    <div>
      <h1>
        <Link href="/product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/product/2">Product 3</Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>Product{productId}</Link>
      </h1>
    </div>
  );
}

export default About;
