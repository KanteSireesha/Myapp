import React from "react";
export default class Item extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>ItemId</td>
            <td>{this.props.ItemId}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{this.props.Name}</td>
          </tr>
          <tr>
            <td>Qty</td>
            <td>{this.props.Qty}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{this.props.Price}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
