console.log("The index.js file is running!");
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoib2xlc2lhLWFnIiwiYSI6ImNrMTZtZWlrcjAwc2QzbHFwZmNldG44c2gifQ.zu7TDpNCyoLvMzQfwxdLyA";

let map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

