"use client";
import React from "react";
import { useForm } from "react-hook-form";
//import Eye from "../../shared/ui/Eye";
//import EyeOff from "../../shared/ui/EyeOff";
import Button from "../../shared/ui/Button/Button";
import styles from "./RegisterForm.module.scss";
import Input from "@/shared/ui/Input/Input";
import { ButtonColors } from "@/shared/ui/Button";

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
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">ФИО</label>
          <Input
            id="fullName"
            placeholder="ФИО"
            {...register("fullName", { required: "ФИО обязательно" })}
          />
          {errors.fullName && (
            <span className={styles.error}>{errors.fullName.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <Input
            id="phoneNumber"
            placeholder="Номер телефона"
            {...register("phoneNumber", {
              required: "Номер телефона обязателен",
            })}
          />
          {errors.phoneNumber && (
            <span className={styles.error}>{errors.phoneNumber.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Электронная почта</label>
          <Input
            id="email"
            placeholder="Электронная почта"
            {...register("email", {
              required: "Электронная почта обязательна",
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Пароль</label>
          <div className={styles.passwordInput}>
            <Input
              id="password"
              placeholder="Пароль"
              // type={showPassword ? "text" : "password"}
              {...register("password", { required: "Пароль обязателен" })}
            />
            <div
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Повторите пароль</label>
          <div className={styles.passwordInput}>
            <Input
              id="confirmPassword"
              placeholder="Повторите пароль"
              //  type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Повторите пароль обязателен",
              })}
            />
            <div
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
          {errors.confirmPassword && (
            <span className={styles.error}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className={styles.ButtonGroup}>
          <Button backgroundColor={ButtonColors.Primary}>
            Зарегистрироваться
          </Button>
          <Button
            backgroundColor={ButtonColors.Secondary}
            onClick={handleGoogleLogin}
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
