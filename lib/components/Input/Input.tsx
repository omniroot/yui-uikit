import clsx from "clsx";
import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  FormEvent,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onChangeCallback?: (text: string) => void;
  onSubmitCallback?: (text: string) => void;
  symbolCount?: boolean;
}
export const Input: FC<InputProps> = ({
  onChangeCallback,
  onSubmitCallback,
  symbolCount = true,
  placeholder = "Placeholder",
  ...rest
}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const _class = clsx(styles.defaultInput);

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const _text = event.target.value;
    if (onChangeCallback) {
      onChangeCallback(_text);
    }
    setValue(_text);
  };

  const onFormClickHandler = () => {
    inputRef.current?.focus();
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmitCallback) {
      onSubmitCallback(value);
    }
  };

  return (
    <form
      className={styles.defaultForm}
      onClick={onFormClickHandler}
      onSubmit={onSubmitHandler}
    >
      <input
        value={value}
        ref={inputRef}
        onChange={onInputChangeHandler}
        placeholder={placeholder}
        className={_class}
        {...rest}
      />
      {symbolCount && (
        <span className={styles.symbolCount}>
          {value.length} {rest.maxLength && `/ ${rest.maxLength}`}
        </span>
      )}
    </form>
  );
};
