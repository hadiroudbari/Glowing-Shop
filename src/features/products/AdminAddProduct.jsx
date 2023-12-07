import { HiPlus } from "react-icons/hi2";

import CreateProductForm from "./AdminCreateProductForm";
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
          <CreateProductForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProduct;
