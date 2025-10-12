sprites_l = [ [9,6,"francois.png",[ ["VOUS","François... qu'est-ce que tu fais planté devant chez moi? Coudonc, aurais-tu un petit kick sur moi?"],
									["FRANÇOIS BONNARDEL","Élaine! L'heure est grave! Mes agents de la SQ sont de nouveau en grève."],
									["VOUS","Donc, aucun agent pour débarrer mon domaine?"],
									["FRANÇOIS BONNARDEL","Non, ce n'est pas un service essentiel."],
									["VOUS", "C'est parce que je ne me rappelle plus comment ça marche des serrures à clé."],
									["VOUS","Bon, va falloir que j'utilise une alternative pour accéder à mon domaine."],
									["VOUS","C'est très simple... je dois marcher sur toutes les tuiles en or."],
									["VOUS", "Cependant, si je marche une seconde fois sur une même tuile... je serai électrocutée... c'est un piège pour éloigner les locatoires qui veulent venir m'écoeurer."],

									]],
			   [0,7,"jesus.png",[ ["VOUS","Ceci est une statue de Jésus."],
									["VOUS","Ce grand homme a fait le miracle de marcher sur l'eau."],
									]],
				[0,5,"francois1er.png",[ ["VOUS","Ceci est une statue de notre grand roi François 1er."],
									["VOUS","Ce grand homme aura fait le miracle de faire rouler les voitures sur l'eau."],
									]],
			

			
			];

succes_sentence = "La cavale de votre ministre préférée s'arrête ici. Merci d'avoir joué. Revenez-nous bientôt pour un nouveau jeu. Visitez le 3elien.com.";
ot_cars = [
			

			];
pos_begginning = [9,3];
finished = [0,2];
tiles = [

				["block",0,0,"up"],["block",0,1,"up"],["road",0,2,"up"],["block",0,3,"up"],["road",0,4,"up"],["block",0,5,"up"],["road",0,6,"up"],["block",0,7,"up"],["road",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["road",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["gate",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["gate",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["gold",3,0,"up"],["gold",3,1,"up"],["gold",3,2,"up"],["gold",3,3,"up"],["gold",3,4,"up"],["gold",3,5,"up"],["gold",3,6,"up"],["gold",3,7,"up"],["gold",3,8,"up"],["gold",3,9,"up"],
				["gold",4,0,"up"],["gold",4,1,"up"],["gold",4,2,"up"],["gold",4,3,"up"],["gold",4,4,"up"],["gold",4,5,"up"],["block",4,6,"up"],["gold",4,7,"up"],["gold",4,8,"up"],["gold",4,9,"up"],
				["gold",5,0,"up"],["gold",5,1,"up"],["block",5,2,"up"],["gold",5,3,"up"],["gold",5,4,"up"],["gold",5,5,"up"],["gold",5,6,"up"],["gold",5,7,"up"],["gold",5,8,"up"],["block",5,9,"up"],
				["gold",6,0,"up"],["gold",6,1,"up"],["gold",6,2,"up"],["gold",6,3,"up"],["gold",6,4,"up"],["gold",6,5,"up"],["gold",6,6,"up"],["gold",6,7,"up"],["gold",6,8,"up"],["gold",6,9,"up"],
				["gold",7,0,"up"],["gold",7,1,"up"],["gold",7,2,"up"],["gold",7,3,"up"],["gold",7,4,"up"],["gold",7,5,"up"],["gold",7,6,"up"],["gold",7,7,"up"],["gold",7,8,"up"],["gold",7,9,"up"],
				["block",8,0,"up"],["block",8,1,"up"],["block",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["road",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],

				["big",0,0],
				["house",0,0]
		
            ]
			
change_tile = [ 
						[5,2,"tree.png"],
						[4,6,"tree.png"],
						[5,9,"tree.png"],
						[8,0,"tree.png"],
						[8,1,"tree.png"],
						[8,2,"tree.png"],
						[8,9,"tree.png"],
						[8,8,"tree.png"],
						[8,7,"tree.png"],
						[9,0,"tree.png"],
						[9,1,"tree.png"],
						[9,2,"tree.png"],
						[9,9,"tree.png"],
						[9,8,"tree.png"],
						[9,7,"tree.png"],
						[2,0,"tree.png"],
						[2,1,"tree.png"],
						[2,3,"tree.png"],
						[2,4,"tree.png"],
						[2,5,"tree.png"],
						[2,6,"tree.png"],
						[2,8,"tree.png"],
						[2,9,"tree.png"],
						[0,3,"tree.png"],
						[0,9,"tree.png"],

				];


nb_fire_l = 0
trees_l = []

$("#green_trigger").html("Faites attention! La piège à locataires sans logement est activé.")
nb_gold = 47;