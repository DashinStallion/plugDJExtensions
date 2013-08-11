var mubBot = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
mubBot.methods = {};
mubBot.pubVars = {};

mubBot.misc.version = "0.001";
mubBot.misc.origin = "This bot was created by Emub and DerpTheBass alone, and it is copyrighted!";
mubBot.misc.ready = true;

mubBot.filters.swearWords = new Array();
mubBot.filters.racistWords = new Array();
mubBot.filters.beggerWords = new Array();

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

mubBot.moderators.admins[0] = "50aeaf683e083e18fa2d187e"; // Emub
mubBot.moderators.admins[1] = "50aeb07e96fba52c3ca04ca8"; // DerpTheBass
mubBot.moderators.admins[2] = "50aeb607c3b97a2cb4c35ac1"; // [#808]
mubBot.moderators.admins[3] = "51264d96d6e4a966883b0702"; // eBot

mubBot.moderators.trusted[0] = "51f6c5c896fba549233faa8a"; // John

mubBot.filters.swearWords[0] = "fuck";
mubBot.filters.swearWords[1] = "shit";
mubBot.filters.swearWords[2] = "bitch";
mubBot.filters.swearWords[3] = "cunt";
mubBot.filters.swearWords[4] = "twat";
mubBot.filters.swearWords[5] = "dumbass";

mubBot.filters.racistWords[0] = "nigger";
mubBot.filters.racistWords[1] = "nigguh";
mubBot.filters.racistWords[2] = "nigga";
mubBot.filters.racistWords[3] = "niggs";
mubBot.filters.racistWords[4] = "niggz";
mubBot.filters.racistWords[5] = "nizzle";

mubBot.filters.beggerWords[0] = "fan4fan";
mubBot.filters.beggerWords[1] = "fan me";
mubBot.filters.beggerWords[2] = "fan pls";
mubBot.filters.beggerWords[3] = "fan please";
mubBot.filters.beggerWords[4] = "fan 4 fan";
mubBot.filters.beggerWords[5] = "fan back";

mubBot.pubVars.skipOnExceed;
mubBot.pubVars.command = false;

API.on(API.CHAT, mubBot.methods.chatEvent);
API.on(API.HISTORY_UPDATE, historyUpdateEvent);

mubBot.methods.checkHistory = function(){
    currentlyPlaying = API.getMedia(); history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }

    caught--;
    return caught;
}

mubBot.methods.woot = function(){
    $("#button-vote-positive").click();
}

mubBot.methods.getPermissions = function(id){
    for(var i = 0; i < mubBot.moderators.admins.length; i++){
        if(mubBot.moderators.admins[i] === id) return "admin";
    }

    for(var i = 0; i < mubBot.moderators.mods.length; i++){
        if(mubBot.moderators.mods[i] === id) return "trusted";
    }

    for(var i = 0; i < mubBot.moderators.tempTrust.length; i++){
        if(mubBot.moderators.tempTrust[i] === id) return "tempTrusted";
    }
  
	if(API.getUser(id).permission > 1 && API.getUser(id).permission < 4 && mubBot.settings.staffMeansAccess) return "trusted";
	if(API.getUser(id).permission > 3 && mubBot.settings.staffMeansAccess) return "admin";
	
	return "none";
}

mubBot.methods.getID = function(username){
	var users = API.getUsers();
	var result = "";
	for(var i = 0; i < users.length; i++){
		if(users[i].username === username){
			result = users[i].id;
		}
	}
	
	if(result === ""){
		result = "notFound";
	}
	
	return result;
}

