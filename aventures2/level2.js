sprites_l = [ 
			
				[6,6,"eric2.png",[ ["VOUS (FRANCE-ÉLAINE)","C'est mon collègue Éric Caire. Vaut mieux ne pas le déranger. Dès qu'il touche à de quoi, ça se passe mal."],

				],[]],
				[2,1,"hide.png",[],[]],
				[2,2,"hide.png",[],[]],
				[2,3,"hide.png",[],[]],
				[3,1,"hide.png",[],[]],
				[3,2,"hide.png",[],[]],
				[3,3,"hide.png",[],[]],
				[4,1,"hide.png",[],[]],
				[4,2,"hide.png",[],[]],
				[4,3,"hide.png",[],[]],
				[5,2,"hide.png",[],[]],
				
			];


conditional_sprites_hide = [ 
							//[2,1,0],
							//[2,2,0],
							//[2,3,0],
							//[3,1,0],
							//[3,2,0],
							//[3,3,0],
							//[4,1,0],
							//[4,2,0],
							//[4,3,0],
							//[5,2,0],
							[6,6,2]
								]



modify_dialogs_actions = [
	[6,6,1,1,"eric2.png",[["VOUS (FRANCE-ÉLAINE)","Salut Éric! Te souviens-tu du système de sécurité de la salle des trésors publics que tu m'as installé?"],["ÉRIC CAIRE","Je ne me souviens de rien."],["VOUS (FRANCE-ÉLAINE)","Éric... fais un petit effort... Tu te souviens? Tu as configuré la détection de Louboutin."],["ÉRIC CAIRE","J'ai faim. Je m'en vais manger une poutine."],["VOUS (FRANCE-ÉLAINE)","Je vais tenter de retrouver mes Louboutin alors..."]],[[2,1]]]
]


// Different behaviors for doors
if(user_data[7]==0){
	sprites_l.push([6,2,"gate.png",[["PORTE","Aucun Louboutin détecté. Accès refusé."],["VOUS (FRANCE-ÉLAINE)","Ah Zut! J'ai perdu mes Louboutin... et j'en ai besoin pour accéder à la salle des trésors publics."],["VOUS (FRANCE-ÉLAINE)","C'est Éric Caire qui a installé ce système de sécurité. Je pourrais aller le voir pour qu'il le désactive."]],[[1,1]]])
}
else{
	sprites_l.push([6,2,"gate.png",[["PORTE","Louboutin détectés. Accès accordé."]],[[0,1]]])
	conditional_sprites_hide.push([6,2,0])
}


console.log(sprites_l)

succes_sentence = "Une nouveau lieu est accessible. Passez par la carte pour vous y rendre.";
ot_cars = [
	        
			
];
pos_begginning = [8,1];
finished = [ [6,9,[[20,1]]] ];
tiles = [

				["block",0,0,"up"],["block",0,1,"up"],["block",0,2,"up"],["block",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["block",0,6,"up"],["block",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["block",1,1,"up"],["block",1,2,"up"],["block",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["block",1,6,"up"],["block",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["road",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["block",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["road",3,3,"up"],["block",3,4,"up"],["block",3,5,"up"],["block",3,6,"up"],["block",3,7,"up"],["block",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["road",4,2,"up"],["road",4,3,"up"],["block",4,4,"up"],["block",4,5,"up"],["block",4,6,"up"],["block",4,7,"up"],["block",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["block",5,1,"up"],["road",5,2,"up"],["block",5,3,"up"],["block",5,4,"up"],["block",5,5,"up"],["block",5,6,"up"],["block",5,7,"up"],["block",5,8,"up"],["block",5,9,"up"],
				["block",6,0,"up"],["block",6,1,"up"],["road",6,2,"up"],["block",6,3,"up"],["road",6,4,"up"],["road",6,5,"up"],["road",6,6,"up"],["road",6,7,"up"],["road",6,8,"up"],["road",6,9,"up"],
				["block",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["road",7,3,"up"],["road",7,4,"up"],["road",7,5,"up"],["road",7,6,"up"],["block",7,7,"up"],["block",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["road",8,3,"up"],["road",8,4,"up"],["road",8,5,"up"],["road",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["block",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["block",9,4,"up"],["block",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],


		
            ]
			
change_tile = [ 


				];


nb_fire_l = 0
trees_l = []


// Special case
setInterval(function(){
	if( (hero_x==6)&&(hero_y==2) ){
		window.location = "game.html?level=12&fromX="+map_X+"&fromY="+map_Y+"&data="+create_data_string();
	}
},100);
