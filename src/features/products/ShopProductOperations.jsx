import styled from "styled-components";

import Row from "../../ui/Row";
import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

const Text = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-600);
  font-weight: 600;
`;

const Count = styled.span`
  color: var(--color-grey-900);
  font-weight: 700;
`;

function ShopProductOperations() {
  return (
    <Row type="horizontal">
      <Text>
        We found <Count>95</Count> products available for you
      </Text>

      <TableOperations>
        <Filter
          type="normal"
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No Discount" },
            { value: "with-discount", label: "With Discount" },
          ]}
        />

        <SortBy
          type="normal"
          sortValue="sortBy"
          options={[
            { value: "", label: "Sort by" },
            { value: "price-asc", label: "Sort by price (low first)" },
            { value: "price-desc", label: "Sort by price (high first)" },
            { value: "created_at-asc", label: "Sort by latest" },
            { value: "created_at-desc", label: "Sort by newest" },
          ]}
        />
      </TableOperations>
    </Row>
  );
}

export default ShopProductOperations;
