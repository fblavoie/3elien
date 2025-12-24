sprites_l = [ 
				[9,5,"loub.png",[ 
					["VOUS","Voilà enfin mes Louboutin!"],
				],[[7,1]]],
				[6,1,"brownie.png",[ 
					["VOUS","Ce sont les brownies qui serviraient à payer les partisans libéraux à la prochaine course à la chefferie."],
				],[]],
				[6,2,"brownie.png",[ 
					["VOUS","Ce sont les brownies qui serviraient à payer les partisans libéraux à la prochaine course à la chefferie."],
				],[]],
				[7,1,"brownie.png",[ 
					["VOUS","Ce sont les brownies qui serviraient à payer les partisans libéraux à la prochaine course à la chefferie."],
				],[]],
				[8,1,"brownie.png",[ 
					["VOUS","Ce sont les brownies qui serviraient à payer les partisans libéraux à la prochaine course à la chefferie."],
				],[]],
				[8,2,"brownie.png",[ 
					["VOUS","Ce sont les brownies qui serviraient à payer les partisans libéraux à la prochaine course à la chefferie."],
				],[]],
			];
conditional_sprites_hide = [ 
							[9,5,7],
						   ]
						   
succes_sentence = "Bravo! Vous avez réussi! Éric Girard pourra faire une conférence de presse pour présenter sa rondelle.";
ot_cars = [

];
pos_begginning = [0,8];
finished = [0,0];
tiles = [
				["block",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["road",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["road",2,4,"up"],["road",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["road",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["road",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["block",4,1,"up"],["block",4,2,"up"],["block",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["block",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["block",5,2,"up"],["block",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["block",5,7,"up"],["block",5,8,"up"],["block",5,9,"up"],
				["block",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["block",6,3,"up"],["road",6,4,"up"],["road",6,5,"up"],["road",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["block",6,9,"up"],
				["block",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["block",7,7,"up"],["block",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["block",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["road",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],
            ]
			
var change_tile = [ 
				];

nb_fire_l = 0

trees_l = [ 

]
 
 
 
 

var binary_switches = []

class binary_tiles{
	
	constructor(tiles_list, switch_list, tile_enable, tile_disable, tile_switch){
		
		this.tiles_list = tiles_list
		this.switch_list = switch_list
		this.tile_enable = tile_enable
		this.tile_disable = tile_disable
		this.tile_switch = tile_switch
		this.current_state = 0
		
		// Add to switch list
		for(i=0;i<switch_list.length;i++){
			binary_switches.push([switch_list[i][0],switch_list[i][1],this]);
			$('#tile_'+switch_list[i][0]+'_'+switch_list[i][1]).css("background-image", "url('assets/img/"+tile_switch+"')");
			$('#tile_'+switch_list[i][0]+'_'+switch_list[i][1]).addClass("block")
			$('#tile_'+switch_list[i][0]+'_'+switch_list[i][1]).removeClass("road")
		}
		
		// Make changes
		this.apply_changes();
		
	}
	
	apply_changes(){
		for(i=0;i<this.tiles_list.length;i++){
			if(this.tiles_list[i][2]==1){
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).css("background-image", "url('assets/img/"+this.tile_enable+"')");
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).removeClass("block")
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).addClass("road")
			}
			else{
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).css("background-image", "url('assets/img/"+this.tile_disable+"')");
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).addClass("block")
				$('#tile_'+this.tiles_list[i][0]+'_'+this.tiles_list[i][1]).removeClass("road")
			}
		}
	}
	
	change(){
		console.log("change")
		for(i=0;i<this.tiles_list.length;i++){
			this.tiles_list[i][2] = Math.abs(this.tiles_list[i][2]-1)
		}
		this.apply_changes()
	}
	
}

new binary_tiles([[4,4,0],[4,5,1],[5,6,1]],[[1,6]],"tile_gold2.png","hide.png","switch.png")
new binary_tiles([[6,5,0],[6,6,0],[5,5,1]],[[1,4]],"tile_gold2.png","hide.png","switch.png")
new binary_tiles([[5,4,0],[6,4,1],[4,6,0]],[[1,2]],"tile_gold2.png","hide.png","switch.png")

console.log("binary_switches",binary_switches)
