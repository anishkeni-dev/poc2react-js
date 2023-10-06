import { useState } from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import { ItemCard } from "../ItemCard/ItemCard";
import "./itemGrid.css"

interface ItemGridProps {
  items: [];
}
function ItemGrid({ items, }: ItemGridProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <Grid
       className="product-grid"
        container
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {items.map((iten, index) => (
           <Grid item style={{display: 'flex'}} xs={2} sm={4} md={4} key={index}>
           <ItemCard title={iten['name']} tagline={iten['tagline']} imageUrl={iten['image_url']} id={iten['id']}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ItemGrid;
