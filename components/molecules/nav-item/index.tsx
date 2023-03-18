import Paragraph from "@/components/atoms/paragraph";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

export interface NavItemProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ name, icon, href }) => {
  return (
    <Link href={href} className={styles.item}>
      {icon}
      <Paragraph size="sm">{name}</Paragraph>
    </Link>
  );
};

export default NavItem;
