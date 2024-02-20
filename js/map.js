document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools

  //Яндекс карта map//
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { //1 метка
        center: [55.164166, 61.293049],
        zoom: 13,
        controls: [] //Убрали увеличитель и др..
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myGeoObject = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'КРЫЛАТКО',
        balloonContent: 'КРЫЛАТКО <br>9:00-20:00'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
            iconImageHref: 'img/address-png/icone-1.png',
            // iconImageHref: 'https://raw.githubusercontent.com/leska-ver/elka-Max/main/img/favicon.png',
            // Размеры метки.
        iconImageSize: [25, 40],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      })

    myMap.geoObjects.add(myGeoObject);
  });


    
});