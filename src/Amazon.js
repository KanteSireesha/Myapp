import React from "react";
import { Col } from "reactstrap";
import "./Amazon.css";

const ItemsList = [
  {
    ImageLink: "https://m.media-amazon.com/images/I/41F-W1-zs4L._AC_SY164_.jpg",
    Description:
      "Bella Vita Luxury Woman Eau De Parfum Gift Set 4x20 ML for Women with CEO, Honey Oud, Glam,Rose Perfume|Floral,Fruity Long Lasting EDP Fragrance Scent",

    Price: "Rs.549.00",
  },
  {
    ImageLink: "https://m.media-amazon.com/images/I/410GLg7fZkL._AC_SY164_.jpg",
    Description:
      "Ajanta Abstract Metal Quartz Wall Clock (32 cm x 32 cm x 3.5 cm, White)",

    Price: "Rs,.490.00",
  },
  {
    ImageLink: "https://m.media-amazon.com/images/I/6137IbwpvvL._AC_SY164_.jpg",
    Description:
      "Best of Children’s Classics (Set of 5 Books): Perfect Gift Set for Kids Paperback ",

    Price: "Rs.500.00",
  },
  {
    ImageLink: "https://m.media-amazon.com/images/I/51KynMvMo7L._AC_SY164_.jpg",
    Description:
      "Sukkhi Elegant Kundan Rakhi with Roli Chawal and Raksha Bandhan Greeting Card For Men",

    Price: "Rs.150.00",
  },
  {
    ImageLink: "https://m.media-amazon.com/images/I/51Zzz7dpZtL._AC_SY164_.jpg",
    Description:
      "ANNACREATIONS Korean Style Gold Metal Pearl Geometric Stone Lock Hair Pins Hair Clip Hair Accessories Jewellery for Women And Girls (6 PCS)",
    Price: "Rs.300.00",
  },
];

const FruitList = [
  { ImagePath: "Images/Berry.jpeg", Name: "Berry" },
  { ImagePath: "Images/Cherry.jpeg", Name: "Cherry" },
  { ImagePath: "Images/Dates.jpeg", Name: "Dates" },
  { ImagePath: "Images/Grapes.jpeg", Name: "Grapes" },
  { ImagePath: "Images/Mango.jpeg", Name: "Mango" },
  { ImagePath: "Images/Orange.jpeg", Name: "Orange" },
];

function Amazon() {
  return (
    <Col>
      <div>
        <h1>Products</h1>
        {ItemsList.map((Item) => {
          return (
            <div className="amazon" style={{ display: "inline-block" }}>
              <img src={Item.ImageLink} alt={Item.ImageLink}></img>
              <p>{Item.Description}</p>
              <b>{Item.Price}</b>
            </div>
          );
        })}

        <h1>Friuts</h1>

        {FruitList.map((Fruit) => {
          return (
            <div className="amazon" style={{ display: "inline-block" }}>
              <img src={Fruit.ImagePath} alt={Fruit.ImagePath}></img>
              <strong>{Fruit.Name}</strong>
            </div>
          );
        })}
      </div>
    </Col>
  );
}
export default Amazon;
