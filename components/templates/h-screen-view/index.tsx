import Heading from "@/components/atoms/heading";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  heading?: string;
  bottom: React.ReactNode;
  children?: React.ReactNode;
}

const HScreenView: FC<Props> = ({ heading, bottom, children }) => {
  return (
    <div className={styles.container}>
      {heading && <Heading level={1}>{heading}</Heading>}
      <div className={styles.content}>{children}</div>
      {bottom}
    </div>
  );
};

export default HScreenView;
