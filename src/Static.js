import "./Static.css";
function Static(Data) {
  return (
    <div>
      <h1 className="H"> {Data.Name}</h1>
      <strong className=" S">{Data.MenuBar}</strong>
      <p className="P">{Data.ContentArea}</p>
      <h3 className=" Three">
        &copy;{Data.Footer}
        <a href="#"> Terms and Conditions</a>
        <a href="#"> Privacy policy</a>
      </h3>
    </div>
  );
}
export default Static;
