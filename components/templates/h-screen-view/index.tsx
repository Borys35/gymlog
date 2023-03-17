import Heading from "@/components/atoms/heading";
import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  heading?: string;
  bottom: React.ReactNode;
  center?: boolean;
  children?: React.ReactNode;
}

const HScreenView: FC<Props> = ({
  heading,
  bottom,
  center = false,
  children,
}) => {
  return (
    <div className={clsx(styles.container, center && styles.center)}>
      {heading && (
        <Heading level={1} style={{ marginBottom: "1.25rem" }}>
          {heading}
        </Heading>
      )}
      <div className={styles.content}>{children}</div>
      {bottom}
    </div>
  );
};

export default HScreenView;
