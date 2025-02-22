"use client";
import React from "react";
import { useForm } from "react-hook-form";

import Button from "@/shared/ui/Button/Button";
import styles from "./AuthForm.module.scss";
import Input from "@/shared/ui/Input/Input";
import { ButtonColors, ButtonSizes } from "@/shared/ui/Button/Button.types";
import { Google, Visibility, VisibilityOff } from "@/shared/assets/icons";
import { InputSizes, InputTypes } from "@/shared/ui/Input/Input.types";

interface FormData {
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleGoogleLogin = () => {};

  return (
    <div className={styles.authForm}>
      <h3>Авторизация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contentForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email"></label>
            <Input
              id="email"
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

          <div className={styles.inputGroup}>
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
          <div className={styles.ButtonGroup}>
            <Button
              style={{ width: "540px" }}
              size={ButtonSizes.Large}
              type="button"
              backgroundColor={ButtonColors.Primary}
            >
              Войти
            </Button>

            <Button
              style={{ width: "540px" }}
              size={ButtonSizes.Large}
              backgroundColor={ButtonColors.Secondary}
            >
              Зарегистрироваться
            </Button>
          </div>

          <div className={styles.separator}>
            <span>или</span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.buttonGoogle}>
            <Button
              size={ButtonSizes.Large}
              type="button"
              backgroundColor={ButtonColors.Primary}
              onClick={handleGoogleLogin}
              className={styles.buttonGoogle}
            >
              <div className={styles.googleButtonContent}>
                <Google />
                Войти с помощью Google
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
