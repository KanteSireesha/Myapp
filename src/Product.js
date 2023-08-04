function Product() {
  return (
    <div>
      <h1>Product Details</h1>
      <table>
        <tr>
          <td>ProductId</td>
          <td>
            <input type="text" value="101" />
          </td>
        </tr>
        <tr>
          <td>ProductName</td>
          <td>
            <input type="text" value="Apple" />
          </td>
        </tr>
        <tr>
          <td>Quantity</td>
          <td>
            <input type="text" value="10pcs" />
          </td>
        </tr>
        <tr>
          <td>Price</td>
          <td>
            <input type="text" value="100" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="Saveproduct" />
          </td>
          <td>
            <input type="button" value="Clear" />
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Product;
