import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { mutate } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// fetching data from ISS App:
const fetcher = (url) =>
  fetch(url)
    .then(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    });

export default function IssPosition() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // return (
  //   <div>
  //     <h1>ISS Position</h1>
  //     <p>Longitude; {data.longitude}</p>
  //     <p>Latitude; {data.latitude}</p>
  //   </div>
  // );
  // console.log("ISS DATA :", data);

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()} // manuelles Neuladen beim Klicken
      />
    </main>
  );
}

// export default function ISSTracker() {
// const [coords, setCoords] = useState({
//   longitude: 0,
//   latitude: 0,
// });

// async function getISSCoords() {
//   try {
//     const response = await fetch(URL);
//     if (response.ok) {
//       const data = await response.json();
//       setCoords({ longitude: data.longitude, latitude: data.latitude });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(() => {
//   const timer = setInterval(() => {
//     getISSCoords();
//   }, 5000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
