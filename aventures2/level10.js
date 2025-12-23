sprites_l = [ [0,1,"bernard.png",[      
									["VOUS","Salut Bernard! C'est quoi tous ces rondins de bois?"],
									["BERNARD DRAINVILLE","En tant que nouvel écologiste, j'ai coupé ces arbres."],
									["BERNARD DRAINVILLE","C'est pour construire un petit abri pour les huards sur les terres de mon enfance."],
				]],
			  [8,5,"ian.png",[      
									["IAN LAFRENIÈRE","France-Élaine, nous avons maîtrisé un suspect en usant d'une force très légère: seulement 6 policiers et 3 coups de teaser."],
									["VOUS","Et c'est quoi son crime?"],
									["IAN LAFRENIÈRE","Un crime très très très grave. Le suspect a immobilisé son engin motorisé à plus de 30 cm de l'accotement."],
									["VOUS","Dis Ian, je cherche mes Louboutin. Notre grand chef François Premier m'a suggéré de t'en parler."],
									["IAN LAFRENIÈRE","France-Élaine, tes Louboutin ont été repérés au club des OFA. Je me dépêcherais à les récupérer."],
									["IAN LAFRENIÈRE","Un informateur m'a mentionné que tes godasses seraient sur le point d'être servies avec des brownies au parti libéral."],
									["IAN LAFRENIÈRE","Cet informateur m'a aussi fait part qu'il y aurait une salle clandestine située tout juste <u>devant la très honorable ministre Bibeau</u>."],
				]],

			];

succes_sentence = "Bravo! Vous avez réussi! Éric Girard pourra faire une conférence de presse pour présenter sa rondelle.";
ot_cars = [
            [5,3,"alld","moveblock",true,"trash","trash"],
			[5,7,"alld","moveblock",true,"trash","trash"],
			[7,5,"alld","moveblock",true,"trash","trash"],
			[7,7,"alld","moveblock",true,"trash","trash"],
			[6,5,"alld","moveblock",true,"trash","trash"],
			[6,6,"alld","moveblock",true,"trash","trash"],
			[7,3,"alld","moveblock",true,"trash","trash"],
			[6,1,"alld","moveblock",true,"trash","trash"],
			[5,1,"alld","moveblock",true,"trash","trash"],
			[8,3,"alld","moveblock",true,"trash","trash"],
			[8,2,"alld","moveblock",true,"trash","trash"],
			[6,2,"alld","moveblock",true,"trash","trash"],
			[2,0,"alld","moveblock",true,"trash","trash"],
			[2,1,"alld","moveblock",true,"trash","trash"],
			[3,2,"alld","moveblock",true,"trash","trash"],
			[1,2,"alld","moveblock",true,"trash","trash"],
			[2,3,"alld","moveblock",true,"trash","trash"],
			[3,5,"alld","moveblock",true,"trash","trash"],
			[2,4,"alld","moveblock",true,"trash","trash"],
			[1,5,"alld","moveblock",true,"trash","trash"],
			[0,5,"alld","moveblock",true,"trash","trash"],
			[1,4,"alld","moveblock",true,"trash","trash"],
			[0,6,"alld","moveblock",true,"trash","trash"],
			[2,6,"alld","moveblock",true,"trash","trash"],
			[0,2,"alld","moveblock",true,"trash","trash"],
			[4,5,"alld","moveblock",true,"trash","trash"],
			[4,4,"alld","moveblock",true,"trash","trash"],
			[6,3,"alld","moveblock",true,"trash","trash"],
			[7,4,"alld","moveblock",true,"trash","trash"],
			[9,4,"alld","moveblock",true,"trash","trash"],
			[2,8,"alld","moveblock",true,"trash","trash"],
			[3,7,"alld","moveblock",true,"trash","trash"],


];
pos_begginning = [0,0];
finished = [0,0];
tiles = [
				["road",0,0,"up"],["block",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["road",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["road",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["road",2,4,"up"],["road",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["road",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["road",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["road",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["road",5,8,"up"],["block",5,9,"up"],
				["road",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["road",6,3,"up"],["road",6,4,"up"],["road",6,5,"up"],["road",6,6,"up"],["road",6,7,"up"],["block",6,8,"up"],["block",6,9,"up"],
				["block",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["road",7,7,"up"],["block",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["block",8,5,"up"],["block",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["road",9,1,"up"],["road",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],
            ]
			
change_tile = [ 
				[3,0,"tree.png"],
				[4,0,"tree.png"],
				[5,0,"tree.png"],
				[7,0,"tree.png"],
				[8,0,"tree.png"],
				[9,0,"tree.png"],
				[9,6,"car_hero.png"],
				[8,6,"caquistes/green_sleeping.png"],
				];
 water_tiles = [ [6,8],[7,8],[8,8],[9,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[8,7],[9,7],[0,8],[1,8],
 ]

nb_fire_l = 0


trees_l = [ 

 ]
 

