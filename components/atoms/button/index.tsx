import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  href?: string;
  toNewTab?: boolean;
  to?: Url;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  href,
  toNewTab,
  to,
  ...props
}) => {
  const attrs = {
    className: clsx(
      styles.button,
      styles[variant],
      styles[size],
      "btn-text",
      className
    ),
    disabled,
    ...props,
  };

  if (to)
    return (
      <Link {...attrs} href={to}>
        {children}
      </Link>
    );

  if (href)
    return (
      <a {...attrs} href={href} target={toNewTab ? "_blank" : "_self"}>
        {children}
      </a>
    );

  return <button {...attrs}>{children}</button>;
};

export default Button;
