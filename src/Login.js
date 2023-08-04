function Login() {
  return (
    <div>
      <h1>Login Details</h1>
      <table>
        <tr>
          <td> Enter UserName</td>
          <td>
            <input type="text" value="Kante Sireesha" />
          </td>
        </tr>
        <tr>
          <td>Enter Password</td>
          <td>
            <input type="text" value="Na istum" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value=" Clear" />
          </td>
          <td>
            <input type="button" value="Login" />
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Login;
