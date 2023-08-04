const List = [
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/D91BBB02-FDCC-46F2-AD09-59DF9E3552D5/0-2x3.jpg?width=240",
    Name: "Fourth Estate",
  },
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/10C323E4-4C00-4A97-A949-480D1581F8B2/0-2x3.jpg?width=240",
    Name: "Grahapravesham",
  },
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/D85E3BF2-0772-433D-8B53-4E18A12FFD93/0-2x3.jpg?width=240",
    Name: "Kaaliyin Avadharippu",
  },
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/5FD00D95-9F4E-4D90-A606-6FD9EFAF6F2B/0-2x3.jpg?width=240",
    Name: "The Trip",
  },
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/F5C8A39D-E3C9-4FEF-8E30-25FD02D73172/0-2x3.jpg?width=240",
    Name: " Die to Restart",
  },
  {
    ImageLink:
      "https://image-resizer-cloud-api.akamaized.net/image/0BEC826F-23D5-4D11-9490-CD62B4D167B7/0-2x3.jpg?width=240",
    Name: "Savam Epdi Thappichi",
  },
];

function Aha() {
  return (
    <div>
      {List.map((Moviedata) => {
        return (
          <div>
            <img src={Moviedata.ImageLink} alt={Moviedata.ImageLink}></img>
            <h1>{Moviedata.Name}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Aha;
