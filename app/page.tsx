import HomeIcon from "@/assets/icons/home.svg";
import deadliftImage from "@/assets/images/deadlift.jpg";
import Heading from "@/components/atoms/heading";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.box}>
      <HomeIcon />
      <Heading level={1}>H1 Heading</Heading>
      <Image
        src={deadliftImage}
        alt="Deadlift"
        width={400}
        height={400}
        style={{ objectFit: "cover" }}
      />
      Home
    </main>
  );
}
