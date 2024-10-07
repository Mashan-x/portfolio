// Определим свои функции добавления/удаления класса, так как те, что в jQuery не работают для SVG
jQuery.fn.myAddClass = function (classTitle) {
  return this.each(function() {
    var oldClass = jQuery(this).attr("class");
    oldClass = oldClass ? oldClass : '';
    jQuery(this).attr("class", (oldClass+" "+classTitle).trim());
  });
}
jQuery.fn.myRemoveClass = function (classTitle) {
  return this.each(function() {
      var oldClassString = ' '+jQuery(this).attr("class")+' ';
      var newClassString = oldClassString.replace(new RegExp(' '+classTitle+' ','g'), ' ').trim()
      if (!newClassString)
        jQuery(this).removeAttr("class");
      else
        jQuery(this).attr("class", newClassString);
  });
}

// Начинаем работу когда страница полностью загружена (включая графику)
$(window).load(function () {
  // Получаем доступ к SVG DOM
  var svgobject = document.getElementById('imap'); 
  if ('contentDocument' in svgobject)
    var svgdom = svgobject.contentDocument;

  // Хак для WebKit (чтобы правильно масштабировал нашу карту)
  var viewBox = svgdom.rootElement.getAttribute("viewBox").split(" ");
  var aspectRatio = viewBox[2] / viewBox[3];
  svgobject.height = parseInt(svgobject.offsetWidth / aspectRatio);

//	alert(svgobject);

  // Взаимодействие карты и таблички регионов
  $("#areas input[type=checkbox]").change(function() {
    var row = $(this).parent().parent();
    var id = row.attr("id");
    if (this.checked) {
      row.addClass("selected");
      $("#"+id, svgdom).myAddClass("selected");
    } else {
      row.removeClass("selected");
      $("#"+id, svgdom).myRemoveClass("selected");
    }
  });

  // Скрытие названий по чекбоксу
  $("#titleswitch").change(function () {
    var elements = $(svgdom.getElementsByClassName("areatitle"))
      .add($(svgdom.getElementsByClassName("citytitle")))
      .add($(svgdom.getElementsByClassName("titlebox")))
      .add($(svgdom.getElementsByClassName("titleline")));
    if (this.checked) {
      elements.myAddClass("hidden");
    } else {
      elements.myRemoveClass("hidden");
    }
  });

  // Подсвечиваем регион на карте при наведении мыши на соотв. строку таблицы.
  $("#areas tr").hover(
    function () {
      var id = $(this).attr("id");
      $("#"+id, svgdom).myAddClass("highlight");

    }, 
    function () {
      var id = $(this).attr("id");
      $("#"+id, svgdom).myRemoveClass("highlight");

    }
  );  

 // Подсвечиваем строку в таблице при наведении мыши на соотв. регион на карте
  $(svgdom.getElementsByClassName("area")).hover(

    function () {
      var id = $(this).attr("id");
		//console.log(id);
      $("#areas #"+id).addClass("highlight");
    }, 
    function () {
      var id = $(this).attr("id");
      $("#areas #"+id).removeClass("highlight");
    }
  );
	$(function(){
		$(svgdom.getElementsByClassName("area")).click(function() {
			var id = $(this).attr("id");
		
			//console.log('Click');
			if(id == 'pathbratsk')
				window.open("http://www.bratsk-city.ru");
			else if(id == 'pathzima')
				window.open("http://zimadm.ru");
			else if(id == 'pathirkutsk')
				window.open("http://admirk.ru");
			else if(id == 'pathsayansk')
				window.open("http://www.admsayansk.ru");
			else if(id == 'pathsvirsk')
				window.open("http://www.svirsk.ru");
			else if(id == 'pathtulun')
				window.open("http://www.tulunadm.ru");
			else if(id == 'pathusolesibirskoe')
				window.open("http://www.usolie-sibirskoe.ru");
			else if(id == 'pathustilimsk')
				window.open("http://www.ust-ilimsk.ru");
			else if(id == 'pathcheremhovo')
				window.open("http://admcher.ru");
			else if(id == 'pathangarskii_rn')
				window.open("http://angarsk-adm.ru");
			else if(id == 'pathbalaganskii_rn')
				window.open("http://www.adminbalagansk.ru");
			else if(id == 'pathbodaibinskii_rn')
				window.open("http://bodaybogold.ru");
			else if(id == 'pathbratskii_rn')
				window.open("http://www.bratsk-raion.ru");
			else if(id == 'pathjigalovskii_rn')
				window.open("http://zhigalovo.irkobl.ru");
			else if(id == 'pathzalarinskii_rn')
				window.open("http://www.zalari.ru");
			else if(id == 'pathziminskii_rn')
				window.open("http://www.rzima.ru");
			else if(id == 'pathirkutskii_rn')
				window.open("http://www.irkraion.ru");
			else if(id == 'pathkazachinsko-lenski_rn')
				window.open("http://adminklr.ru");
			else if(id == 'pathkatangskii_rn')
				window.open("http://катанга.рф");
			else if(id == 'pathkachugskii_rn')
				window.open("http://kachug.irkobl.ru");
			else if(id == 'pathkirenskii_rn')
				window.open("http://kirenskrn.irkobl.ru");
			else if(id == 'pathkuitunskii_rn')
				window.open("http://kuitun.irkobl.ru");
			else if(id == 'pathmamsko-chuiskii_rn')
				window.open("http://mchr.irkobl.ru");
			else if(id == 'pathnijneilimskii_rn')
				window.open("http://nilim.irkobl.ru");
			else if(id == 'pathnijneudinskii_rn')
				window.open("http://nuradm.ru");
			else if(id == 'patholhonskii_rn')
				window.open("http://www.adm-olkhon.ru");
			else if(id == 'pathslyudyanskii_rn')
				window.open("http://www.sludyanka.ru");
			else if(id == 'pathtaishetskii_rn')
				window.open("http://taishetcom.do.am");
			else if(id == 'pathtulunskii_rn')
				window.open("http://tulunr.irkobl.ru");
			else if(id == 'pathusolskii_rn')
				window.open("http://usolie-raion.ru");
			else if(id == 'pathust-ilimskii_rn')
				window.open("http://uiraion.irkobl.ru");
			else if(id == 'pathust-kutskii_rn')
				window.open("http://admin-ukmo.ru");
			else if(id == 'pathust-udinskii_rn')
				window.open("http://adminust-uda.ru");
			else if(id == 'pathcheremhovskii_rn')
				window.open("http://cher.irkobl.ru");
			else if(id == 'pathchunskii_rn')
				window.open("http://chuna.irkobl.ru");
			else if(id == 'pathshelehovskii_rn')
				window.open("http://www.sheladm.ru");
			else if(id == 'pathalarskii_rn')
				window.open("http://alar.irkobl.ru");
			else if(id == 'pathbayandaevskii_rn')
				window.open("http://bayanday.irkobl.ru");
			else if(id == 'pathbohanskii_rn')
				window.open("http://bohan.irkobl.ru");
			else if(id == 'pathnukutskii_rn')
				window.open("http://nukut.irkobl.ru");
			else if(id == 'pathosinskii_rn')
				window.open("http://osaadm.ru");
			else if(id == 'pathehirit-bulagatskii_rn')
				window.open("http://ehirit.ru");
		})
	});

// Меняем значения на карте значениями из таблицы
  $("input[name=tabledata]").change(function () {
    var descnum = $(this).parent().prevAll().length+1;
    $("#areas tbody tr").each(function() {
      var id = $(this).attr("id").substring(4);
      var value = $(this).children(":nth-child("+descnum+")").text();
      $("#text"+id, svgdom).text(value);
    });
  });
  $("#resetswitch").change(function () {
    $("#areas tbody tr").each(function() {
      var id = $(this).attr("id").substring(4);
      $("#text"+id, svgdom).text("");
    });
  });


  // Всплывающие подсказки
/*  $(svgdom.getElementsByClassName("area")).tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    fade: 250,
    bodyHandler: function() {
      var id     = $(this).attr("id");
      var area   = $("#areas #"+id+" td:nth-child(2)").text();
      var result = $("<p>").append($("<strong>").text(area));
      $("#areas #"+id+" td:nth-child(2)").nextAll().each(function(){
        var pos = $(this).prevAll().length+1;
        var title = $("#areas thead th:nth-child("+pos+")").text();
        var value = $(this).text();
        result.append($("<p>").text(title + ": " + value));
      });
      return result;
    }
  });*/
});