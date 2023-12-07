import styled from "styled-components";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { useLogin } from "./useLogin";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";

const LoginForm = styled(Form)`
  width: 48rem;
  margin-top: 2.4rem;
  text-align: left;
`;

const PasswordBox = styled.div`
  display: flex;
  align-items: center;
`;

const Eye = styled.button`
  width: 38px;
  height: 38px;
  margin-left: -45px;
  margin-top: ${(props) => (props.errors.password ? "1px" : "30px")};

  outline: none;

  &:focus {
    outline: none;
    border: none;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

function AdminLoginForm() {
  const { login, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    login(
      { ...data },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          defaultValue={getValues().email}
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <PasswordBox>
        <FormRowVertical
          label="Password"
          error={errors?.password?.message}
          style={{ width: "100%" }}
        >
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            disabled={isLoading}
            defaultValue={getValues().password}
            {...register("password", {
              required: "This field is required",
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,16}$/,
              //   message:
              //     "Password should contain special Char, capital letter, number",
              // },
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Password could not be more than 16 characters",
              },
            })}
          />
        </FormRowVertical>
        <Eye
          type="reset"
          errors={errors}
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {!showPassword ? <HiEye /> : <HiEyeOff />}
        </Eye>
      </PasswordBox>
      <FormRowVertical>
        <Button size="large" bg="green" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </LoginForm>
  );
}

export default AdminLoginForm;
