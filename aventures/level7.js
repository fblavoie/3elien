sprites_l = [ [9,5,"eric2.png",[   ["ÉRIC CAIRE","Rebonjour France-Élaine. Regarde! Mon <i>pusher</i> de pizza va m'envoyer ma pizza à la fondue chinoise à partir de Lévis grâce à un canon d'époque..."],
									 ["PIZZA","Hi France-Élaine. Please, do not disturb me. Nous sommes en panne majeure."],
									 ["ÉRIC CAIRE","Arghhhhhh... JE VEUX MA PIZZA. Elle s'est échouée..."],
									 ["VOUS","Éric... calme-toi... "],
									 ["VOUS","Et pourquoi te fais-tu livrer une pizza à partir de Lévis? Il y a des succursales qui font des pizzas à la fondue chinoise à Québec."],
									 ["ÉRIC CAIRE","Oui, mais tout ce qui est fait en banlieue de Québec est meilleur. Je veux que ma pizza vienne de Lévis. Point."],
									["VOUS","Et pourquoi ne vas-tu pas la chercher toi-même?"],
									 ["ÉRIC CAIRE","J'attends la construction du 3e lien."],
									 ["ÉRIC CAIRE","Entre-temps, tu pourrais faire en sorte que je reçoive ma pizza en déplaçant les obstacles?"],
									["VOUS","OK Éric... seulement pour cette fois par contre."],
			]],
			


			];

succes_sentence = "Bravo! Grâce à vous, Éric Caire ne mourra pas de faim.";
ot_cars = [
            [5,3,"alld","moveblock",true,"dup","dright"],
			[5,7,"alld","moveblock",true,"dup","dleft"],
			[8,8,"alld","moveblock",true,"ddown","dright"],


];
pos_begginning = [9,9];
finished = [-1,-1];
tiles = [

				["road",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["road",0,6,"up"],["road",0,7,"up"],["road",0,8,"up"],["road",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["block",1,2,"up"],["block",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["block",1,6,"up"],["block",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["block",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["block",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["block",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["road",4,9,"up"],
				["road",5,0,"up"],["road",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["road",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["block",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["block",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["block",6,9,"up"],
				["road",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["road",7,7,"up"],["road",7,8,"up"],["road",7,9,"up"],
				["road",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["block",8,5,"up"],["block",8,6,"up"],["road",8,7,"up"],["road",8,8,"up"],["road",8,9,"up"],
				["block",9,0,"up"],["road",9,1,"up"],["road",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["block",9,6,"up"],["road",9,7,"up"],["road",9,8,"up"],["road",9,9,"up"],


		
            ]
			
change_tile = [ 
				[0,2,"pizzaman.png"],
				[0,3,"canon.png"],

				[3,7,"tree.png"],
				[3,8,"tree.png"],
				[3,9,"tree.png"],
				[6,3,"tree.png"],
				[6,4,"tree.png"],
				[6,5,"tree.png"],
				[6,6,"tree.png"],
				[6,7,"tree.png"],
				[6,8,"tree.png"],
				[6,9,"tree.png"],
				[8,5,"tree.png"],
				[8,6,"tree.png"],
				[9,6,"tree.png"],
				[4,0,"tree.png"],
				[9,0,"tree.png"],
				[3,0,"tree.png"],

				];


nb_fire_l = 0
trees_l = [ 

 ]
 
 water_tiles = [ [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],
				[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],
 ]
 
ori_pizza_x = 0;
ori_pizza_y = 3;
ori_dir_x = 1;
ori_dir_y = 0;
pos_pizza_x = 0;
pos_pizza_y = 3;
dir_pizza_x = 1;
dir_pizza_y = 0;
winning_x = 9;
winning_y = 4;