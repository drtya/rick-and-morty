// shared/ui/searchInput/index.tsx
import { useState, type InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChangeValue: (value: string) => void;
  placeholder?: string;
  debounce?: number;
}

const SearchInput = ({
  onChangeValue,
  placeholder = "Поиск...",
  debounce = 500,
  className,
  ...props
}: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    const timer = setTimeout(() => onChangeValue(val), debounce);
    return () => clearTimeout(timer);
  };

  return (
    <input
      className={styles.input + " " + className}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default SearchInput;
