import HomeIcon from "@/assets/icons/home.svg";
import Heading from "@/components/atoms/heading";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.box}>
      <HomeIcon />
      <Heading level={1}>H1 Heading</Heading>
      Home
    </main>
  );
}
