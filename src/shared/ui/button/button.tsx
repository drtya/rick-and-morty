import type { ButtonHTMLAttributes } from "react";
import type { LinkProps } from "react-router";
import { Link } from "react-router";
import styles from "./styles.module.css";

type Button = {
  variant: "default" | "outline" | "link";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Link = {
  variant: "link";
} & LinkProps;

const Button = ({
  className,
  variant = "default",
  ...props
}: Button | Link) => {
  const classStyles = `${styles.button} ${styles[`button-${variant}`]}${className ? ` ${className}` : ""}`;
  if (variant === "link") {
    return <Link className={classStyles} {...(props as LinkProps)} />;
  } else {
    return (
      <button
        className={classStyles}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
};

export default Button;
