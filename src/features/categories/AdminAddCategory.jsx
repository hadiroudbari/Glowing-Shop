import { HiPlus } from "react-icons/hi2";
import ButtonAdd from "../../ui/ButtonAdd";
import Modal from "../../ui/Modal";
import AdminCreateCategoryForm from "./AdminCreateCategoryForm";

function AdminAddCategory() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="category-form">
          <ButtonAdd>
            <HiPlus />
          </ButtonAdd>
        </Modal.Open>
        <Modal.Window name="category-form">
          <AdminCreateCategoryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AdminAddCategory;
