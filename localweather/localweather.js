$(document).ready(function($) {
	

$('#but1').click(function(event) {
	/* Act on the event */
	function remove(){
		$('#1').text("");
		$('#1').removeClass('box').addClass('box1');
				$('#wicon').attr("src","");
				$('#2').text("");
				$('#2').removeClass('box').addClass('box1');
				$('#5').text("");
				$('#5').removeClass('box').addClass('box1').css("opacity",0).addClass('hidebutton');
				$('#3').removeClass('box').addClass('box1');

				
	}
	function check(degree)
	{
		if(degree<11.25 && degree>348.75)
			return "N";
		else if(degree>11.25 && degree<33.75){
			return "NNE";
		}
		else if(degree>33.75 && degree<56.25){
			return "NE";
		}
		else if(degree>56.25 && degree<78.75){
			return "ENE";
		}
		else if(degree>78.75 && degree<101.25){
			return "E";
		}
		else if(degree>101.25 && degree<123.75){
			return "ESE";
		}
		else if(degree>123.75 && degree<146.25){
			return "SE";
		}
		else if(degree>146.25 && degree<191.25){
			return "S";
		}
		else if(degree>191.25 && degree<213.75){
			return "SSW";
		}
		else if(degree>213.75 && degree<236.25){
			return "SW";
		}
		else if(degree>236.25 && degree<258.75){
			return "WSW";
		}
		else if(degree>258.75 && degree<281.25){
			return "W";
		}
		else if(degree>281.25 && degree<303.75){
				return "WNW";
		}
		else if(degree>303.75 && degree<326.25){
			return "NW";
		}
		else{
			return "NNW";
		}
	}
	function backImage(id){
if(id>=200 && id<=232)
	{
		return "https://dl-web.dropbox.com/get/localweather/clearsky.jpg?_subject_uid=186783940&w=AABsgVKWA-iYmX_gskIecQ_ft42Tki6iQ1GI3W2VXxV4zQ";
	}
	else if(id<=321 && id>=300){
		return "https://dl-web.dropbox.com/get/localweather/drizzlingweather.jpg?_subject_uid=186783940&w=AADAHbGkwKlAi6hOqUa2ElSLSgiR1nSEsMa3oixGoT-2Lg";
	}
	else if(id<=531 && id>500){
		return "https://dl-web.dropbox.com/get/localweather/rainy-weather.jpg?_subject_uid=186783940&w=AABg_7U9PCoUitDIRM16AHmdypH78azm6TklyBHzo2eOLQ";
	}
	else if(id===500){
		return "https://dl-web.dropbox.com/get/localweather/lightrain.jpg?_subject_uid=186783940&w=AAChu7c0MIaPHMoM9Q5Pk5LSiOEwVthgfZFMyijdwGWXbQ";
	}
	else if(id<=622&& id>=600){
		return "https://dl-web.dropbox.com/get/localweather/snowweather.jpg?_subject_uid=186783940&w=AACSIvJXjuDy3pp9MrPQOG0pi_tVPOgA0WW_sxTKc9qbaw";
	}
	else if(id===701 || id===721){
		return "https://dl-web.dropbox.com/get/localweather/Mistweather.jpg?_subject_uid=186783940&w=AACxjMoXAJafPrpP58rZyJbVylTVC8vilbImOTUWyuab9A";
	}
	else if(id===731){
		return "https://dl-web.dropbox.com/get/localweather/sand-stormweather.jpg?_subject_uid=186783940&w=AAA3htb2nL2WpK-mTGqFn2dfHD8ygd-wOJ6w8g6n-nxTnw";
	}
	else if(id<=781 && id>=700){
		return "https://dl-web.dropbox.com/get/localweather/foggyweather.jpg?_subject_uid=186783940&w=AAAifZnON6NXJUmWb5W1iBT1iGZlbd_kB2aVCCwRDifSiA";
	}
	else if(id===800){
		return "https://dl-web.dropbox.com/get/localweather/clearsky.jpg?_subject_uid=186783940&w=AABsgVKWA-iYmX_gskIecQ_ft42Tki6iQ1GI3W2VXxV4zQ";	
	}
	else if(id<=804 && id>=801){
		return "https://dl-web.dropbox.com/get/localweather/Cloudyweather1.jpg?_subject_uid=186783940&w=AAA_y4n9yRYJ3OnClrQI2Klbk1GN4pza-sGVSiDn0NRYZA";
	}



}

	var cityname=$('#inputcity').val();
	debugger;
	//console.log(cityname);
	if(cityname.length===0)
	{
		
		remove();
		alert("Please enter the city name");
	}
	else
	{
		var tempurl="http://api.openweathermap.org/data/2.5/weather?q="+ cityname + "&type=accurate&APPID=bb527cfc08a4418aeb1d51294376b058";
		console.log("entered the main");
		$.get(tempurl,function(data) {
			/*optional stuff to do after success */
			
			if(!data || !data.name || data.name.toLowerCase()!==cityname.toLowerCase())
			{
				remove();
				alert("sorry this city is not listed for weather report");
				
			}
			else{
				
				
				console.log(data.name);
				var currentcity=data.name;
				var currtemperature=data.main.temp;
				var currentweatherdescription=data.weather[0].description;
				var windspeed=data.wind.speed;
				var degree=data.wind.degree;
				var direction=check(degree);

				$('#1').text((currtemperature-273.15).toPrecision(4)+ "°C");//in kelvin
				$('#5').removeClass('hidebutton').addClass('showbutton');
				$('#1').addClass('box');
				var iconUrl="http://openweathermap.org/img/w/"+ data.weather[0].icon+".png";
				$('#wicon').attr(
					"src",iconUrl
				);
				
				$('#2').text(currentweatherdescription+ " "+(data.wind.speed*1.94).toPrecision(4)+ "knots" + "  " + direction);
					$('#2').addClass('box');
				$('#3').addClass('box');
				var toggle = true;
				/*$( "#5" ).click(function() {
					if (toggle) {
						$(this).text("F");
  						console.log("reached in Farheneit function");
  						var n=((currtemperature-273.15).toPrecision(4)* 9/5 + 32).toPrecision(4)+" Farheneit";
  						$('#1').text(n)+ " Farheneit";					
					} else  {
	  					$(this).text("°C");
	  					$('#1').text((currtemperature-273.15).toPrecision(4)+ "°C");
					}
					toggle = !toggle;
				});*/
				$( "#5" ).click(function() {
					if ($(this).data('units') === 'c') {
						$(this).data('units', 'f');
						$(this).text("°F");
  						console.log("reached in Farheneit function");
  						var n=((currtemperature-273.15).toPrecision(4)* 9/5 + 32).toPrecision(4)+" Farheneit";
  						$('#1').text(n);					
					} else  {
						$(this).data('units', 'c');
	  					$(this).text("°C");
	  					$('#1').text((currtemperature-273.15).toPrecision(4)+ "°C");
					}
				});
				
				debugger;
				console.log(backImage(data.weather[0].id));
				var temp1=backImage(data.weather[0].id);
				var x = document.getElementsByTagName("BODY")[0];
				x.background=temp1;
				//$("body").css('background-image','url(backImage(data.weather[0].id))');
				
			}
			
		});

	}
	return false;
});

});
		
	



