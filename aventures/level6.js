sprites_l = [ [9,3,"eric.png",[ ["VOUS","Salut Éric! Que fais-tu avec tous ces itinérants qui dorment par terre?"],
									 ["ÉRIC GIRARD","Ne t'inquiète pas... ce sont tous des électeurs caquistes qui dorment ici."],
									 ["ÉRIC GIRARD","Ils se sont tous endormis pendant que je récitais mon prochain budget."],
									 ["VOUS","Je les comprends."],
									 ["ÉRIC GIRARD","J'aimerais bien quitter, mais un des électeurs est allé à Los Angeles récemment et m'a acheté une rondelle à l'effigie des Kings..."],
									 ["ÉRIC GIRARD","... avec la carte de crédit du Gouvernement du Québec."],
									["ÉRIC GIRARD","Tu pourrais m'aider à trouver la rondelle? Mais STP, ne réveille pas trop de gens pour ne pas soulever trop de soupçons par rapport à l'utilisation de la carte de crédit."],
									["VOUS","Ouais, j'avoue que c'est gênant..."],
									 ["ÉRIC GIRARD","Tu pourrais trouver le bon électeur qui a la rondelle en ne réveillant pas plus que cinq personnes?"],

			]],


			];

succes_sentence = "Bravo! Vous avez réussi! Éric Girard pourra faire une conférence de presse pour présenter sa rondelle.";
ot_cars = [

];
pos_begginning = [9,0];
finished = [0,0];
tiles = [

				["block",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["road",0,8,"up"],["road",0,9,"up"],
				["block",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["road",1,9,"up"],
				["block",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["road",2,4,"up"],["road",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["road",2,8,"up"],["road",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["road",3,8,"up"],["road",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["road",4,9,"up"],
				["block",5,0,"up"],["road",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["block",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["road",6,3,"up"],["road",6,4,"up"],["road",6,5,"up"],["road",6,6,"up"],["road",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["road",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["road",7,7,"up"],["road",7,8,"up"],["road",7,9,"up"],
				["road",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["road",8,7,"up"],["road",8,8,"up"],["road",8,9,"up"],
				["road",9,0,"up"],["road",9,1,"up"],["road",9,2,"up"],["block",9,3,"up"],["block",9,4,"up"],["block",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],


		
            ]
			
change_tile = [ 
				[0,0,"tree.png"],
				[1,0,"tree.png"],
				[2,0,"tree.png"],
				[3,0,"tree.png"],
				[4,0,"tree.png"],
				[5,0,"tree.png"],
				[6,0,"tree.png"],
				[6,0,"tree.png"],
				[6,0,"tree.png"],
				[9,4,"tree.png"],
				[9,5,"tree.png"],
				[9,6,"tree.png"],
				[9,7,"tree.png"],
				[9,8,"tree.png"],
				[9,9,"tree.png"],

				];


nb_fire_l = 0

nb_essais = 5
limited_trials = true;
victory_message = "C'est moi l'électeur caquiste qui a la rondelle."

trees_l = [ 

 ]
 
electeurs = [[0,1,"green",false,""],[0,3,"red",false,""],[0,5,"yellow",false,""],[0,7,"red",false,""],[0,9,"blue",false,""],
			[2,1,"yellow",false,""],[2,3,"blue",false,""],[2,5,"green",false,""],[2,7,"blue",false,""],[2,9,"yellow",false,""],
			[4,1,"red",false,""],[4,3,"green",false,""],[4,5,"blue",false,""],[4,7,"green",false,""],[4,9,"green",false,""],
			[6,1,"yellow",false,""],[6,3,"blue",false,""],[6,5,"red",false,""],[6,7,"red",false,""],[6,9,"yellow",false,""],
			[8,1,"blue",false,""],[8,3,"red",false,""],[8,5,"green",false,""],[8,7,"yellow",false,""],[8,9,"red",false,""],]


// Create the right one
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
posx = getRandomInt(5)*2
posy = getRandomInt(5)*2+1
// Get color
for(i=0;i<electeurs.length;i++){
	if( (posx == electeurs[i][0]) && (posy == electeurs[i][1]) ){
		color = electeurs[i][2]
	}
}



for(i=0;i<electeurs.length;i++){
	
	if( (posx != electeurs[i][0]) || (posy != electeurs[i][1]) ){
		type_indice = getRandomInt(3);
		
		// Chandail
		if(type_indice == 0){
			if( electeurs[i][2].localeCompare(color) == 0 ){
				dialog = "J'ai la même couleur de chandail que l'électeur caquiste qui a la rondelle."
			}
			else{
				dialog = "L'électeur caquiste qui a la rondelle n'a pas la même couleur de chandail que moi."
			}
		}
		
		// Pos x 
		if(type_indice == 1){
			
			if( electeurs[i][0] == posx ){
				dialog = "Je suis à la même latitude (nord-sud) que l'électeur caquiste qui a la rondelle."
			}
			else if( electeurs[i][0] > posx ){
				dialog = "L'électeur caquiste qui a la rondelle est au nord de moi."
			}
			else{
				dialog = "L'électeur caquiste qui a la rondelle est au sud de moi."
			}
			
		}
		
		if(type_indice == 2){
			
			if( electeurs[i][1] == posy ){
				dialog = "Je suis à la même longitude (est-ouest) que l'électeur caquiste qui a la rondelle."
			}
			else if( electeurs[i][1] > posy ){
				dialog = "L'électeur caquiste qui a la rondelle est à l'ouest de moi."
			}
			else{
				dialog = "L'électeur caquiste qui a la rondelle est à l'est de moi."
			}
			
		}
		
	}
	else{
		dialog = victory_message;
	}
	
	$("#tile_"+electeurs[i][0]+"_"+electeurs[i][1]).removeClass("road");
	$("#tile_"+electeurs[i][0]+"_"+electeurs[i][1]).addClass("block");
	
	sprites_l.push( [ electeurs[i][0],electeurs[i][1],"caquistes/"+electeurs[i][2]+"_sleeping.png",[["ÉLECTEUR CAQUISTE",dialog]] ] )
	
}

