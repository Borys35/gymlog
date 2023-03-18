import Heading from "@/components/atoms/heading";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

export interface PageTabProps {
  title: React.ReactNode;
  bgImage: string | StaticImageData;
  href: string;
}

const PageTab: FC<PageTabProps> = ({ title, bgImage, href }) => {
  return (
    <Link href={href} className={styles.container}>
      <Image
        src={bgImage}
        alt="Background"
        className={styles.background}
        fill={true}
      />
      <div className={styles.shadow}></div>
      <Heading level={2}>{title}</Heading>
    </Link>
  );
};

export default PageTab;