mubBot.methods.historyUpdateEvent = function(data){
    clearTimeout(skipOnExceed);
    var song = API.getMedia();
    if(mubBot.methods.checkHistory() > 0 && mubBot.settings.historySkip){
        if(API.getUser().permission < 2){
            API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else{
			API.moderateForceSkip();
			API.sendChat("This song was skipped because it was in the room history.");
		}
    }else if(song.duration > mubBot.settings.maxLength * 60){
		skipOnExceed = setTimeout( function(){
			API.moderateForceSkip();
			API.sendChat("You have now played for as long as this room allows, time to let someone else have the honor!");
		}, mubBot.settings.maxLength * 60000);
		API.sendChat("This song will be skipped " + mubBot.settings.maxLength + " from now because it exceeds the max song length.");
	}
}

mubBot.methods.chatEvent = function(data){
	command = false; var chatCommand = "";
	var permission = mubBot.methods.getPermissions(data.fromID);
	if(data.message.indexOf("!") === 0) command = true;
	if(command){
	
		chatCommand = data.message.substring(1);
		var commands = chatCommand.split(" ");
		commands.push("undefined");
		
		if(ready || permission === "admin"){
			switch(commands[0].toLowerCase()){
				case "meh":
					if(permission === "admin" || permission === "trusted") $("#button-vote-negative").click();
				break;
				
				case "woot":
					if(permission === "admin" || permission === "trusted") $("#button-vote-positive").click();
				break;
				
				case "skip":
					permission === "admin" ? API.moderateForceSkip() : API.sendChat("This commands requires being a mod admin!");
				break;
				
				case "access":
					if(commands[1] !== "undefined"){
						if(commands[1].indexOf("@") === 0) commands[1].substring(1);
						if(permission === "admin" || permission === "trusted"){
						
							var userPermission = mubBot.methods.getPermissions(mubBot.methods.getID(commands[1]));
							userPermission === "none" ? API.sendChat("This user has no bot permissions") : API.sendChat("This user has " + userPermission + " level access");
							
						}else{
							API.sendChat("You must be at least a trusted bot user to check others access levels!");
						}
					}else{
						API.sendChat("@" + data.from + ", you have " + permission + " level access");
					}
				break;
				
				case "history filter":
					mubBot.settings.historyFilter ? API.sendChat("History filter is enabled") : API.sendChat("History filter is disabled");
				break;
			
				case "swear filter":
					mubBot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
				break;
			
				case "racism filter":
					mubBot.settings.racismFilter ? API.sendChat("Racism filter is enabled") : API.sendChat("Racism filter is disabled");
				break;
			
				case "begger filter":
					mubBot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
				break;
				
				case "tsf":
					if(permission === "admin"){
						if(mubBot.settings.swearFilter){
							mubBot.settings.swearFilter = false;
							API.sendChat("Bot will no longer filter swearing.");
						}else{
							mubBot.settings.swearFilter = true;
							API.sendChat("Bot will now filter swearing.");
						}
					}
				break;
				
				case "trf":
					if(permission === "admin"){
						if(mubBot.settings.racismFilter){
							mubBot.settings.racismFilter = false;
							API.sendChat("Bot will no longer filter racism.");
						}else{
							mubBot.settings.racismFilter = true;
							API.sendChat("Bot will now filter racism.");
						}
					}
				break;
				
				case "tbf":
					if(permission === "admin"){
						if(mubBot.settings.beggerFilter){
							mubBot.settings.beggerFilter = false;
							API.sendChat("Bot will no longer filter fan begging.");
						}else{
							mubBot.settings.beggerFilter = true;
							API.sendChat("Bot will now filter fan begging.");
						}
					}
				break;
				
				case "thf":
					if(permission === "admin"){
						if(mubBot.settings.historyFilter){
							mubBot.settings.historyFilter = false;
							API.sendChat("Bot will no longer skip songs that are in the room history.");
						}else{
							mubBot.settings.historyFilter = true;
							API.sendChat("Bot will now skip songs that are in the room history.");
						}
					}
				break;
				
				case "version":
					API.sendChat("mubBot version " + mubBot.misc.version);
				break;
			
				case "marco":
					API.sendChat("Polo");
				break;
				
				case "origin":
				case "author":
				case "authors":
				case "creator":
					API.sendChat(mubBot.misc.origin);
				break;
				
			}
		}
	}else{
		
		// swearing
		for(var s = 0; s < mubBot.filters.swearWords.length; s++){
			if(data.message.toLowerCase().indexOf(mubBot.filters.swearWords[s]) > -1 && mubBot.settings.swearFilter){
				API.moderateDeleteChat(data.chatID);
			}
		}
		
		// racism
		for(var a = 0; a < mubBot.filters.racistWords.length; a++){
			if(data.message.toLowerCase().indexOf(mubBot.filters.racistWords[a]) > -1 && mubBot.settings.racismFilter){
				API.moderateDeleteChat(data.chatID);
			}
		}
		
	}
}

API.sendChat("Running mubBot revision 2 version " + mubBot.misc.version);
