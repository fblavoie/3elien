sprites_l = [ 
			
				[2,3,"legault.png",[ ["FRANÇOIS LEGAULT","Bonjour ma chère France-Élaine! Comment ça va?"],
					["VOUS (FRANCE-ÉLAINE)","Grand chef François Premier... ça va très mal."],
					["VOUS (FRANCE-ÉLAINE)","Je veux offrir une nouvelle subvention pour les propriétaires de maisons valant au moins un million de dollars."],
					["VOUS (FRANCE-ÉLAINE)","J'ai cependant besoin de mes Louboutin pour accéder à la salle des trésors publics, et je ne les trouve plus."],
					["FRANÇOIS LEGAULT","Je ne crois pas qu'il reste grand chose dans la salle des trésors. Rappelle-toi... nous avons tout dilapidé dans des projets comme Northvolt."],
					["FRANÇOIS LEGAULT","Pour tes Louboutin, peut-être que notre nouveau ministre des polices, Ian Lafrenière, pourrait t'aider. Il se trouve présentement sur les plaines d'Abraham."],
				],[]],

				
			];


conditional_sprites_hide = [ 

								]

modify_dialogs_actions = [

]



console.log(sprites_l)

succes_sentence = "Une nouveau lieu est accessible. Passez par la carte pour vous y rendre.";
ot_cars = [
	            [7,4,"","cone",true],
				[4,7,"","cone",true],
				[3,6,"","cone",true],
];
pos_begginning = [2,0];
finished = [ [9,4,[[21,1]]] ];
tiles = [

				["block",0,0,"up"],["block",0,1,"up"],["block",0,2,"up"],["block",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["road",0,8,"up"],["road",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["block",1,2,"up"],["block",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["road",1,6,"up"],["block",1,7,"up"],["block",1,8,"up"],["road",1,9,"up"],
				["road",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["block",2,8,"up"],["road",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["block",3,4,"up"],["block",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["block",3,8,"up"],["road",3,9,"up"],
				["block",4,0,"up"],["block",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["road",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["block",5,2,"up"],["block",5,3,"up"],["road",5,4,"up"],["block",5,5,"up"],["block",5,6,"up"],["block",5,7,"up"],["block",5,8,"up"],["road",5,9,"up"],
				["block",6,0,"up"],["block",6,1,"up"],["block",6,2,"up"],["block",6,3,"up"],["road",6,4,"up"],["block",6,5,"up"],["block",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["road",6,9,"up"],
				["block",7,0,"up"],["block",7,1,"up"],["block",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["road",7,7,"up"],["road",7,8,"up"],["road",7,9,"up"],
				["block",8,0,"up"],["block",8,1,"up"],["block",8,2,"up"],["block",8,3,"up"],["road",8,4,"up"],["block",8,5,"up"],["block",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["road",9,4,"up"],["block",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],
  				["big",0,0],
				["assemblee",0,0]

			]
			
change_tile = [ 
				[5,5,"tree.png"],
				[6,5,"tree.png"],
				[5,6,"tree.png"],
				[6,6,"tree.png"],
				[5,7,"tree.png"],
				[6,7,"tree.png"],
				[5,8,"tree.png"],
				[6,8,"tree.png"],
				[3,4,"tree.png"],
				[2,5,"tree.png"],
				[6,3,"tree.png"],
				[5,3,"tree.png"],
				[5,2,"tree.png"],

			];


nb_fire_l = 0
trees_l = []