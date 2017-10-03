import { Factory } from 'rosie';

export default new Factory()
  .sequence("id")
  .attr("coord", {
    lat: 13.41,
    lon: 52.52
  })
  .attr("weather", [
     {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
     }
  ])
  .attr("base", "stations")
  .attr("main", {
     temp: 287.15,
     pressure: 1021,
     humidity: 87,
     temp_min: 287.15,
     temp_max: 287.15
   })
   .attr("visibility", 10000)
   .attr("wind", {
     speed:2.6,
     deg:210
   })
   .attr("clouds", {
     all:75
   })
   .attr("dt", 1506873000)
   .attr("sys", {
     type: 1,
     id: 4892,
     message: 0.0031,
     country: 'DE',
     sunrise: 1506834526,
     sunset: 1506876107
   })
  .attr("name", "Berlin")
  .attr("cod", 200)
