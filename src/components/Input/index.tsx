import styles from "./input.module.scss";

interface IInput {
  type: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

 const Input = ({
  type,
  placeholder = "Buscar planeta...",
  value,
  onChange,
  className,
}: IInput) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      ></input>
    </div>
  );
};

export default Input;