import { HiPlus } from "react-icons/hi2";

import ProductForm from "./AdminProductForm";
import Modal from "../../ui/Modal";
import ButtonAdd from "../../ui/ButtonAdd";

function AddProduct() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="product-form">
          <ButtonAdd>
            <HiPlus />
          </ButtonAdd>
        </Modal.Open>
        <Modal.Window name="product-form">
          <ProductForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProduct;
