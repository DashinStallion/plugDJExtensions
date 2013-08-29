var mubBot = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
botMethods = {};
mubBot.pubVars = {};

toSave = {};
toSave.settings = mubBot.settings;
toSave.moderators = mubBot.moderators;

mubBot.misc.version = "1.84";
mubBot.misc.origin = "This bot was created by Emub and DerpTheBass alone, and it is copyrighted!";
mubBot.misc.changelog = "Added links for FiM and !commands";
mubBot.misc.ready = true;
mubBot.misc.lockSkipping = false;
mubBot.misc.lockSkipped = "0";
mubBot.misc.tacos = new Array();

joined = new Date().getTime();

mubBot.filters.swearWords = new Array();
mubBot.filters.racistWords = new Array();
mubBot.filters.beggerWords = new Array();

mubBot.moderators.creators = new Array();
mubBot.moderators.admins = new Array();
mubBot.moderators.trusted = new Array();
mubBot.moderators.tempTrust = new Array();

mubBot.settings.maxLength = 10; //minutes
mubBot.settings.cooldown = 10; //seconds
mubBot.settings.staffMeansAccess = true;
mubBot.settings.historyFilter = true;
mubBot.settings.swearFilter = true;
mubBot.settings.racismFilter = true;
mubBot.settings.beggerFilter = true;
mubBot.settings.interactive = true;

mubBot.moderators.creators[0] = "50aeaf683e083e18fa2d187e"; // Emub
mubBot.moderators.creators[1] = "50aeb07e96fba52c3ca04ca8"; // DerpTheBass

mubBot.moderators.admins[2] = "50aeb607c3b97a2cb4c35ac1"; // [#808]
mubBot.moderators.admins[3] = "51264d96d6e4a966883b0702"; // eBot
mubBot.moderators.admins[4] = "51d9f03696fba541eb78d4a1"; // Dashin


API.on(API.CHAT, chatEvent);
API.on(API.HISTORY_UPDATE, historyUpdateEvent);

function chatEvent(data){
	botMethods.chatEvent(data);
}

function historyUpdateEvent(data){
	setTimeout(function(){ botMethods.historyUpdateEvent(data); }, 500);
}


botMethods.getID = function(username){
	var users = API.getUsers();
	var result = "";
	for(var i = 0; i < users.length; i++){
		if(users[i].username === username){
			result = users[i].id;
			return result;
		}
	}

	return "notFound";
}



botMethods.chatEvent = function(data){
	command = false; var chatCommand = "";
	var permission = botMethods.getPermissions(data.fromID);
	if(data.message.indexOf("!") === 0) command = true;
	if(command){

		chatCommand = data.message.substring(1);
		var commands = chatCommand.split(" ");
		commands.push("undefined");
		
		for(var i = 2; i < commands.length; i++){
			if(commands[i] !== "undefined") commands[1] = commands[1] + " " + commands[i];
		}

	
				case "access":
					if(commands[1] !== "undefined"){
						if(commands[1].indexOf("@") === 0) commands[1] = commands[1].substring(1);
						if(permission > 0){

							var userPermission = botMethods.getPermissions(botMethods.getID(commands[1]));
							userPermission === 0 ? API.sendChat("This user has no bot permissions") : API.sendChat("This user has level " + userPermission + " access");

						}else{
							API.sendChat("You must be at least a trusted bot user to check others access levels!");
						}
					}else{
						API.sendChat("@" + data.from + ", you have level " + permission + " access");
					}
				break;

			

				case "version":
					API.sendChat("mubBot user shell version " + mubBot.misc.version);
				break;

			

				case "origin":
				case "author":
				case "authors":
				case "creator":
					API.sendChat(mubBot.misc.origin);
				break;

			
			}
		}
	
botMethods.loadStorage();
console.log("Running mubBot User Shell version " + mubBot.misc.version);
