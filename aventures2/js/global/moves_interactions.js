
function create_data_string(){
	
	data_string = ""
	
	for(i=0;i<user_data.length;i++){
		data_string = data_string + String(user_data[i]);		
	}
	
	return data_string
}



function normal_reload(){
	const newParams = new URLSearchParams({ level:String(params), data:create_data_string(), fromX:map_X, fromY:map_Y });
	window.history.replaceState({}, "", "?" + newParams.toString());
	location.reload();
}

function map_menu(){
	const newParams = new URLSearchParams({ level:String(1), data:create_data_string(), fromX:map_X, fromY:map_Y });
	window.history.replaceState({}, "", "?" + newParams.toString());
	location.reload();
}


var diff_x = -10;
var diff_y = -10;

function interdef() {


	if (reserve.localeCompare("no")!=0 ){
		direction_ori = direction;
		direction = reserve;
	}
	
	rotate = rotate + 5;
	if(rotate>360){
		rotate = 0;
	}

	// Rotate in vomit
	$(".invomit").css({'transform' : 'rotate('+ rotate +'deg)'});


	if((can_move==false) && in_dialog){
		if(direction.localeCompare("talk") == 0){
			console.log("nd")
			direction = "no";
			direction_ori = "no"
			next_dialog();
		}
	}

	if(nb_essais>0){
		$("#nb_bruleurs").html("ESSAIS X "+nb_essais)
		$("#nb_bruleurs").show();
	}

	if(nb_fire>0){
		$("#nb_bruleurs").html("BRÛLEURS X "+nb_fire)
		$("#nb_bruleurs").show();
	}
	else if(nb_essais==0){
		$("#nb_bruleurs").hide();
	}

	if(can_move){
	
		if(direction.localeCompare("right") == 0){
			$("#hero").removeClass("hero_left");
			$("#hero").removeClass("hero_up");
			$("#hero").removeClass("hero_down");
			$("#hero").addClass("hero_right");
			can_move = false;
			change_direction(0,1);
			diff_y = 1;
			diff_x = 0;
		}
		
		if(direction.localeCompare("left") == 0){
			$("#hero").removeClass("hero_right");
			$("#hero").removeClass("hero_up");
			$("#hero").removeClass("hero_down");
			$("#hero").addClass("hero_left");
			can_move = false;
			change_direction(0,-1);
			diff_y = -1;
			diff_x = 0;
		}
		
		if(direction.localeCompare("up") == 0){
			$("#hero").removeClass("hero_left");
			$("#hero").removeClass("hero_up");
			$("#hero").removeClass("hero_down");
			$("#hero").addClass("hero_up");
			can_move = false;
			change_direction(-1,0);
			diff_y = 0;
			diff_x = -1;
		}
		
		if(direction.localeCompare("down") == 0){
			$("#hero").removeClass("hero_left");
			$("#hero").removeClass("hero_up");
			$("#hero").removeClass("hero_right");
			$("#hero").addClass("hero_down");
			can_move = false;
			change_direction(+1,0);
			diff_y = 0;
			diff_x = 1;
		}
		
		if((direction.localeCompare("talk") == 0) && can_talk){
		
			can_move = false;
			can_talk = false;
			in_dialog = true;
			direction = "no";
			count_binary_switch = 0;

			for (i=0;i<sprites.length;i++){
				if( ((hero_x+diff_x) == sprites[i][0]) && ((hero_y+diff_y) == sprites[i][1]) ){
					current_dialog = sprites[i][3];
					current_image = sprites[i][2];
					
					current_dialog_action = []
					if (typeof sprites[i][4] !== 'undefined') {
						current_action = sprites[i][4]
					}
				}
			}
			
			if(limited_trials){
				if(current_image.substring(0, 8).localeCompare("caquiste") == 0){
					nb_essais = nb_essais - 1
				}
			}
			
			// Binary switches
			if (typeof binary_switches !== 'undefined') {
				for (i=0;i<binary_switches.length;i++){
					if( ((hero_x+diff_x) == binary_switches[i][0]) && ((hero_y+diff_y) == binary_switches[i][1]) ){
						binary_switches[i][2].change()
						count_binary_switch++;
					}
				}
			}
			
			if(count_binary_switch==0){
				next_dialog();
				$("#arrow_menu").hide()
				$("#dialogs").show();
			}
			else{
				// Do nothing more	
				can_move = true;
				can_talk = true;
				in_dialog = false;				
			}
				
		}
		
		if((direction.localeCompare("talk") == 0) && can_fire){
			can_move = false;


			nb_fire = nb_fire - 1;
			direction = "no";
			tree_x = hero_x+diff_x
			tree_y = hero_y+diff_y
			$(".fire").hide();
			
			// Change tile
			$("#tile_"+tree_x+"_"+tree_y).css("background-image", "url('assets/img/fire.png')");
			
			// Animation 1 second
			setTimeout(function() {
				$("#tile_"+tree_x+"_"+tree_y).removeClass("block");
				$("#tile_"+tree_x+"_"+tree_y).addClass("road");
				$("#tile_"+tree_x+"_"+tree_y).css("background-image", "url('assets/img/tile_road.png')");
				can_move = true;
			}, 1000);
			
			// Remove from list
			pos = null;
			all_trees = []
			for (i=0;i<trees.length;i++){
				if( ((tree_x) == trees[i][0]) && ((tree_y) == trees[i][1])  ){
					pos = i;
				}
				else{
					all_trees.push(trees[i])
				}
			}
			trees = all_trees;
		}
		
		// LEVEL ACCESS -------------------------------------------------------
		if( (direction.localeCompare("talk") == 0) && can_level_access ){
			console.log("x",hero_x);
			console.log("y",hero_y);
			
			
			// Get destination
			for(i=0;i<world_places.length;i++){
				places = world_places[i]
				if( (places[0]==hero_x) && (places[1]==hero_y) ){
					next_level = places[3]

					const newParams = new URLSearchParams({ level: next_level, data: create_data_string(), fromX: hero_x, fromY: hero_y });
					window.history.replaceState({}, "", "?" + newParams.toString());
					location.reload();

				}
			}
		}
		
		
		// Sprite verif
		count = 0
		
		
		for (i=0;i<sprites.length;i++){
		
		
			// Get sprite disappear
			sprite_show = true;
			if (typeof conditional_sprites_hide !== 'undefined') {
				for(j=0;j<conditional_sprites_hide.length;j++){
					csprite = conditional_sprites_hide[j]
					if( ((hero_x+diff_x) == csprite[0]) && ((hero_y+diff_y) == csprite[1]) && (user_data[csprite[2]]==1) ){
						sprite_show = false;
					}
				}
			}
		
			// Enable talk
			if( ((hero_x+diff_x) == sprites[i][0]) && ((hero_y+diff_y) == sprites[i][1]) && sprite_show ){
				console.log("available dialog")
				count++;
				if(can_talk == false){
					$(".talk").show();
					can_talk = true;
				}
			}
			
		}
		
		// Switches
		if (typeof binary_switches !== 'undefined') {
			for (i=0;i<binary_switches.length;i++){
				if( ((hero_x+diff_x) == binary_switches[i][0]) && ((hero_y+diff_y) == binary_switches[i][1]) ){
					if(can_talk == false){
						$(".talk").show();
						can_talk = true;
					}	
					count++;
				}	
			}
		}
		
		
		if((count == 0) && can_talk){
			
				$(".talk").hide();
				can_talk = false;
				
		}
		
		// Tree/fire verif
		for (i=0;i<trees.length;i++){
		
			if( ((hero_x+diff_x) == trees[i][0]) && ((hero_y+diff_y) == trees[i][1]) && (nb_fire>0) ){
				console.log("fire dialog")
				count++;
				if(can_fire == false){
					$(".fire").show();
					can_fire = true;
				}
			}
			
		}
		if((count == 0) && can_fire){
			
				$(".fire").hide();
				can_fire = false;
				
		}
	

	}

	if (reserve.localeCompare("no")!=0 ){
		direction = direction_ori;
		reserve = "no";
	}
	
	if (direction.localeCompare("talk")==0 ){
		direction = "no"
	}
	
	
	
	setTimeout(function() {
		interdef();
	},10);
	
}
interdef();




