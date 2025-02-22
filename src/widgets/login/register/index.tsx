"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import { InputSizes, InputTypes } from "../../../shared/ui/Input/Input.types";
import { Input } from "../../../shared/ui/Input";
import { Visibility, VisibilityOff } from "../../../shared/assets/icons";
import { Button } from "../../../shared/ui/Button/Button";
import { ButtonColors } from "../../../shared/ui/Button/Button.types";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleGoogleLogin = () => {};

  return (
    <div className={styles.registerForm}>
      <h3>Регистрация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contentForm}>
          <div className={styles.inputContainer}>
            <label htmlFor="fullName"></label>
            <Input
              id="fullName"
              type={InputTypes.Text}
              inputSize={InputSizes.Large}
              placeholder="ФИО"
              {...register("fullName", { required: "ФИО обязательно" })}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phoneNumber"></label>
            <Input
              id="phoneNumber"
              type={InputTypes.Tel}
              inputSize={InputSizes.Large}
              placeholder="Номер телефона"
              {...register("phoneNumber", {
                required: "Номер телефона обязателен",
              })}
            />
            {errors.phoneNumber && (
              <span className={styles.error}>{errors.phoneNumber.message}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email"></label>
            <Input
              id="email"
              type={InputTypes.Email}
              inputSize={InputSizes.Large}
              placeholder="Электронная почта"
              {...register("email", {
                required: "Электронная почта обязательна",
              })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password"></label>
            <div className={styles.passwordInput}>
              <Input
                id="password"
                placeholder="Пароль"
                inputSize={InputSizes.Large}
                type={showPassword ? InputTypes.Text : InputTypes.Password}
                {...register("password", { required: "Пароль обязателен" })}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </div>
            </div>
            {errors.password && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword"></label>
            <div className={styles.passwordInput}>
              <Input
                id="confirmPassword"
                placeholder="Повторите пароль"
                inputSize={InputSizes.Large}
                type={
                  showConfirmPassword ? InputTypes.Text : InputTypes.Password
                }
                {...register("confirmPassword", {
                  required: "Пароль обязателен",
                })}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className={styles.error}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className={styles.ButtonGroup}>
            <Button
              style={{ width: "540px" }}
              backgroundColor={ButtonColors.Primary}
            >
              Зарегистрироваться
            </Button>
            <Button
              backgroundColor={ButtonColors.Secondary}
              onClick={handleGoogleLogin}
              style={{ width: "540px" }}
            >
              Войти
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
