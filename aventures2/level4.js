sprites_l = [ 
			
				[1,7,"jf.png",[ ["VOUS","Salut Jean-François! Que fais-tu sur la Grande Allée?"],
					["JEAN-FRANÇOIS ROBERGE","France-Élaine... En tant que ministre de la langue française, je cherche des devantures de commerces où la prépondérance du français est insuffisante."],
					["JEAN-FRANÇOIS ROBERGE","Cette mesure phare permettra de sauver notre langue."],
					["VOUS","Plus que la francisation des immigrants?"],
					["JEAN-FRANÇOIS ROBERGE","De loin!"],
					["JEAN-FRANÇOIS ROBERGE","Dis France-Élaine... Tu pourrais m'aider à retirer ces devantures posant un grand risque pour notre nation?"],
					["JEAN-FRANÇOIS ROBERGE","Je te donne 5 brûleurs. Tu n'as qu'à enflammer ces maudits hors-la-loi."],
				],[]],
			];


conditional_sprites_hide = []

modify_dialogs_actions = []


// Différent homme si la poutine est obtenue
if(user_data[3]==0){
	sprites_l.push([8,6,"eric2.png",[ ["VOUS","Éric... tu pourrais te tasser? J'ai des pancartes à brûler."],
						["ÉRIC CAIRE","J'ai faim. Je veux ma poutine"],
						["ÉRIC CAIRE","À défaut d'avoir un troisième lien, je ne bougerai pas sans avoir ma poutine."],
						], [] ])
}
else{
	sprites_l.push([8,6,"eric2.png",[ 
						["VOUS","J'ai ta poutine extra jambon Éric."],
						["ÉRIC CAIRE","Miam miam miam... Merci France-Élaine."],
						["ÉRIC CAIRE","Maintenant que mon bedon est bien rempli, je m'en vais régler des bogues à la SAAQ."],
						], [[4,1]] ])
	conditional_sprites_hide.push([8,6,4])
}



succes_sentence = "Une nouveau lieu est accessible. Passez par la carte pour vous y rendre.";
ot_cars = [

];
pos_begginning = [0,4];
finished = [ [9,0,[[22,1]]],[9,9,[[24,1]]], ];

tiles = [

				["block",0,0,"up"],["block",0,1,"up"],["block",0,2,"up"],["block",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["block",0,6,"up"],["block",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["block",1,2,"up"],["block",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["block",2,2,"up"],["road",2,3,"up"],["road",2,4,"up"],["road",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["block",3,1,"up"],["block",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["block",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["block",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["block",5,8,"up"],["block",5,9,"up"],
				["block",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["road",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["block",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["block",6,9,"up"],
				["road",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["road",7,7,"up"],["road",7,8,"up"],["block",7,9,"up"],
				["road",8,0,"up"],["block",8,1,"up"],["block",8,2,"up"],["block",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["road",8,7,"up"],["road",8,8,"up"],["block",8,9,"up"],
				["road",9,0,"up"],["road",9,1,"up"],["road",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["road",9,6,"up"],["road",9,7,"up"],["road",9,8,"up"],["road",9,9,"up"],

			]
			
change_tile = [ 
				[1,3,"tree.png"],
				[2,2,"tree.png"],
//				[1,6,"tree.png"],
				[3,7,"tree.png"],
				[8,3,"tree.png"],
				[8,2,"tree.png"],
				[8,1,"tree.png"],
				[6,5,"tree.png"],
				[6,6,"tree.png"],
				[6,7,"tree.png"],
				[6,8,"tree.png"],
				[6,4,"tree.png"],

			  ];


nb_fire_l = 5
trees_l = [
			[3,6],
			[3,3],
			[4,3],
			[4,4],
			[4,6],
			[5,6],
			[5,4],
			[2,4],
			[3,5],
			[6,1],
			[6,2],
			[7,1],
			[7,3],
			[7,0],
			[8,0],
			[8,4],
			[9,5],
			[7,5],
			[9,2],
			[9,6],
			[8,7],
			[7,7],
			[7,6],
		 ]