var Discord = require('discord.js'); 
var ffmpeg = require("ffmpeg"); 
var token = process.env.Discord_Token; 
var client = new Discord.Client();
var mention = "<@343473031106002944>";
let waitingForResponse = new Map();

client.on("ready", () => {
	console.log("En cours de préparation...")
	console.log("................................................")
	console.log(new Date + "Je suis désormais connecté, merci de ne surtout pas fermer cette fenêtre")
});

client.on("message", (message) => {
	
var voiceCO = client.user.voiceStatuts
var str

switch(voiceCO){
    case 0:
        str = "CONNECTED"
        break;

    case 1:
        str = "CONNECTING"
        break;
    
    case 2:
        str = "AUTHENTICATING"
        break;

    case 3:
        str = "RECONNECTING"
        break;

    case 4:
        str = "DISCONNECTED"
        break;
    
    default:
        str = "gnagna"
        break
}

if(str != "CONNECTED"){
    channel.join().then(connection => {
	const channel = client.channels.find('name', "KawaiiSongs");
        const radio = "http://streaming.radionomy.com/Subarashii" 
        connection.playStream(radio);
    })
}

if (message.content === "?join"){
	const channel = client.channels.find('name', "KawaiiSongs");
	var auteur = message.author.username
		channel.join().then(connection => {
        	const radio = "http://streaming.radionomy.com/Subarashii" 
        	connection.playStream(radio);
      		console.log(new Date + auteur + " m'a connecté sur le channel \"KawaiiSongs\" du serveur TLB project")
        });
}

if (message.content === "?stop"){
	const channel = client.channels.find('name', "KawaiiSongs");
	var auteur = message.author.username;
    	if (message.member.roles.find("name", "DJ")){
        	channel.leave();
        	console.log("--Deconnexion--")
        	console.log(new Date + auteur + " m'a déconnecté du channel \"KawaiiSongs\" serveur TLB project")
        };
	};

if (message.content === "Michiru"){
	if (message.member.roles.find("name", "Berserker")){
		message.channel.send("Au rapport senpai ! :heart: :heart_eyes: ").then(message => {
			message.delete(6000)
		})
	}
	else {message.channel.send("Quoi encore ?!! :angry:").then(message => {
			message.delete(6000)
		})
	}
};

if (message.content === "?purge"){
	if (message.member.roles.find("name", "Berserker")){
  	message.guild.roles.get('343703724016795650').members.forEach(function(member){
	member.send(["Bonjour,",
"",
"Je me permets de faire un rappel concernant le serveur \"TLB Project\", rien de bien méchant. Le règlement a changé. En conséquence, ton",
"\"inactivité de lecture\" peut entraîner un kick du serveur.",
"",
"Je me permets donc de te poser la question suivante :",
"",
"__Comptes-tu lire/écouter « The last Berserk » ?__",
"",
"Si oui, merci de répondre __`Oui`__ à ce message, tu obtiendras le grade `sursis` le temps que tu lises puis réponde à au moins un questionnaire. Actuellement, comme tu peux le comprendre, nous ne pouvons pas témoigner de ton implication dans notre projet.",
"",
"Sinon, je t’invite à quitter le serveur dès maintenant ou à répondre __`Non`__ à ce message, nous nous occuperons du reste.",
"",
"Si nous n'avons pas de réponse dans la semaine qui suis nous considérerons que la réponse est Non.",
"",
"Merci de ta compréhension, et bonne soirée.",
"",
"Cordialement,",
"",
"L’équipe du Projet TLB",
"",
"__PS : Ce message est envoyé par un bot il est donc inutile de répondre autre chose que juste Oui ou Non sinon ça ne fonctionnera pas.__ Si tu as des questions ou que tu veux t'expliquer avec une vrai personne je t'invite à __contacter un Berserker ou une Autorités Savantes sur le serveur.__"]);
	waitingForResponse.set(member.user.id, member);
	});
}
}

if(message.channel.type == 'dm'){
    if(waitingForResponse.has(message.author.id))
    {
        switch(message.content.toLowerCase())
        {
        case 'oui':
        waitingForResponse.get(message.author.id).addRole('336244627407503370');
        waitingForResponse.get(message.author.id).removeRole("343703724016795650");

        waitingForResponse.delete(message.author.id)
            break;
        case 'non':
        waitingForResponse.get(message.author.id).addRole("343704510885134348");
        waitingForResponse.get(message.author.id).removeRole("343703724016795650");
        waitingForResponse.delete(message.author.id)
            break;
            }
        }
    }

if (message.content === "?rappel"){
	if (message.member.roles.find("name", "Berserker")){
	var rappelleur = message.author.username
	message.guild.roles.get("302744313731743757").members.forEach(function(member){
		member.send(["**Bonjour !**",
			"",
			"Ceci est un message envoyé par un bot du serveur __\"TLB Project\"__, si vous recevez ce rappel :",
			"",
			"- Vous êtes __nouveau / nouvelle__ sur TLB.",
			"",
			"- Vous êtes __inactif__ (En terme de lecture).",
			"",
			"**Pour les nouveaux :**",
			"",
			"N'oubliez pas que le serveur a pour but premier de recceuillir des avis sur notre oeuvre, merci donc de prendre votre temps pour lire et nous faire part de vos retours via les questionnaires à votre disposition dans le chanel \"#projet\".",
			"",
			"**Pour les inactifs :**",
			"",
			"Rien de bien méchant, mais veuillez, s'il vous plaît, prendre 5min afin de répondre aux questionnaires (Prologue Inclu) après votre lecture.",
			"Si nous n'avons toujours rien (Un seul questionnaire nous suffit, même celui du Prologue, qui est relativement court) d'ici une semaine venant de vous, vous serez kick du serveur pour inactivité de lecture.",
			"",
			"Merci de votre attention,",
			"",
			"Cordialement,",
			"",
			"Michiru. (Inutile de me répondre, je suis un BOT !)"])
	})
	console.log(rappelleur + "a fait un rappel aux inactifs")
	}
}

if (message.content.startsWith("??rappel1")){
	if (message.author.id != "367374581884780545") return;
	message.guild.roles.get("302744313731743757").members.forEach(function(member){
		member.send(["Bonjour ! ",
		"",
		"Je suis un BOT du serveur **__\"TLB Project\"__** dont tu fais parti, je viens te transmettre un message de la part du staff !",
		"",
		"Pas de stress, tu ne risques rien !",
		"",
		"TLB Project est un serveur qui diffuse un **Novel, projet amateur à but professionnel**. Leur objectif est de recceuillir des avis sur le scénario du projet qui sera, dans quelques années, **développé en manga** !",
		"",
		"Ce message est envoyé à tous les membres du serveur.",
		"",
		"Tout d'abord : **Merci de votre soutien !**",
		"",
		"Ensuite, nous vous rappellons que remplir les questionnaires suite à votre lecture nous permet d'avancer : **Vous participez à la qualité du Manga par vos critiques et avis !**",
		"",
		"Merci donc, de prendre un peu de votre temps pour nous faire parvenir vos __formulaires après avoir lu__ !",
		"",
		"Sur TLB, des __animations autours de la culture Japonaise et Otaku ont lieu fréquemment__, n'hésitez pas à venir y participer !",
		"",
		"Si vous avez des **questions/remarques** suite à ce message (Par exemple : Où sont les questionnaires ?), merci de vous adresser à un **membre du staff** qui y répondra !",
		"",
		"Plein de bonnes choses, et n'oubliez pas : **TLB compte sur vous !**",
		"",
		"Cordialement,",
		"",
		"__Michiru. __ (Oh, je suis un BOT je te rappelle, pas la peine de me répondre, adresse toi au staff sur le serveur pour la suite !)"])
	})
}

if (message.content.startsWith("??rappel2")){
	if (message.author.id != "367374581884780545") return;
	message.guild.roles.get("302744310749593603").members.forEach(function(member){
		member.send(["Bonjour ! ",
		"",
		"Je suis un BOT du serveur **__\"TLB Project\"__** dont tu fais parti, je viens te transmettre un message de la part du staff !",
		"",
		"Pas de stress, tu ne risques rien !",
		"",
		"TLB Project est un serveur qui diffuse un **Novel, projet amateur à but professionnel**. Leur objectif est de recceuillir des avis sur le scénario du projet qui sera, dans quelques années, **développé en manga** !",
		"",
		"Ce message est envoyé à tous les membres du serveur.",
		"",
		"Tout d'abord : **Merci de votre soutien !**",
		"",
		"Ensuite, nous vous rappellons que remplir les questionnaires suite à votre lecture nous permet d'avancer : **Vous participez à la qualité du Manga par vos critiques et avis !**",
		"",
		"Merci donc, de prendre un peu de votre temps pour nous faire parvenir vos __formulaires après avoir lu__ !",
		"",
		"Sur TLB, des __animations autours de la culture Japonaise et Otaku ont lieu fréquemment__, n'hésitez pas à venir y participer !",
		"",
		"Si vous avez des **questions/remarques** suite à ce message (Par exemple : Où sont les questionnaires ?), merci de vous adresser à un **membre du staff** qui y répondra !",
		"",
		"Plein de bonnes choses, et n'oubliez pas : **TLB compte sur vous !**",
		"",
		"Cordialement,",
		"",
		"__Michiru. __ (Oh, je suis un BOT je te rappelle, pas la peine de me répondre, adresse toi au staff sur le serveur pour la suite !)"])
	})
}

if (message.content.startsWith("??rappel3")){
	if (message.author.id != "367374581884780545") return;
	message.guild.roles.get("302736761078022146").members.forEach(function(member){
		member.send(["Bonjour ! ",
		"",
		"Je suis un BOT du serveur **__\"TLB Project\"__** dont tu fais parti, je viens te transmettre un message de la part du staff !",
		"",
		"Pas de stress, tu ne risques rien !",
		"",
		"TLB Project est un serveur qui diffuse un **Novel, projet amateur à but professionnel**. Leur objectif est de recceuillir des avis sur le scénario du projet qui sera, dans quelques années, **développé en manga** !",
		"",
		"Ce message est envoyé à tous les membres du serveur.",
		"",
		"Tout d'abord : **Merci de votre soutien !**",
		"",
		"Ensuite, nous vous rappellons que remplir les questionnaires suite à votre lecture nous permet d'avancer : **Vous participez à la qualité du Manga par vos critiques et avis !**",
		"",
		"Merci donc, de prendre un peu de votre temps pour nous faire parvenir vos __formulaires après avoir lu__ !",
		"",
		"Sur TLB, des __animations autours de la culture Japonaise et Otaku ont lieu fréquemment__, n'hésitez pas à venir y participer !",
		"",
		"Si vous avez des **questions/remarques** suite à ce message (Par exemple : Où sont les questionnaires ?), merci de vous adresser à un **membre du staff** qui y répondra !",
		"",
		"Plein de bonnes choses, et n'oubliez pas : **TLB compte sur vous !**",
		"",
		"Cordialement,",
		"",
		"__Michiru. __ (Oh, je suis un BOT je te rappelle, pas la peine de me répondre, adresse toi au staff sur le serveur pour la suite !)"])
	})
}

});

client.login(token);
