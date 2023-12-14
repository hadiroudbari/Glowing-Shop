import { useState } from "react";
import styled from "styled-components";

import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useProducts } from "./useProducts";
import AdminProductRowMaktabStock from "./AdminProductRowMaktabStock";
import { useUpdateProductMaktab } from "./useUpdateProduct";

const SaveButton = styled.button`
  position: absolute;
  right: 6.5rem;
  top: 12.5rem;
  width: 15rem;
  padding: 1.2rem 3.6rem;
  margin: 2rem 0 1rem;
  font-weight: 700;

  border-radius: var(--border-radius-tiny);
  border: none;

  color: var(--color-grey-0);
  background-color: var(--color-brand-900);

  &:hover {
    background-color: var(--color-brand-800);
    color: var(--color-grey-0);
  }
`;

function AdminProductTableMaktabStock() {
  const { products, isLoading, count } = useProducts();
  const [updateProducts, setUpdateProducts] = useState([]);

  const { updateProduct, isUpdating } = useUpdateProductMaktab();

  function handleUpdateProducts(newProduct) {
    const isProduct = updateProducts.find(
      (product) => product.id === newProduct.id
    );

    if (isProduct) {
      setUpdateProducts((products) =>
        products.map((product) =>
          product.id === isProduct.id
            ? { ...product, price: newProduct.price, stock: newProduct.stock }
            : product
        )
      );
    } else {
      setUpdateProducts((prev) => [...prev, newProduct]);
    }
  }

  function handleDeleteProduct(id) {
    setUpdateProducts((products) =>
      products.filter((product) => product.id !== id)
    );
  }

  if (isLoading) return <Spinner />;

  if (!products?.length) return <Empty resourceName="products" />;

  return (
    <Menus>
      <SaveButton
        bg="green"
        disabled={isUpdating || !updateProducts.length}
        onClick={() => {
          updateProduct(updateProducts);
          setUpdateProducts([]);
        }}
      >
        Save
      </SaveButton>
      <Table columns="0.3fr 3fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Product</div>
          <div>Price</div>
          <div>Stock</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={products}
          render={(product) => (
            <AdminProductRowMaktabStock
              handleUpdateProducts={handleUpdateProducts}
              handleDeleteProduct={handleDeleteProduct}
              isUpdating={isUpdating}
              product={product}
              key={product.id}
            />
          )}
        ></Table.Body>
      </Table>
      <Pagination count={count} />
    </Menus>
  );
}

export default AdminProductTableMaktabStock;
