sprites_l = [ 
			
				[3,2,"genevieve.png",[ ["VOUS","Rebonjour Geneviève! Que fais-tu?"],
										["GENEVIÈVE GUILBAULT","Rebonjour France-Élaine! Je cherche à accéder au Club des OFA."],
										["VOUS","Les OFA?"],
										["GENEVIÈVE GUILBAULT","Oui! Les Opportunistes Fédéralistes Anonymes! Je cherche à savoir comment me faire réélire en changeant de palier de gouvernement."],
										["GENEVIÈVE GUILBAULT","Malheureusement, il faut une carte de membre pour y accéder."],
				],[]],
				[4,5,"soroya.png",[ 	["SORAYA MARTINEZ FERRADA","Je mettrai mon expérience de ministre fédérale des touristes à contribution de la Ville de Montréal."],
										["VOUS","Comment?"],
										["SORAYA MARTINEZ FERRADA","Nous utiliserons les nombreux nids de poule de la métropole afin de créer un réseau sous-terrain appelé le Réseau Express Touristes."],
										["SORAYA MARTINEZ FERRADA","Comme ça, les pauvres touristes pourront plus rapidement se rendre à l'aéroport pour fuir la ville."],
				],[]],
				[3,6,"marieclaude.png",[ 	["MARIE-CLAUDE BIBEAU","Je mettrai mon expérience de ministre fédérale des vaches à contribution de la Ville de Sherbrooke."],
										["VOUS","Comment?"],
										["MARIE-CLAUDE BIBEAU","Afin d'améliorer l'état des routes, j'augmenterai l'impôt provincial des entreprises."],
										["VOUS","Ok, mais l'impôt provincial c'est pas de juridiction municipale..."],
										["MARIE-CLAUDE BIBEAU","Ah mais c'est pas grave... Quand j'étais ministre, mon chef Justin Trudeau m'a montré qu'il n'y avait rien là à outrepasser ses champs de compétence."],

				],[]],
				[4,7,"ericlefebvre.png",[ 	["VOUS","Tu me dis de quoi toi... T'es qui déjà?"],
										["ÉRIC LEFEBVRE","Salut! Je suis ton ancien collègue à la CAQ. Tu te souviens, j'étais le député du comté d'Arthabaska."],
										["ÉRIC LEFEBVRE","Je suis maintenant le serviteur de mon Messie Pierre Poilièvre."],
				],[]],
			];


conditional_sprites_hide = [ 

								]

modify_dialogs_actions = [
	[6,6,1,1,"eric2.png",[["VOUS (FRANCE-ÉLAINE)","Salut Éric! Te souviens-tu du système de sécurité de la salle des trésors publics que tu m'as installé?"],["ÉRIC CAIRE","Je ne me souviens de rien."],["VOUS (FRANCE-ÉLAINE)","Éric... fais un petit effort... Tu te souviens? Tu as configuré la détection de Louboutin."],["ÉRIC CAIRE","J'ai faim. Je m'en vais manger une poutine."],["VOUS (FRANCE-ÉLAINE)","Je vais tenter de retrouver mes Louboutin alors..."]],[[2,1]]]
]


// Different behaviors for doors
if(user_data[5]==0){
	sprites_l.push([5,3,"gate.png",[["PORTE","ACCÈS REFUSÉ. Carte de membre requise."],],[]])
}
else{
	sprites_l.push([5,3,"gate.png",[["PORTE","Carte de membre acceptée."]],[[6,1]]])
	conditional_sprites_hide.push([5,3,6])
}


console.log(sprites_l)

succes_sentence = "Une nouveau lieu est accessible. Passez par la carte pour vous y rendre.";
ot_cars = [
	        
			
];
pos_begginning = [0,1];
finished = [ [9,1,[[26,1]]],[5,9,[[27,1]]] ];
tiles = [

				["block",0,0,"up"],["road",0,1,"up"],["block",0,2,"up"],["block",0,3,"up"],["block",0,4,"up"],["block",0,5,"up"],["block",0,6,"up"],["block",0,7,"up"],["block",0,8,"up"],["block",0,9,"up"],
				["block",1,0,"up"],["road",1,1,"up"],["road",1,2,"up"],["block",1,3,"up"],["block",1,4,"up"],["block",1,5,"up"],["block",1,6,"up"],["block",1,7,"up"],["block",1,8,"up"],["block",1,9,"up"],
				["block",2,0,"up"],["road",2,1,"up"],["road",2,2,"up"],["block",2,3,"up"],["block",2,4,"up"],["block",2,5,"up"],["block",2,6,"up"],["block",2,7,"up"],["block",2,8,"up"],["block",2,9,"up"],
				["block",3,0,"up"],["road",3,1,"up"],["road",3,2,"up"],["block",3,3,"up"],["road",3,4,"up"],["road",3,5,"up"],["road",3,6,"up"],["road",3,7,"up"],["road",3,8,"up"],["block",3,9,"up"],
				["block",4,0,"up"],["road",4,1,"up"],["road",4,2,"up"],["block",4,3,"up"],["road",4,4,"up"],["road",4,5,"up"],["road",4,6,"up"],["road",4,7,"up"],["road",4,8,"up"],["block",4,9,"up"],
				["block",5,0,"up"],["road",5,1,"up"],["road",5,2,"up"],["road",5,3,"up"],["road",5,4,"up"],["road",5,5,"up"],["road",5,6,"up"],["road",5,7,"up"],["road",5,8,"up"],["road",5,9,"up"],
				["block",6,0,"up"],["road",6,1,"up"],["road",6,2,"up"],["block",6,3,"up"],["block",6,4,"up"],["block",6,5,"up"],["road",6,6,"up"],["block",6,7,"up"],["block",6,8,"up"],["block",6,9,"up"],
				["block",7,0,"up"],["road",7,1,"up"],["road",7,2,"up"],["block",7,3,"up"],["block",7,4,"up"],["block",7,5,"up"],["block",7,6,"up"],["block",7,7,"up"],["block",7,8,"up"],["block",7,9,"up"],
				["block",8,0,"up"],["road",8,1,"up"],["road",8,2,"up"],["block",8,3,"up"],["block",8,4,"up"],["block",8,5,"up"],["block",8,6,"up"],["block",8,7,"up"],["block",8,8,"up"],["block",8,9,"up"],
				["block",9,0,"up"],["road",9,1,"up"],["block",9,2,"up"],["block",9,3,"up"],["block",9,4,"up"],["block",9,5,"up"],["block",9,6,"up"],["block",9,7,"up"],["block",9,8,"up"],["block",9,9,"up"],
            ]
			
change_tile = [
				[6,6,"tile_block.png"],
				];


// Special case
setInterval(function(){
	if( (hero_x==6)&&(hero_y==6) ){
		window.location = "game.html?level=11&fromX="+map_X+"&fromY="+map_Y+"&data="+create_data_string();
	}
},100);


nb_fire_l = 0
trees_l = []

