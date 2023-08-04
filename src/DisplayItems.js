import MyItem from "./MyItem";

function DisplayItems(Itemdata) {
  const proList = Itemdata.ItemList;
  const ProListElements = proList.map((Item) => (
    <MyItem prodata={Item}></MyItem>
  ));
  return <div>{ProListElements}</div>;
}
export default DisplayItems;

// In App.js
const Item = [
  {
    ItemId: "101",
    ImagePath: "./Images/Mango.jpeg",
    Name: "Mango",
    Qty: "2kg",
    Price: "100",
  },
  {
    ItemId: "102",
    ImagePath: "./Images/Orange.jpeg",
    Name: "Orange",
    Qty: "3kg",
    Price: "200",
  },
  {
    ItemId: "103",
    ImagePath: "./Images/Grapes.jpeg",
    Name: "Grapes",
    Qty: "4kg",
    Price: "300",
  },
  {
    ItemId: "104",
    ImagePath: "./Images/Sapota.jpeg",
    Name: "Sapota",
    Qty: "5kg",
    Price: "400",
  },
  {
    ItemId: "105",
    ImagePath: "./Images/Kiwi.jpeg",
    Name: "Kiwi",
    Qty: "6kg",
    Price: "500",
  },
  {
    ItemId: "106",
    ImagePath: "./Images/Berry.jpeg",
    Name: "Berry",
    Qty: "6kg",
    Price: "700",
  },
  {
    ItemId: "107",
    ImagePath: "./Images/Dates.jpeg",
    Name: "Dates",
    Qty: "5kg",
    Price: "600",
  },
  {
    ItemId: "108",
    ImagePath: "./Images/Cherry.jpeg",
    Name: "Cherry",
    Qty: "7kg",
    Price: "800",
  },
];
//const data = { ItemId: "101", Name: "Apple", Qty: "2kg", Price: "100" };
