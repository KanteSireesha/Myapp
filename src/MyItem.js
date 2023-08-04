import "./MyItem.css";

function MyItem(Itemdata) {
  return (
    <table>
      <tbody>
        <tr>
          <th>ItemId</th>
          <th>Image</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th colSpan={2}>Actions</th>
        </tr>
        <tr>
          <td>{Itemdata.prodata.ItemId}</td>
          <td>
            <img
              src={Itemdata.prodata.ImagePath}
              alt={Itemdata.prodata.ImagePath}
            ></img>
          </td>
          <td>{Itemdata.prodata.Name}</td>
          <td>{Itemdata.prodata.Qty}</td>
          <td>{Itemdata.prodata.Price}</td>
          <td>
            <a href=" #">Edit</a>{" "}
          </td>
          <td>
            <a href=" #">Delete</a>{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default MyItem;
