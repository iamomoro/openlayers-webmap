window.onload = init;

var mapview = new ol.View({
  center: [36.823102996344026, -1.2884355721062337],
  zoom: 12,
  projection: 'EPSG:4326',
});

function init() {
  const map = new ol.Map({
    view: mapview,
    // layers: [
    //   new ol.layer.Tile({
    //     source: new ol.source.OSM(),
    //   }),
    // ],
    target: 'js-map',
  });

  map.on('click', function (e) {
    alert(e.coordinate, mapview.getZoom());
  });

  // base maps layers
  const openStreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard',
  });

  const openStreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
      url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    }),
    visible: false,
    title: 'OSMHumanitarian',
  });

  const StamenTerrian = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
    }),
    visible: false,
    title: 'StamenTerrian',
  });

  //Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [openStreetMapStandard, openStreetMapHumanitarian, StamenTerrian],
  });
  map.addLayer(baseLayerGroup);

  //Layer Switcher Logic for Basemaps
  const baseLayerElements = document.querySelectorAll(
    '.sidebar > input[type=radio]'
  );
  for (let baseLayerElement of baseLayerElements) {
    baseLayerElement.addEventListener('change', function () {
      let baseLayerElementValue = this.value;
      baseLayerGroup.getLayers().forEach(function (element, index, array) {
        let baseLayerTitle = element.get('title');
        element.setVisible(baseLayerTitle === baseLayerElementValue);
      });
    });
  }
}
