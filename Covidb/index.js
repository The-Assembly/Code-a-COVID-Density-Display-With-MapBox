function updateMap() {
  fetch("./data.json")
    .then(response => response.json())
    .then(resp => {
      console.log(resp.data)
      resp.data.forEach(element => {
        Lat = element.Lat;
        Long = element.Long;
        cases = element.confirmed;
        recovered = element.recovered;
        death = element.deaths
        coor = [Long, Lat]
        if (cases > 20000) {
          color = "rgb(255, 0, 0)";
        }
        else {
          color = 'rgb(${cases},0,0)'
        }
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Positive cases :' + (cases) + '\n' + 'Recovered:' + (recovered) + '\n' + '  Deaths:' + (death) + '\n'
        );

        var marker = new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([Long, Lat])
          .setPopup(popup)
          .addTo(map);
          
      });
    })
}
updateMap();
