import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useCart } from "../cart/useCart";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import { parseISO } from "date-fns";
import { useAddCheckout } from "./useAddCheckout";
import { useNavigate } from "react-router-dom";

const FormBox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function CheckoutForm() {
  const { cart } = useCart();
  const { addCheckout } = useAddCheckout();

  const totalPrice = cart?.reduce(
    (acc, cur) => (acc += (cur.price - cur.discount) * cur.quantity),
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const arrived_at = new Date(data.arrived_at).toISOString();

    addCheckout(
      { ...data, totalPrice, arrived_at, products: { ...cart } },
      {
        onSuccess: () => {
          reset();
        },
      }
    );

    window.location.assign("http://localhost:5173/payment.html");
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <FormBox>
      <Heading as="h2">Shipping Information</Heading>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="First Name :" error={errors?.firstname?.message}>
          <Input
            type="text"
            id="firstname"
            {...register("firstname", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Last Name :" error={errors?.lastname?.message}>
          <Input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Email Address :" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Address :" error={errors?.address?.message}>
          <Input
            type="text"
            id="address"
            {...register("address", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Phone Number :" error={errors?.phone?.message}>
          <Input
            type="number"
            id="phone"
            {...register("phone", {
              required: "This field is required",
              minLength: {
                value: 11,
                message: "Phone number should be 11 char",
              },
              maxLength: {
                value: 11,
                message: "Phone number should be 11 char",
              },
            })}
          />
        </FormRow>

        <FormRow label="Arrived At :" error={errors?.arrived_at?.message}>
          <Input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            id="arrived_at"
            {...register("arrived_at", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <Button>Place Order</Button>
      </Form>
    </FormBox>
  );
}

export default CheckoutForm;
