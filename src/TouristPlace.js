import "./TouristPlace.css";

function TouristPlace(TouristPlacedata) {
  return (
    <div className="tourist">
      <h1>{TouristPlacedata.Name}</h1>
      <img
        src={TouristPlacedata.ImagePath}
        alt={TouristPlacedata.ImagePath}
      ></img>
      <h3>{TouristPlacedata.Type}</h3>
      <p>{TouristPlacedata.Description}</p>
      <a href={TouristPlacedata.MoreInfo} target="_blank">
        {" "}
        MoreInfo
      </a>
    </div>
  );
}
export default TouristPlace;

// App.js
import TouristPlace from "./TouristPlace";

<div>
  <TouristPlace
    Name="Srinagar"
    ImagePath="./Images/Srinagar.jpg"
    Type="Hill Station"
    Description="Famously known as 'Heaven on Earth, Srinagar is located in the union territory
       of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats
       and gondola-type rowboats- Shikaras on Dal Lake."
    MoreInfo="https://www.holidify.com/places/srinagar/"
  ></TouristPlace>
  <TouristPlace
    Name="Sun Temple"
    ImagePath="./Images/SunTemple.jpg"
    Type="Historic Place"
    Description="Dedicated to Lord Surya, this 13th-century temple is an architectural
        marvel and the quintessential example of Oriyan form of architecture. It is believed that
        the temple was constructed by King Narasimhadeva I of Eastern Ganga Dynasty."
    MoreInfo="https://www.holidify.com/places/konark/sun-temple-sightseeing-2438.html"
  ></TouristPlace>
</div>;
