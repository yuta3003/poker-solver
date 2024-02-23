import React, { type ChangeEvent } from "react";


interface InputProps {
  placeholder?: string;
  value: string;
  label: string;
  name: string;
  className?: string;
  error?: string | undefined;
  type?: "email" | "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps): React.ReactElement {
  const {
    error,
    name,
    label,
    onChange,
    value,
    placeholder = "",
    type = "text",
  } = props;
  return (
    <div>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      <label className="input-error" htmlFor={name}>
        {error}
      </label>
    </div>
  );
}
