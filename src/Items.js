import React from "react";
import Item from "./Item";
export default class Items extends React.Component {
  render() {
    return (
      <div>
        <Item ItemId="101" Name="Apple" Qty="2kg" Price="100"></Item>
        <Item ItemId="102" Name="Orange" Qty="3kg" Price="200"></Item>
        <Item ItemId="103" Name="Grapes" Qty="4kg" Price="300"></Item>
        <Item ItemId="104" Name="Sapota" Qty="5kg" Price="400"></Item>
        <Item ItemId="105" Name="Kiwi" Qty="6kg" Price="500"></Item>
      </div>
    );
  }
}
