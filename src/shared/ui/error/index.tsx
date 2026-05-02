import type { SerializedError } from "@reduxjs/toolkit";
import styles from "./styles.module.css";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Link } from "react-router";
import Button from "../button/button";

type Props = {
  message: FetchBaseQueryError | SerializedError;
};

const Error = ({ message }: Props) => {
  const isFetchError = "status" in message;
  const errorText = isFetchError
    ? ((message.data as { error?: string })?.error ?? String(message.status))
    : (message.message ?? "Unknown error");
  return (
    <div className={styles.overlay}>
      <div className={styles.bgText}>
        {isFetchError ? message.status : "Error"}
      </div>
      <div className={styles.message}>{errorText}</div>
      <Link to={"/"}>
        <Button variant="outline" className={styles.goBack}>
          Go home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
