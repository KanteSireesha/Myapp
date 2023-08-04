//JSX with Variables
const Product = { ProductId: 101, Name: "Orange", Qty: "12pcs", Price: 100 };
const productdetails = (
  <table border={20}>
    <tr>
      <td>ProductId</td>
      <td>{Product.ProductId}</td>
    </tr>
    <tr>
      <td>ProductName</td>
      <td>{Product.Name}</td>
    </tr>
    <tr>
      <td>Qty</td>
      <td>{Product.Qty}</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>{Product.Price}</td>
    </tr>
    <tr>
      <td>DiscountAmount</td>
      <td>{(Product.Price * 10) / 100}</td>
    </tr>
    <tr>
      <td>TotalAmount</td>
      <td>{Product.Price - (Product.Price * 10) / 100}</td>
    </tr>
  </table>
);
const UserDetails = {
  username: "raman",
  Email: "123@gmail.com",
};
function UserName(user) {
  return user.username;
}
function UserEmail(user) {
  return user.username + "@" + user.Email;
}
var result = (
  <h1>
    Welcome to {UserName(UserDetails)} E-Mail Id:{UserEmail(UserDetails)}
  </h1>
);
function Display() {
  return result;
}
export default Display;
