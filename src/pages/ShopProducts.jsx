import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import HeaderTitle from "../ui/Header/HeaderTitle";
import Products from "../features/products/ShopProducts";

function Shop() {
  return (
    <>
      <Header>
        <HeaderNav />
        <HeaderTitle>Explore our Shop</HeaderTitle>
      </Header>
      <Products />
    </>
  );
}

export default Shop;
