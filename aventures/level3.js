sprites_l = [ [1,2,"christian.png",[ ["VOUS","Salut Christian! Comment va ta réforme?"],
									["CHRISTIAN DUBÉ","Très très bien!"],
									["VOUS","Tu es sûr? C'est quoi tous ces patients sur des civières à l'extérieur?"],
									["CHRISTIAN DUBÉ","Ça, c'est ma nouvelle technique pour améliorer mes indices de performance sur mes tableaux de bord."],
									["CHRISTIAN DUBÉ", "En mettant les patients à l'extérieur, ils ne sont pas comptés comme à l'hôpital. Ça améliore donc mes taux d'occupation."],
									["VOUS","C'est une très bonne idée! En même temps, si les patients ne sont pas contents, ils n'ont qu'à s'acheter leur propre hôpital."],
									["VOUS","Tu pourrais appeler une préposée pour pousser les civières?"],
									["CHRISTIAN DUBÉ", "Malheureusement, je n'ai plus de préposées. Tout le budget est alloué à payer mes <i>top guns</i>. Tu devras les pousser toi-même."],

									]
			],

			
			];

succes_sentence = "Heureusement, vous réussissez à franchir tout ce chaos sans être infectée.";
ot_cars = [
				[3,1,"up","blue",true],
				[6,0,"left","blue",true],
				[7,0,"right","blue",true],
				[8,0,"left","blue",true],
				[5,2,"left","blue",true],
				[5,3,"left","blue",true],
				[6,3,"right","blue",true],
				[7,3,"left","blue",true],
				[8,4,"left","blue",true],
				[9,4,"up","blue",true],
				[8,5,"down","blue",true],
				[9,5,"right","blue",true],
				[6,9,"down","blue",true],
				[7,9,"up","blue",true],
				[8,8,"up","blue",true],
				[4,9,"up","blue",true],
				[3,8,"up","blue",true],
				[2,8,"down","blue",true],


			];
pos_begginning = [0,0];
finished = [0,6];
tiles = [

				["road",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["block",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["road",0,6,"up"],["block",0,7,"up"],["block",0,8,"up"],["road",0,9,"up"],
				["road",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["block",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["road",1,9,"up"],
				["road",2,0,"up"],["road",2,1,"up"],["block",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["block",2,7,"up"],["road",2,8,"up"],["road",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["block",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["block",3,7,"up"],["road",3,8,"up"],["road",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["block",4,2,"up"],["road",4,3,"up"],["block",4,4,"up"],["block",4,5,"up"],["road",4,6,"up"],["block",4,7,"up"],["road",4,8,"up"],["road",4,9,"up"],
				["block",5,0,"up"],["road",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["block",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["road",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["road",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["road",6,6,"up"],["block",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["road",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["block",7,4,"up"],["block",7,5,"up"],["road",7,6,"up"],["block",7,7,"up"],["road",7,8,"up"],["road",7,9,"up"],
				["road",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["block",8,7,"up"],["road",8,8,"up"],["road",8,9,"up"],
				["block",9,0,"up"],["road",9,1,"up"],["road",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["road",9,6,"up"],["road",9,7,"up"],["road",9,8,"up"],["road",9,9,"up"],

            ["big",6,4],
            ["clinic",6,4]
		
            ]
			
change_tile = [ 
				[4,4,"tree.png"],
				[4,5,"tree.png"],
				[0,8,"tree.png"],

				];


nb_fire_l = 0
trees_l = []
