import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdClear } from "react-icons/md";

import { useCheckout } from "../checkout/useCheckout";
import { useDeleteCheckout } from "../checkout/useDeleteCheckout";
import { useClearCart } from "../cart/useDeleteCart";
import { useCreateOrder } from "./useCreateOrder";

import FlexRow from "../../ui/FlexRow";

const StyledResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10rem;
`;

const Text = styled.p`
  font-weight: 700;
  width: 40rem;
`;

function OrderResult() {
  const { checkout } = useCheckout();
  const { deleteCheckout } = useDeleteCheckout();
  const { clearCart } = useClearCart();

  const { createOrder } = useCreateOrder();

  const [searchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus");

  useEffect(
    function () {
      if (orderStatus === "pending") {
        clearCart();
        if (checkout) {
          createOrder(checkout);
          deleteCheckout();
        }
      } else if (orderStatus === "cancel") deleteCheckout();
    },
    [orderStatus, deleteCheckout, clearCart, createOrder, checkout]
  );

  return (
    <StyledResult>
      {orderStatus === "pending" && (
        <FlexRow gap="3.2">
          <GiCheckMark size={60} color="2b8a3e" />
          <Text>
            Hello, {checkout?.firstname}. Thank you for shopping with Glowing.
            Your payment for {checkout?.totalPrice}$ has been verified. We
            contact you for sending information.
          </Text>
        </FlexRow>
      )}{" "}
      {orderStatus === "cancel" && (
        <FlexRow>
          <MdClear size={60} color="e03131" />
          <Text>
            Your payment was not successful. Your order is pending for payment.
          </Text>
        </FlexRow>
      )}
    </StyledResult>
  );
}

export default OrderResult;
