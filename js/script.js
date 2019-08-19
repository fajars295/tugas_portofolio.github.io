function animasiIntro(){
	$("#text span").velocity("transition.slideLeftIn",{
								stagger: 150,
								complete: function(){
									animasiButtonStart();
								}
							 });
}

function animasiButtonStart(){
	$("#start").velocity("transition.bounceUpIn")
			   .mouseenter(function(){
			   		$(this).velocity({width:100});
			   })
			   .mouseleave(function(){
			   		$(this).velocity({width:125});
			   });
}

function animasitIntroOut(){
	$("#start").attr('disabled', true).css({"color":"black"});
	$("#start").velocity("transition.whirlOut",{
								stagger: 150,
								complete: function(){
									$("#text").velocity({"font-size":"40px", 
														 "top":"97%"
														}, {
															duration: 1000,
															complete: function(){
																callMenu();
																$("#menu ul li a[href='profil']").trigger("click");
																$("#start").attr('disabled', false);
															}
														});
								}
							});
}

function callMenu(){
	$("#menu ul li").velocity("transition.slideLeftIn",{
								stagger: 250
							 });

	$("#menu ul li a").off("click").click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

		var hrefString = $(this).attr("href");

		if(hrefString == "back_to_intro"){
			backToIntro();
		}else{		
			if (!$("#" + hrefString).is(':visible')) {
				$(".container-content").fadeOut(1000);
				setTimeout(function(){ 
					$("#" + hrefString).show();
					window[hrefString]();
				}, 1000);			
			}
		}
	});
}

function profil(){
	$("#profil img").velocity("transition.flipYIn", {duration:1500});
	$("#profil .title").velocity("transition.slideUpIn", {duration:1500});
	$("#profil div").velocity("transition.slideDownIn", {duration:1500});
}

function pendidikan(){
	$(".members.top240").velocity("transition.slideUpIn",{ stagger: 100 });		
	$(".members.top170").velocity("transition.slideDownIn",{ stagger: 100 });		
}
function pengalaman(){
	$(".members.top240").velocity("transition.slideUpIn",{ stagger: 100 });		
	$(".members.top170").velocity("transition.slideDownIn",{ stagger: 100 });		
}

function backToIntro(){
	$("#menu ul li").fadeOut();
	$(".container-content").fadeOut();
	$("#text").velocity({"font-size":"70px", 
					 	 "top":"30%"
						 }, {
							duration: 1000,
							complete: function(){
								$("#start").velocity("transition.whirlIn");
							}
						});
}

$(document).ready(function(){
	animasiIntro();
});