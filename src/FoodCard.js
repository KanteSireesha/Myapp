import React from "react";

function FoodCard() {
  return (
    <div
      style={{
        border: "2px, solid #000",
        width: "200px",
        borderRadius: " 10px",
      }}
    >
      <img
        width={"300px"}
        src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
        alt="No img"
      />
      <h3>Foreign legpieces</h3>
      <div>
        <span style={{ marginRight: "2rem" }}>Fried Chicken</span>

        <span>200 Per one</span>
      </div>
    </div>
  );
}

export default FoodCard;
