sprites_l = [ [1,7,"genevieve.png",[ 
									["VOUS","Salut Geneviève! Que fais-tu ici avec le maire de Québec?"],
									["GENEVIÈVE GUILBAULT","Bonjour France-Élaine! En tant que nouvelle ministre des affaires municipales, je suis venu border le petit Bruno."],
									["VOUS","Et c'est quoi tous ces tramways sur la route?"],
									["GENEVIÈVE GUILBAULT","Ahhh... Ça, c'est mon petit Bruno qui a laissé traîner ses jouets..."],
									["VOUS", "J'aurais besoin d'aller chercher une poutine pour notre collègue Éric. Tu pourrais appeler un col bleu pour ramasser les tramways?"],
									["GENEVIÈVE GUILBAULT","Ça ne sera pas possible. J'ai exigé de Bruno qu'il coupe dans sa voirie. Il va falloir que tu ramasses ses jouet toi-même."],
									]
			],
			[2,6,"marchand_sleeping.png",[ 
									["BRUNO MARCHAND","Tra... Tra... Tra... Tramway..."],
									]
			],
			
			];

succes_sentence = "Une nouveau lieu est accessible. Passez par la carte pour vous y rendre.";
ot_cars = [
				[5,6,"up","blue",true],
				[4,7,"up","blue",true],
				[4,9,"up","blue",true],
				[5,8,"down","blue",true],
				[5,5,"down","blue",true],
				[6,4,"left","blue",true],
				[7,5,"left","blue",true],
				[8,5,"left","blue",true],
				[9,5,"left","blue",true],

				[7,3,"up","blue",true],

				[7,4,"up","blue",true],
				[5,4,"up","blue",true],
				[5,3,"left","blue",true],
				[9,2,"up","blue",true],
				[3,2,"up","blue",true],
				[3,3,"up","blue",true],

				[2,1,"left","blue",true],
				[3,1,"left","blue",true],
				[2,1,"left","blue",true],
				[1,2,"left","blue",true],


			];
pos_begginning = [0,9];
finished = [ [5,0,[[23,1]]], ];


tiles = [
				["road",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["road",0,8,"up"],["road",0,9,"up"],
				["road",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["road",1,9,"up"],
				["road",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["road",2,8,"up"],["road",2,9,"up"],
				["road",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["block",3,4,"up"],["block",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["road",3,8,"up"],["road",3,9,"up"],
				["road",4,0,"up"],["block",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["block",4,4,"up"],["block",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["road",4,9,"up"],
				["road",5,0,"up"],["block",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["block",6,0,"up"],["block",6,1,"up"],["road",6,2,"up"],["road",6,3,"up"],["road",6,4,"up"],["road",6,5,"up"],["road",6,6,"up"],["road",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["block",7,0,"up"],["block",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["block",7,6,"up"],["block",7,7,"up"],["road",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["block",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["block",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["road",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],

            ["big",3,4],
            ["clinic",3,4]
		
            ]
			
change_tile = [ 
				[4,1,"tree.png"],
				[5,1,"tree.png"],
				[6,1,"tree.png"],
				[7,7,"tree.png"],
				[7,6,"tree.png"],
				[7,9,"tree.png"],

				];


nb_fire_l = 0
trees_l = []
