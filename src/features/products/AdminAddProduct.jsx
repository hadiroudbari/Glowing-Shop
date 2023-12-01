import styled from "styled-components";
import Modal from "../../ui/Modal";
import CreateProductForm from "./AdminCreateProductForm";
import { HiPlus } from "react-icons/hi2";

const StyledAddBtn = styled.button`
  width: 3rem;
  height: 3rem;

  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-900);
  color: var(--color-grey-0);
  margin-left: 2rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: transparent;
    color: var(--color-brand-900);
    border-color: var(--color-brand-900);
  }
`;

function AddProduct() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="product-form">
          <StyledAddBtn>
            <HiPlus />
          </StyledAddBtn>
        </Modal.Open>
        <Modal.Window name="product-form">
          <CreateProductForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProduct;
