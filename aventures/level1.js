sprites_l = [ [2,4,"bernard.png",[ ["VOUS","Salut Bernard! Pourquoi pleures-tu encore une fois?"],
									["BERNARD DRAINVILLE","France-Élaine Duranceau..."],
									["VOUS","Bernard, pourquoi prononces-tu toujours le nom complet des gens à qui tu parles?"],
									["BERNARD DRAINVILLE","France-Élaine... Duranceau..."],
									["VOUS", "En tout cas Bernard. Tu devrais arrêter de pleurer, surtout à l'extérieur. Tu vois... à cause de tes pleurs toute la rue est maintenant glacée."]]
			],
			[5,9,"francois.png",[ ["VOUS","Salut François! Peux-tu me dire où sont nos limousines?"],
									["FRANÇOIS BONNARDEL","Euh... on a eu un petit problème..."],
									["FRANÇOIS BONNARDEL","Mes agents de la SQ ont fait la grève pendant 30 minutes... des voleurs sont venus voler toutes nos limousines pendant ce temps là..."],
									["VOUS","Et comment veux-tu que je retourne chez moi maintenant?"],
									["FRANÇOIS BONNARDEL", "Comme notre grand chef François 1er a coupé tout le transport en commun, je crois que tu devras le faire à pied."],
									["VOUS", "Comme les pauvres qui n'achètent pas leur propre maison?"],
									["FRANÇOIS BONNARDEL", "C'est en plein ça."],
									["VOUS", "Et la voiture de police renversée derrière toi, ce sont les policiers en grève qui ont fait ça?"],
									["FRANÇOIS BONNARDEL", "Non... ça ce sont les disciples de Gabriel Nadeau-Dubois qui ont fait ça pendant la grève."],

									]
			]
			];

succes_sentence = "Bravo! Vous avez franchi la première zone... mais vous êtes toujours très loin de votre demeure.";
ot_cars = [];
pos_begginning = [0,2];
finished = [9,9];
tiles = [

				["block",0,0,"up"],["block",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["block",0,4,"up"],["ice",0,5,"up"],["ice",0,6,"up"],["ice",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["block",1,4,"up"],["ice",1,5,"up"],["ice",1,6,"up"],["ice",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["block",2,4,"up"],["ice",2,5,"up"],["ice",2,6,"up"],["ice",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["block",3,1,"up"],["road",3,2,"up"],["ice",3,3,"up"],["ice",3,4,"up"],["ice",3,5,"up"],["ice",3,6,"up"],["ice",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["block",4,1,"up"],["road",4,2,"up"],["ice",4,3,"up"],["ice",4,4,"up"],["ice",4,5,"up"],["ice",4,6,"up"],["ice",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["ice",5,2,"up"],["ice",5,3,"up"],["ice",5,4,"up"],["ice",5,5,"up"],["ice",5,6,"up"],["ice",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["ice",6,0,"up"],["ice",6,1,"up"],["ice",6,2,"up"],["ice",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["ice",6,6,"up"],["ice",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["ice",7,0,"up"],["ice",7,1,"up"],["ice",7,2,"up"],["ice",7,3,"up"],["block",7,4,"up"],["ice",7,5,"up"],["ice",7,6,"up"],["ice",7,7,"up"],["road",7,8,"up"],["road",7,9,"up"],
				["ice",8,0,"up"],["ice",8,1,"up"],["ice",8,2,"up"],["ice",8,3,"up"],["ice",8,4,"up"],["ice",8,5,"up"],["ice",8,6,"up"],["ice",8,7,"up"],["block",8,8,"up"],["road",8,9,"up"],
				["block",9,0,"up"],["ice",9,1,"up"],["ice",9,2,"up"],["ice",9,3,"up"],["ice",9,4,"up"],["ice",9,5,"up"],["ice",9,6,"up"],["ice",9,7,"up"],["block",9,8,"up"],["road",9,9,"up"],

            ["big",0,0],
            ["resto",0,0]
		
            ]
			
change_tile = [ [6,5,"tree.png"],
				[6,4,"tree.png"],
				[7,4,"tree.png"],
				[0,4,"tree.png"],
				[1,4,"tree.png"],
				[4,8,"sq1.png"],
				[4,9,"sq2.png"],

				];

nb_fire_l = 0
trees_l = []
