var Discord = require('discord.js'); //Requit : discord.js (installation : "npm install discord.js")
var ffmpeg = require("ffmpeg"); //Requit :
var token = process_env.Discord_Token; 
var client = new Discord.Client();
var mention = "<@343473031106002944>";
let waitingForResponse = new Map();

client.on("ready", () => {
	console.log("En cours de préparation...")
	console.log("................................................")
	console.log(new Date + "Je suis désormais connecté, merci de ne surtout pas fermer cette fenêtre")
});

client.on("message", (message) => {

if (message.content === "?join"){
const channel = client.channels.find('name', "KawaiiSongs");
var auteur = message.author.username;
	channel.join().then(connection => {
        const radio = "http://streaming.radionomy.com/Subarashii" 
        connection.playStream(radio);
      	console.log(new Date + auteur + " m'a connecté sur le channel \"KawaiiSongs\" du serveur TLB project")
        });
    };

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
	message.guild.roles.get("343703724016795650").members.forEach(function(member){
		member.send(["Bonjour !",
		"",
		"Ceci est un message envoyé par un bot du serveur \"TLB Project\" concernant les nouveaux venus et les inactifs de lecture.",
		"",
		"__Pour les nouveaux :__", 
		"",
		"N'oubliez pas que le serveur a pour but premier de recceuillir des avis sur notre oeuvre, merci donc de prendre votre temps pour lire et nous faire part de vos retours via les __questionnaires__ à votre disposition dans le chanel #projet.",
		"",
		"__Pour les inactifs :__ (Plus d'un mois de présence sur le serveur sans questionnaire remplis / aucune partie de l'oeuvre lu)",
		"",
		"Rien de bien méchant, mais veuillez, s'il vous plaît, prendre 5min afin de __répondre aux questionnaires après votre lecture__.",
		"Une purge kickant les personnes inactives (au niveau de la lecture uniquement) aura lieu __début Septembre__, d'ici là, nous espérons recevoir votre questionnaire afin de vous éviter le kick du serveur pour inactivité de lecture. __(En remplir un seul suffit à vous éviter le kick, même celui du prologue. Nous demandons seulement une implication de votre part au niveau de la lecture, et seulement ça.)__",
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
});


client.login(token);




