import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  children: React.ReactNode;
}

const Paragraph: FC<Props> = ({ size = "md", children }) => {
  return <p className={clsx(styles.p, styles[size])}>{children}</p>;
};

export default Paragraph;
