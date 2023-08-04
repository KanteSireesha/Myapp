import "./Student.css";

function ShowStudent(StudentData) {
  return (
    <div className="student">
      <h2>StudentDetails</h2>
      <table>
        <tbody>
          <tr>
            <td>StudentId</td>
            <td>{StudentData.Id}</td>
          </tr>
          <tr>
            <td>StudentName</td>
            <td>{StudentData.Name}</td>
          </tr>
          <tr>
            <td>JoinedCourse</td>
            <td>{StudentData.Course}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ShowStudent;
