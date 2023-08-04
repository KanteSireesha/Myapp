var Customer = (customerdata) => {
  return (
    <table>
      <tr>
        <th>Add Customer</th>
        <td colSpan={3}>
          <a href="#">ClickHere</a>
        </td>
      </tr>
      <tr>
        <th>Enter CustomerName</th>
        <td>
          <input type="text" />
        </td>
        <button>Find</button>
      </tr>
      <tr>
        <th>CustomerId</th>
        <th>Name</th>
        <th>Location</th>
        <th colSpan={2}>Actions</th>
      </tr>
      <tr>
        <td>{customerdata.CustomerId}</td>
        <td>{customerdata.Name}</td>
        <td>{customerdata.Location}</td>
        <td>
          <a href="#"> Edit</a>
        </td>
        <td>
          {" "}
          <a href="#"> Delete</a>
        </td>
      </tr>
    </table>
  );
};
export default Customer;
