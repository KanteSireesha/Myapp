import "./Student.css";

function ManageStudent(StudentData) {
  return (
    <div className="student">
      <h2>StudentDetails</h2>
      <table>
        <tbody>
          <tr>
            <th>StudentId</th>
            <th>StudentName</th>
            <th>JoinedCourse</th>
            <th> </th>
          </tr>
          <tr>
            <td>{StudentData.Id}</td>
            <td>{StudentData.Name}</td>
            <td>{StudentData.Course}</td>
            <td>
              <a href=" ">Edit</a>
            </td>
            <td>
              <input type="button" value="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ManageStudent;
