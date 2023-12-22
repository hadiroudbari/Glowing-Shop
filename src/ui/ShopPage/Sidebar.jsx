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
        filterField="highlight"
        options={[
          { value: "best-seller", label: "Best Seller" },
          { value: "new-arrival", label: "New Arrivals" },
          { value: "most-reviews", label: "Most Reviews" },
          { value: "hot-items", label: "Hot Items" },
        ]}
      />

      <SidebarItem
        title="Size"
        filterField="size"
        options={[
          { value: "size-single", label: "Single" },
          { value: "size-pack", label: "Pack" },
          { value: "size-full", label: "Full size" },
          { value: "size-mini", label: "Mini size" },
        ]}
      />

      <SidebarItem
        title="Colors"
        filterField="colors"
        options={[
          { value: "color-black", label: "Black", color: "#000000" },
          { value: "color-pack", label: "White", color: "#ffffff" },
          { value: "color-full", label: "Pink", color: "#f06595" },
          { value: "color-mini", label: "Maroon", color: "#672612" },
          { value: "color-mini", label: "Red", color: "#c71818" },
          { value: "color-mini", label: "Dark Heathe", color: "#5e5e5e" },
        ]}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
