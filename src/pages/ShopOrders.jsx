import OrderResult from "../features/orders/ShopOrderResult";
import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import HeaderTitle from "../ui/Header/HeaderTitle";

function Orders() {
  return (
    <>
      <Header type="shop">
        <HeaderNav current="Orders" currentLink="orders" />
        <HeaderTitle>Orders</HeaderTitle>
      </Header>

      <OrderResult />
    </>
  );
}

export default Orders;
