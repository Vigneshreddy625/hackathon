export const fetchDisasterData = async () => {
  const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=15.0&lat=0.0&date=2023-01-01&dim=0.10&api_key=tmODukrUA7bkWCBVcUoJQ4kqF5PWvaYmdR0BJaSU`);
  const data = await response.json();
  return data;
};
