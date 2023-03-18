import Back from "@/assets/icons/back.svg";
import Dots from "@/assets/icons/dots.svg";
import Heading from "@/components/atoms/heading";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  heading: React.ReactNode;
  backTo?: URL;
}

const Topbar: FC<Props> = ({ heading, backTo }) => {
  return (
    <div className={styles.topbar}>
      {backTo && (
        <Link href={backTo}>
          <Back />
        </Link>
      )}
      <Heading level={1} className={styles.title}>
        {heading}
      </Heading>
      <Dots />
    </div>
  );
};

export default Topbar;
