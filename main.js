window.onload = init;

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [4101654.8454099083, -143052.03490548686],
      zoom: 7,
      maxZoom: 10,
      minZoom: 7,
      rotation: 0.5,
    }),
    // layers: [
    //   new ol.layer.Tile({
    //     source: new ol.source.OSM(),
    //   }),
    // ],
    target: 'js-map',
  });

  //   map.on('click', function(e){
  //     console.log(e.coordinate);
  //   })
  const openStreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: false,
    title: 'OSMStandard',
  });

  const openStreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
      url: 'https://{a-c}.title.openstreet.fr/hot/{z}/{x}/{y}.png',
    }),
    visible: false,
    title: "OSMHumanitarian",
  });

  const StamenTerrian = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
    }),
    visible: true,
    title: 'StamenTerrian',
  })
  map.addLayer(StamenTerrian);
}
