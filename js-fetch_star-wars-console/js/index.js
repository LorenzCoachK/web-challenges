console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  const IndexZero = data.results[0];
  const onlyMale = data.results.filter((person) => person.gender === "male"); // gibt mir ein Array mit den zutreffenden Values zurück
  const onlyMaleFind = data.results.find((person) => person.gender === "male"); // gibt mir den ersten Value der zu zutreffenden Bedingung zurück
  const r2D2 = data.results.find((person) => person.name === "R2-D2");
  console.log(`R2-D2 hat die Augenfarbe ${r2D2.eye_color}`);
  console.log("Only Male :", onlyMale);
  console.log("Only Male with find :", onlyMaleFind);
  console.log(IndexZero);
  console.log(data);
}

fetchData();
