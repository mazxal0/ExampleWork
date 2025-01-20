import {ComponentPropsWithoutRef, useState} from "react";
import {InputFileVariants, inputFileVariants} from "@/components/InputFile/inputFileVariants";
import styles from "./InputFile.module.scss";
import clsx from "clsx";

type InputFileProps = ComponentPropsWithoutRef<"input"> & InputFileVariants & {
  label?: string;
  onChange: (value: File) => void;
  condition: "active" | "disabled";
  text: string;
  allowed_types: string;
}

export const InputFile = ({
  variant,
  background,
  condition = "active",
  label = "input_file",
  onChange = (File) => {},
  text = "Выберите файл",
  allowed_types = "*",
  ...props
}: InputFileProps) => {

  const [file, setFile] = useState<File | null>(null);
  const onHandleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  }

  return (
    <div className={clsx( styles.root)}>
      <input
        id={label}
        onChange={onHandleFile}
        disabled={condition === "disabled"}
        className={styles.inputFile}
        type="file"
        accept={allowed_types.trim()}
        {...props}
      />
      <label htmlFor={label} className={
        clsx(styles.label,
        inputFileVariants({variant, background, condition}))
      }>
        {file &&
        <div className={styles.file_name}>
          {file.name}
        </div>
        }
        <div className={clsx(styles.file_text, file && styles.file_label)}>
          {text}
        </div>
      </label>
    </div>
  )
};