
// SIstema de FIltragem com certo tipo de Segmento(utilizando FreeWall)
    $("#Promocao").click(function(){
        $("#estilo").hide();
        $("#pessoa").hide();
        $("#movel").hide();
        $("#ambiente").hide();
        $("#decoracao").hide();
        Interace_fade();
    var temp = "<div class='brink' id='promocao' style='width:350px; height: 320px; background-image: url(imagens/promocao/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;

    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");

      });
      $("#Estilo").click(function(){
        $("#promocao").hide();
        $("#pessoa").hide();
        $("#movel").hide();
        $("#ambiente").hide();
        $("#decoracao").hide();
        Interace_fade();
        var temp = "<div class='brink' id='estilo' style='width:300px; height: 300px; background-image: url(imagens/Estilo/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;

    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");

      });
      $("#Pessoa").click(function(){
        $("#promocao").hide();
        $("#estilo").hide();
        $("#movel").hide();
        $("#ambiente").hide();
        $("#decoracao").hide();
        Interace_fade();
        var temp = "<div class='brink' id='pessoa' style='width:350px; height: 320px; background-image: url(imagens/Pessoa/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;

    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");

      });

      $("#Movel").click(function(){
        $("#promocao").hide();
        $("#estilo").hide();
        $("#pessoa").hide();
        $("#ambiente").hide();
        $("#decoracao").hide();
        Interace_fade();

        var temp = "<div class='brink' id='movel' style='width:350px; height: 320px; background-image: url(imagens/Movel/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;
    console.log(w);
    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");
      });
      $("#Ambiente").click(function(){
        $("#promocao").hide();
        $("#movel").hide();
        $("#estilo").hide();
        $("#pessoa").hide();
        $("#decoracao").hide();
        Interace_fade();

    var temp = "<div class='brink' id='ambiente' style='width:350px; height: 320px; background-image: url(imagens/Ambiente/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;

    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");

      });
      $("#Decoracao").click(function(){
        $("#promocao").hide();
        $("#estilo").hide();
        $("#ambiente").hide();
        $("#movel").hide();
        $("#pessoa").hide();
        Interace_fade();
    var temp = "<div class='brink' id='decoracao' style='width:350px; height: 320px; background-image: url(imagens/Decoracao/{foto}.jpg); background-repeat: no-repeat; background-sizer: cover;'></div>";
    var w = 1,html='',limit=6;

    for (var i = 0; i < limit; i++) {
    html += temp.replace("{foto}", i );
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brink',
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function(){
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    $(window).trigger("resize");

      });

//Efeitos Nas Imagens
$( ".fade-out" ).hover(function() {
    $(this).css("background", "#DAA520");
  },
  function() {
    $(this).css("background", "rgb(255, 255, 255)");
  }
);
function Interace_fade(){
    $("#decoracao").hover(function(){
        $(this).css("border", " 5px solid #DAA520");
    },function(){
        $(this).css("border", "none");
    });

}
$(".button").hover(function(){
    $(this).css("background", "#DAA520")
},function(){
    $(this).css('background', '#ccc');
});
$(".button-slide").hover(function(){
    $(this).css("background", "#DAA520")
},function(){
    $(this).css('background', '#ccc');
});