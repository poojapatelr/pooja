// JavaScript Document

	var tmpData;
	$(document).ready(function(){
		
		JSOnLoader('data.json');
		$(".comment").bind("click",commentDisplay);
		$(".close").bind("click",commentHide);
	});
	function JSOnLoader(path)
	{
		$.getJSON(path, function(data){
			//console.log(data[0].star_flag);
			tmpData = data;
			$.each(data,function(i){
				var name = data[i].name;
				var phone = data[i].phonenumbers[0];
				var address = data[i].location;
				var experience = data[i].experience_months;
				var skills = data[i].skills;
				//$(".leftSection").append()
				$(".leftSection").append('<div class="details" >'+
											'<h1 id="'+i+'" class="name" >'+name+'</h1>'+
											'<h2 class="contact">'+phone+'</h2>'+
											'<h2 class="address">'+address+'</h2>'+
											'<h2 class="experience">'+experience+'</h2>'+
											'<h2 class="skills">'+skills+'</h2>'+
										'</div><hr>');				
				
				$(".name").on("click",test);
			});
		});
	}
	
	function test(){
		var temp = $(this).attr("id");
		
			$(".rightSectionLabel").text(tmpData[temp].name);
			$(".phone").text(tmpData[temp].phonenumbers[0]);
			$(".dob").text(tmpData[temp].dob);
			$(".email").text(tmpData[temp].email);
			$(".location").text(tmpData[temp].location);
			$(".exp").text(tmpData[temp].experience_months);
			$(".skill").text(tmpData[temp].skills);
			
	}
	function commentDisplay()
	{
		$(".rightSection").animate({"right":"200px"}, 500);
		$(".innerLeftSection").animate({"right":"2px"}, 500);
	}
	function commentHide()
	{
		$(".rightSection").animate({"right":"10px"}, 500);
		$(".innerLeftSection").animate({"right":"-205px"}, 500);
	}