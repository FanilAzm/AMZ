;
// Начинать писать отсюда!!!!



/////////////////////////////////////////

$(document).ready(function(){

    ////////////// mmenu /////////////////

    var $menu = $("#my-menu").mmenu({
      "navbar": {
        "title": ""
      },
      extensions: ['theme-white', 'position-front'],
    });

    var $icon = $("#nav__mobile");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();
    });

    API.bind( "opened", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
       $icon.on( "click", function() {
          API.close();
       });
    });

   API.bind( "closed", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
      }, 100);
      $icon.on( "click", function() {
         API.open();
      });
    });

   $("#nav__mobile-menu").click(function() {
      API.close ();
    });

  /////////////// height ////////////////////

  // $(".parts-item__cart").equalHeights();

  ///////////// fancybox ////////////////////

  $(".fancybox").fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
      helpers : {
        title : {
            type: 'outside'
        },
        thumbs  : {
            width : 50,
            height  : 50
        }
      }
    }
  );

  $(".fancybox2").fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
      helpers : {
        title : {
            type: 'outside'
        },
        thumbs  : {
            width : 50,
            height  : 50
        }
      }
    }
  );


  // $('.plus').click(function(){
  //   $('.parts-item').toggleClass('active');
  // });

	$('.js-slider').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '.slick-next',
  prevArrow: '.slick-prev',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

  $('.js-doing__icons').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  $('.js-review__slider').slick({
    dots: true,
    nextArrow: '.review-slider__next',
    prevArrow: '.review-slider__prev',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});


/////////////// Map ///////////////////

  // ymaps.ready(init);
  //   function init(){ 

  //     var myMap = new ymaps.Map("map", {
  //       center: [57.96715456660291,56.22395449999996],
  //       zoom: 16,
  //       controls: ['zoomControl']
  //     });

  //     myMap.behaviors.disable(['scrollZoom']).enable('ruler');

  //     var coords = [
  //         [57.96715456660291,56.22395449999996]
  //     ];

  //     var myCollection = new ymaps.GeoObjectCollection({}, {
  //         // iconLayout: 'default#image',
  //         // iconImageHref: 'static/img/general/map.png',
  //         // iconImageSize: [34, 53],
  //         // iconImageOffset: [-20, -70],
  //         preset: 'islands#blueGlyphCircleIcon',
  //         iconGlyph: 'music',
  //         // iconContent: 'улица Лодыгина, 53',
  //     });

  //     for (var i = 0; i < coords.length; i++) {
  //         myCollection.add(new ymaps.Placemark(coords[i]));
  //     }

  //     myMap.geoObjects.add(myCollection);
  //   };