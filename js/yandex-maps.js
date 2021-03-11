ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [7.838162, 98.298861],
        zoom: 16
  });
    var myPlacemark = new ymaps.Placemark([7.838162, 98.298861], {
      balloonContentHeader: 'Hilton Hotel',
      balloonContentBody: 'Description',
      balloonContentFooter: 'Footer description',
    });


    myMap.geoObjects.add(myPlacemark);
}