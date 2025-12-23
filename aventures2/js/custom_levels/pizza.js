var ori_pizza_x = 0;
var ori_pizza_y = 0;
var ori_dir_x = 0;
var ori_dir_y = 0;
var pos_pizza_x = 0;
var pos_pizza_y = 0;
var dir_pizza_x = 0;
var dir_pizza_y = 0;
var winning_x = 0;
var winning_y = 0;

function run_pizza(){
	finp = false;
	
	if( ((pos_pizza_x)==winning_x) && ((pos_pizza_y)==winning_y)){
		$("#pizza").fadeOut(500);
		$(".arrow").hide();
		$("#success_trigger").show();
		$("#arrow_menu").hide()
		show_next_level();
		$("#hero").fadeOut();
	}
	else{
		if( dir_pizza_x != 0 ){
			pos_pizza_x = pos_pizza_x + dir_pizza_x;
			
			if( (pos_pizza_x >= 0) && (pos_pizza_x <= 9) ){
				// Check block
				block = $("#tile_"+pos_pizza_x+"_"+pos_pizza_y).hasClass("block") && ($("#tile_"+pos_pizza_x+"_"+pos_pizza_y).hasClass("water") == false);
				
				if (block == false){
					// Check car
					blocking = false;
					for(i=0;i<nb_cars;i++){
						if( (ot_cars[i][0]==pos_pizza_x) && (ot_cars[i][1]==pos_pizza_y) ){
							blocking = true;
							if( $("#car_"+i).hasClass("alld") && ( ((dir_pizza_x==1)&&($("#car_"+i).hasClass("dup"))) || ((dir_pizza_x==-1)&&($("#car_"+i).hasClass("ddown")))  ) ){
								blocking = false;
								if( $("#car_"+i).hasClass("dleft") ){
									dir_pizza_x = 0;
									dir_pizza_y = -1;
								}
								else if( $("#car_"+i).hasClass("dright") ){
									dir_pizza_x = 0;
									dir_pizza_y = 1;
								}
							}
						}
					}
					if(blocking){
						finp = true;
					}
					else{
						$("#pizza").animate({"top":(0+pos_pizza_x*10)+"vw"},200,"linear");
					}
				}
				else{
					finp = true;
				}
			}
			else{
				finp = true;
			}
		}
		else if( dir_pizza_y != 0 ){
			pos_pizza_y = pos_pizza_y + dir_pizza_y;
			
			if( (pos_pizza_y >= 0) && (pos_pizza_y <= 9) ){
				// Check block
				block = $("#tile_"+pos_pizza_x+"_"+pos_pizza_y).hasClass("block") && ($("#tile_"+pos_pizza_x+"_"+pos_pizza_y).hasClass("water") == false);
				
				if (block == false){
					// Check car
					blocking = false;
					for(i=0;i<nb_cars;i++){
						if( (ot_cars[i][0]==pos_pizza_x) && (ot_cars[i][1]==pos_pizza_y) ){
							blocking = true;
							if( $("#car_"+i).hasClass("alld") && ( ((dir_pizza_y==1)&&($("#car_"+i).hasClass("dleft"))) || ((dir_pizza_y==-1)&&($("#car_"+i).hasClass("dright")))  ) ){
								blocking = false;
								if( $("#car_"+i).hasClass("dup") ){
									dir_pizza_x = -1;
									dir_pizza_y = 0;
								}
								else if( $("#car_"+i).hasClass("ddown") ){
									dir_pizza_x = 1;
									dir_pizza_y = 0;
								}
							}
						}
					}
					if(blocking){
						finp = true;
					}
					else{
						$("#pizza").animate({"left":(0+pos_pizza_y*10)+"vw"},200,"linear");
					}
				}
				else{
					finp = true;
				}
			}
			else{
				finp = true;
			}
		}
		
		if(finp){
			$("#pizza").fadeOut(200);
			setTimeout(function() {
				next_dialog();
			}, 200);

		}
		else{
			setTimeout(function() {
				run_pizza();
			}, 200);
		}
	}
}

function start_pizza(){
	$("#pizza").animate({"top":(0+ori_pizza_x*10)+"vw"},0,"linear");
	pos_pizza_x = ori_pizza_x;
	$("#pizza").animate({"left":(0+ori_pizza_y*10)+"vw"},0,"linear");
	pos_pizza_y = ori_pizza_y;
	dir_pizza_x = ori_dir_x;
	dir_pizza_y = ori_dir_y;
	$("#pizza").fadeIn(100);
	run_pizza();
}