user_data[10] = 0
user_data[11] = 0
user_data[12] = 0
user_data[13] = 0

sprites_l = [ 

				[8,0,"fax.png",[ ["VOUS","Ma carte de membre ne semble pas avoir été envoyée sur ce fax."],
				],[[10,1]]],
				[9,4,"fax.png",[ ["VOUS","Ma carte de membre ne semble pas avoir été envoyée sur ce fax."],
				],[[11,1]]],
				[5,9,"fax.png",[ ["VOUS","Ma carte de membre ne semble pas avoir été envoyée sur ce fax."],
				],[[12,1]]],
				[0,3,"fax.png",[ ["VOUS","Ce fax imprime en ce moment des prescriptions datant de 1997."],
				],[]],
				[0,2,"christian.png",[ ["VOUS","Salut Christian! Je me cherche une imprimante pour m'imprimer une carte de membre."],
										["CHRISTIAN DUBÉ","Malheureusement France-Élaine, il n'y a pas d'imprimantes dans les hôpitaux du Québec."],
										["CHRISTIAN DUBÉ","On a cependant des fax!"],
										["CHRISTIAN DUBÉ","Voilà... ta carte de membre est imprimée sur un des fax de l'hôpital. Mais je sais pas lequel. Il va falloir que tu le trouves."],
										["VOUS","Merci Christian!"],

				],[]],
			
			];

succes_sentence = "La cavale de votre ministre préférée s'arrête ici. Merci d'avoir joué. Revenez-nous bientôt pour un nouveau jeu. Visitez le 3elien.com.";
ot_cars = [
			

			];
pos_begginning = [0,0];
tiles = [

				["road",0,0,"up"],["road",0,1,"up"],["road",0,2,"up"],["road",0,3,"up"],["road",0,4,"up"],["road",0,5,"up"],["block",0,6,"up"],["road",0,7,"up"],["block",0,8,"up"],["road",0,9,"up"],
				["road",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["road",1,3,"up"],["road",1,4,"up"],["road",1,5,"up"],["road",1,6,"up"],["road",1,7,"up"],["road",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["block",2,1,"up"],["block",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["road",2,5,"up"],["road",2,6,"up"],["road",2,7,"up"],["block",2,8,"up"],["road",2,9,"up"],
				["block",3,0,"up"],["gold",3,1,"up"],["gold",3,2,"up"],["gold",3,3,"up"],["block",3,4,"up"],["gold",3,5,"up"],["gold",3,6,"up"],["block",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["gold",4,1,"up"],["block",4,2,"up"],["gold",4,3,"up"],["gold",4,4,"up"],["gold",4,5,"up"],["gold",4,6,"up"],["block",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["gold",5,0,"up"],["gold",5,1,"up"],["gold",5,2,"up"],["gold",5,3,"up"],["gold",5,4,"up"],["gold",5,5,"up"],["gold",5,6,"up"],["gold",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["road",6,0,"up"],["block",6,1,"up"],["road",6,2,"up"],["block",6,3,"up"],["gold",6,4,"up"],["gold",6,5,"up"],["block",6,6,"up"],["block",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["road",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["block",7,3,"up"],["gold",7,4,"up"],["gold",7,5,"up"],["block",7,6,"up"],["block",7,7,"up"],["gold",7,8,"up"],["block",7,9,"up"],
				["road",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["block",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["block",8,6,"up"],["block",8,7,"up"],["gold",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["road",9,4,"up"],["road",9,5,"up"],["gold",9,6,"up"],["gold",9,7,"up"],["gold",9,8,"up"],["block",9,9,"up"],		
            ]
			
			
change_tile = [ 
				[0,8,"car_patient2.png"],
				[1,9,"car_patient2.png"],
				[2,8,"car_patient2.png"],
				[0,6,"car_patient2.png"],
				];


nb_fire_l = 0
trees_l = []

$("#green_trigger").html("Faites attention! Les planchers de l'hôpital sont pourris.")
nb_road = 1000;
finished = [];



setInterval(function(){
	if(user_data[11] && user_data[12]){
		sprites_l[3] = [0,3,"fax.png",[ ["VOUS","Ma carte de membre a été faxée ici. Elle est enfin arrivée. Je l'ai maintenant en main."],
						],[[5,1]]]
	}

}
,500)


$("#green_trigger").html("Vous tombez dans un trou de plancher. Comme vous êtes dans un hôpital, personne ne vient à votre rescousse.")
$("#explosion").attr("src","empty.png");
$("#explosion").css("top","-1000vh");
