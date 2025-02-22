import { InputHTMLAttributes, ReactNode } from "react";

export enum InputSizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export type InputSize = InputSizes.Large | InputSizes.Medium | InputSizes.Small;

export enum InputTypes {
  Text = "text",
  Email = "email",
  Password = "password",
  Number = "number",
  Tel = "tel",
  Url = "url",
  Search = "search",
}

export type InputType =
  | InputTypes.Text
  | InputTypes.Email
  | InputTypes.Password
  | InputTypes.Number
  | InputTypes.Tel
  | InputTypes.Url
  | InputTypes.Search;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  rounded?: boolean;
  disabled?: boolean;
  inputSize?: InputSizes;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  onClear?: () => void;
  type?: InputType;
  maxLength?: number;
  children?: ReactNode;
}
