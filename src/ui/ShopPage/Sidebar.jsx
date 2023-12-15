import styled from "styled-components";
import SidebarCategory from "./SidebarCategory";
import SidebarItem from "./SidebarItem";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarCategory />
      <SidebarItem
        title="Price"
        filterField="priceRange"
        options={[
          { value: "all", label: "All" },
          { value: "10-50", label: "$10 - $50" },
          { value: "50-100", label: "$50 - $100" },
          { value: "100-200", label: "$100 - $200" },
        ]}
      />

      <SidebarItem
        title="Highlight"
        filterField="Highlight"
        options={[
          { value: "best-seller", label: "Best Seller" },
          { value: "new-arrival", label: "New Arrivals" },
          { value: "most-reviews", label: "Most Reviews" },
          { value: "hot-items", label: "Hot Items" },
        ]}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
