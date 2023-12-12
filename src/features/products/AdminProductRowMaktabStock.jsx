import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import Table from "../../ui/Table";
import { useEffect, useState } from "react";

const Product = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Urbanist";
`;

const Price = styled.div`
  font-family: "Urbanist";
  font-weight: 800;
`;

const PriceInput = styled.input`
  width: 15rem;
  font-family: "Urbanist";
  font-weight: 800;
  border: 2px solid var(--color-brand-900);
`;

const Stock = styled.div`
  font-family: "Urbanist";
  font-weight: 600;
`;

const StockInput = styled.input`
  width: 15rem;
  font-family: "Urbanist";
  font-weight: 600;
  border: 2px solid var(--color-brand-900);
`;

const StyledId = styled.div`
  font-weight: 900;
`;

function AdminProductRowMaktabStock({
  product,
  handleUpdateProducts,
  isUpdating,
}) {
  const [editPrice, setEditPrice] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  const { id, name, price, stock } = product;

  const [updatePrice, setUpdatePrice] = useState(price || 0);
  const [updateStock, setUpdateStock] = useState(stock || 0);

  useEffect(
    function () {
      if (isUpdating) {
        setEditPrice(false);
        setEditStatus(false);
      }
    },
    [isUpdating]
  );

  return (
    <Table.Row>
      <StyledId>
        {id < 10 && "00" + id}
        {id >= 10 && "0" + id}
        {id >= 100 && id}
      </StyledId>
      <Product>{name}</Product>

      {editPrice ? (
        <PriceInput
          type="number"
          value={updatePrice}
          onChange={(e) => {
            setUpdatePrice(+e.target.value);
            handleUpdateProducts({
              id,
              stock: updateStock,
              price: +e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.code === "Escape") setEditPrice(false);
          }}
        />
      ) : (
        <Price onClick={() => setEditPrice(true)}>
          {formatCurrency(updatePrice)}
        </Price>
      )}

      {editStatus ? (
        <StockInput
          type="number"
          value={updateStock}
          onChange={(e) => {
            setUpdateStock(+e.target.value);
            handleUpdateProducts({
              id,
              price: updatePrice,
              stock: +e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.code === "Escape") setEditStatus(false);
          }}
        />
      ) : (
        <Stock onClick={() => setEditStatus(true)}>{updateStock}</Stock>
      )}
    </Table.Row>
  );
}

export default AdminProductRowMaktabStock;
