import Nav from "@/components/organisms/nav";
import React, { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  heading?: string;
  children?: React.ReactNode;
}

const AppView: FC<Props> = ({ heading, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <Nav />
    </div>
  );
};

export default AppView;
