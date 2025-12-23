// Get URL parameters
let params = new URLSearchParams(document.location.search);
let fromX = parseInt(params.get("fromX"));
let fromY = parseInt(params.get("fromY"));


sprites_l = [ 
			];

succes_sentence = "Bravo! Vous avez franchi la première zone... mais vous êtes toujours très loin de votre demeure.";
ot_cars = [];
pos_begginning = [fromX,fromY];
finished = [[10,10,[]]];



tiles = [
				["block",0,0,"up"],["block",0,1,"up"],["block",0,2,"up"],["block",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["block",0,6,"up"],["block",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["point",1,0,"up"],["block",1,1,"up"],["block",1,2,"up"],["block",1,3,"up"],["point",1,4,"up"],["block",1,5,"up"],["block",1,6,"up"],["block",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["block",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["block",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["block",3,1,"up"],["block",3,2,"up"],["block",3,3,"up"],["block",3,4,"up"],["block",3,5,"up"],["block",3,6,"up"],["block",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["block",4,1,"up"],["point",4,2,"up"],["block",4,3,"up"],["point",4,4,"up"],["block",4,5,"up"],["point",4,6,"up"],["block",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["block",5,2,"up"],["block",5,3,"up"],["block",5,4,"up"],["block",5,5,"up"],["block",5,6,"up"],["block",5,7,"up"],["block",5,8,"up"],["block",5,9,"up"],
				["block",6,0,"up"],["block",6,1,"up"],["block",6,2,"up"],["block",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["point",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["point",6,9,"up"],
				["block",7,0,"up"],["block",7,1,"up"],["point",7,2,"up"],["block",7,3,"up"],["block",7,4,"up"],["block",7,5,"up"],["block",7,6,"up"],["block",7,7,"up"],["block",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["block",8,1,"up"],["block",8,2,"up"],["block",8,3,"up"],["block",8,4,"up"],["block",8,5,"up"],["point",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["block",9,4,"up"],["block",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],
            ]
			
// Horizontal tiles change
change_tiles_hor = [
					[ 20,[[1,1],[1,2],[1,3]] ],
					[ 22,[[4,3]] ],
					[ 24,[[4,5]] ],
					[ 27,[[6,7],[6,8]] ],

      			   ];
console.log("user_data",user_data)
for(i=0;i<change_tiles_hor.length;i++){
	sel_changes = change_tiles_hor[i];
	if( user_data[sel_changes[0]] == 1){
		for(j=0;j<sel_changes[1].length;j++){
			for(k=0;k<tiles.length;k++){
				if( (tiles[k][1]==sel_changes[1][j][0]) && (tiles[k][2]==sel_changes[1][j][1]) ){
					tiles[k][0] = "hor_link"
				}			
			}
		}
	}
}

// Vertical tiles change
change_tiles_ver = [
					[ 21,[[2,4],[3,4]] ],
					[ 23,[[5,2],[6,2]] ],
					[ 25,[[5,6]] ],
					[ 26,[[7,6]] ],
      			   ];
console.log("user_data",user_data)
for(i=0;i<change_tiles_ver.length;i++){
	sel_changes = change_tiles_ver[i];
	if( user_data[sel_changes[0]] == 1){
		for(j=0;j<sel_changes[1].length;j++){
			for(k=0;k<tiles.length;k++){
				if( (tiles[k][1]==sel_changes[1][j][0]) && (tiles[k][2]==sel_changes[1][j][1]) ){
					tiles[k][0] = "ver_link"
				}			
			}
		}
	}
}

change_tile = []


nb_fire_l = 0
trees_l = []


main_map = 1

world_places = [ [1,0,"Salle des trésors publics",2],
				 [1,4,"Assemblée Nationale",3],
				 [4,4,"Grande Allée",4],
				 [4,2,"Hôtel de ville de Québec",5],
				 [7,2,"Restaurant de poutine",6],
				 [4,6,"Projet pilote du concept de rue montréalaise à Québec",7],
				 [6,6,"Club des OFA",8],
				 [8,6,"Hôpital",9],
				 [6,9,"Plaines d'Abraham",10],

				 ]
