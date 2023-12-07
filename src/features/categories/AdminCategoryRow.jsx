import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";

import AdminCategoryTable from "./AdminCategoryTable";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";

const IconBox = styled.div`
  width: 6.4rem;
  height: 6.4rem;
`;

const Icon = styled.img`
  display: block;
  padding: 1rem;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Category = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Urbanist";
`;

const StyledId = styled.div`
  font-weight: 900;
`;

function AdminCategoryRow({ category }) {
  const {
    id,
    name,
    icon,
    topCategories: { name: topCategory },
  } = category;

  return (
    <Table.Row>
      <StyledId>{id < 10 ? "0" + id : id}</StyledId>
      <IconBox>
        <Icon src={icon} />
      </IconBox>
      <Category>{name}</Category>
      <Category>{topCategory}</Category>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={1} />

            <Menus.List id={1}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <AdminCategoryTable cabinToEdit="" />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="cabins" />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default AdminCategoryRow;
