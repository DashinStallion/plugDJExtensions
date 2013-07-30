var customGreen = "#5bd708";
function initialize(){
	
	var css = $('<link>');
	css.attr("href", "https://raw.github.com/Emub/plugDJExtensions/master/mubPlug.css").attr("rel", "stylesheet").attr("type", "text/css");
	
	var jQuery = document.createElement("script");
	jQuery.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
	$("head").append(jQuery).append(css);
	
	var chatPosition = $("#chat").position();
	var chatPositionLeft = chatPosition.left;
	var chatWidth = $("#chat").width();
	var UIPosition = chatPositionLeft + 170 + "px";
	var UI = $('<div>');
	
	var userList = $('<div>');
	userList.attr("id", "mubPlug-userlist").attr("class", "sidebar");
	
	var userListHeader = $('<div>');
	userListHeader.attr("class", "dialog-header");
	
	var userListHeaderTitle = $('<span>');
	userListHeaderTitle.html('User List');
	
	var usersPara = $('<p>');
	usersPara.html(" users in room").attr("id", "usersPara");
	
	var waitlistPara = $('<p>');
	waitlistPara.html("Waitlist: ").attr("id", "waitlistPara");
	
	var userListDiv = $('<div>');
	userListDiv.attr("id", "userListDiv");
	
	var settingsWindow = $('<div>');
	settingsWindow.attr("id", "settingsWindow").css("display", "none");
	
	var settingsWindowHeader = $('<div>');
	settingsWindowHeader.attr("class", "overlay-header");
	
	var settingsWindowHeaderTitle = $('<div>');
	settingsWindowHeaderTitle.html('mubPlug Settings').attr("class", "overlay-title");
	
	var settingsWindowCloseButton = $('<div>');
	settingsWindowCloseButton.attr("class", "overlay-close-button").attr("id", "settingsWindowCloseButton");
	
	var settingsWindowTable = $('<table>');
	settingsWindowTable.attr("cellspacing", "5").attr("cellspacing", "5").attr("id", "settingsWindowTable");
	
	var tableRow1 = $('<tr>');
	var tableRow2 = $('<tr>');
	var tableRow3 = $('<tr>');
	var tableRow4 = $('<tr>');
	var tableRow5 = $('<tr>');
	var tableRow6 = $('<tr>');
	var tableData1 = $('<td>');
	var tableData2 = $('<td>');
	var tableData3 = $('<td>');
	var tableData4 = $('<td>');
	var tableData5 = $('<td>');
	var tableData6 = $('<td>');
	var tableData7 = $('<td>');
	var tableData8 = $('<td>');
	var tableData9 = $('<td>');
	var tableData10 = $('<td>');
	var tableData11 = $('<td>');
	
	var settingsButton = $('<div>');
	settingsButton.html('Settings').attr("id", "settingsButton").attr("class", "divButton");
	
	var autoQueueButton = $('<div>');
	autoQueueButton.html(' - Auto queue').attr("id", "autoQueueButton").attr("class", "divButton").attr("title", "Toggles the auto waitlist join feature.");
	
	var autoWootButton = $('<div>');
	autoWootButton.html(' + Auto woot').attr("id", "autoWootButton").attr("class", "divButton").attr("title", "Toggles the auto woot feature.");
	
	var historyAlertButton = $('<div>');
	historyAlertButton.html(' + History alerts').attr("id", "historyAlertButton").attr("class", "divButton").attr("title", "Displays a warning in the chat if the song currently playing is in the room history.");
	
	var upcomingAlertsButton = $('<div>');
	upcomingAlertsButton.html(' + Upcoming alerts').attr("id", "upcomingAlertsButton").attr("class", "divButton").attr("title", "Displays a warning in the chat if the song you are going to play is in the room history.");
	
	var curateAlertsButton = $('<div>');
	curateAlertsButton.html(' - Curate messages').attr("id", "curateAlertsButton").attr("class", "divButton").attr("title", "Shows a message in the chat when someone curates a song.");
	
	var speakUpButton = $('<div>');
	speakUpButton.html(' - Tell chat history alerts').attr("id", "speakUpButton").attr("class", "divButton").attr("title", "Sends a message in the chat if the song playing is in the room history.");
	
	var hideVideoButton = $('<div>');
	hideVideoButton.html(' - Hidden video').attr("id", "hideVideoButton").attr("class", "divButton").attr("title", "Hides or shows the video.");
	
	var userListButton = $('<div>');
	userListButton.html(' + Userlist').attr("id", "userListButton").attr("class", "divButton").attr("title", "Hides or shows the userlist.");
	
	var fixUserListButton = $('<div>');
	fixUserListButton.html(' - Refresh userlist').attr("id", "fixUserlistButton").attr("class", "divButton").attr("title", "Refreshes the userlist.");
	
	var halloButton = $('<div>');
	halloButton.html('Set Halloween Avatar').attr("id", "setHalloAvatarButton").attr("class", "divButton").attr("title", "Sets your avatar to what you selected.");
	
	var halloSelect = $('<select>');
	halloSelect.attr("id", "halloSelect");
	
	var halloOption1 = $('<option>'); halloOption1.html("Male vampire").attr("value", "1");
	var halloOption2 = $('<option>'); halloOption2.html("Vampire girl").attr("value", "2");
	var halloOption3 = $('<option>'); halloOption3.html("Frankensteins monster").attr("value", "3");
	var halloOption4 = $('<option>'); halloOption4.html("Vampire lady").attr("value", "4");
	var halloOption5 = $('<option>'); halloOption5.html("Male skeleton").attr("value", "5");
	var halloOption6 = $('<option>'); halloOption6.html("Female skeleton").attr("value", "6");
	var halloOption7 = $('<option>'); halloOption7.html("Gray mummy").attr("value", "7");
	var halloOption8 = $('<option>'); halloOption8.html("Purple mummy").attr("value", "8");
	var halloOption9 = $('<option>'); halloOption9.html("Ghost").attr("value", "9");
	var halloOption10 = $('<option>'); halloOption10.html("Male wolf").attr("value", "10");
	var halloOption11 = $('<option>'); halloOption11.html("Pumpkin monster").attr("value", "11");
	var halloOption12 = $('<option>'); halloOption12.html("Female wolf").attr("value", "12");
	var halloOption13 = $('<option>'); halloOption13.html("Disco zombie").attr("value", "13");
	
	UI.html('').attr("id", "mubPlugUI").css("position", "absolute").css("left", UIPosition).css("font-family", "Calibri").css("top", 647).css("z-index", "8");
	
	var windowWidth = $(window).width();
	var settingsPositionLeft = windowWidth - 800;
	
	settingsWindow.css("left", settingsPositionLeft / 2 + "px");
	
	halloSelect.append(halloOption1).append(halloOption2).append(halloOption3).append(halloOption4).append(halloOption5).append(halloOption6).append(halloOption7).append(halloOption8).append(halloOption9).append(halloOption10).append(halloOption11).append(halloOption12).append(halloOption13);
	tableData1.append(halloSelect);
	tableData2.append(halloButton);
	tableData3.append(autoWootButton);
	tableData4.append(autoQueueButton);
	tableData5.append(historyAlertButton);
	tableData6.append(speakUpButton);
	tableData7.append(userListButton);
	tableData8.append(fixUserListButton);
	tableData9.append(hideVideoButton);
	tableData10.append(upcomingAlertsButton);
	tableData11.append(curateAlertsButton);
	tableRow1.append(tableData1).append(tableData2);
	tableRow2.append(tableData3).append(tableData4);
	tableRow3.append(tableData5).append(tableData6);
	tableRow4.append(tableData7).append(tableData8);
	tableRow5.append(tableData9).append(tableData10);
	tableRow6.append(tableData11);
	
	
	settingsWindowTable.append(tableRow1).append(tableRow2).append(tableRow3).append(tableRow4).append(tableRow5).append(tableRow6);
	
	UI.append(settingsButton);
	
	userListHeader.append(userListHeaderTitle);
	userList.append(userListHeader).append(usersPara).append(waitlistPara).append(userListDiv);
	
	$("body").append(UI).append(userList).css("font-family", "calibri");
	
	settingsWindowHeader.append(settingsWindowHeaderTitle).append(settingsWindowCloseButton);
	settingsWindow.append(settingsWindowHeader).append(settingsWindowTable);
	$("#overlay-container").append(settingsWindow);
	
	
}

initialize();

$("#setHalloAvatarButton").click(function(){
	var input, changed;
	input = $("#halloSelect").val();
		switch(input){
		case "1":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween01"]}' })
			break;
		case "2":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween02"]}' })
			break;
		case "3":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween03"]}' })
			break;
		case "4":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween04"]}' })
			break;
		case "5":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween05"]}' })
			break;
		case "6":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween06"]}' })
			break;
		case "7":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween07"]}' })
			break;
		case "8":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween08"]}' })
			break;
		case "9":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween09"]}' })
			break;
		case "10":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween10"]}' })
			break;
		case "11":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween11"]}' })
			break;
		case "12":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween12"]}' })
			break;
		case "13":
			$.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_avatar', contentType: 'application/json', data: '{"service":"user.set_avatar","body":["halloween13"]}' })
			break;
		default:
			alert("Error!" + input);
			break;
	}
})

var fullAccess = false;

// ------------------ AUTO WOOT ------------------

var myID = "50aeaf683e083e18fa2d187e";

saveStorage = function(key){
  localStorage.setItem(key, JSON.stringify(this));
}
loadStorage = function(key){
  JSON.parse(localStorage.getItem(key));
}

if(typeof localStorage.getItem("mubPlug") !== null){
	loadStorage();
}else{
	mubOptions = {};
	mubOptions.autoWoot = true;
	mubOptions.autoQueue = false;
	mubOptions.historyAlerts = true;
	mubOptions.speakingUp = false;
	mubOptions.userListShown = true;
	mubOptions.upcomingAlerts = true;
	mubOptions.curateAlerts = false;
	mubOptions.save = saveStorage(mubPlug);
	mubOptions.load = loadStorage(mubPlug);
}



$("#autoWootButton").click(function(){
	if(mubOptions.autoWoot == true){
		mubOptions.autoWoot = false;
		$(this).html(' - Auto woot');
	}else{
		mubOptions.autoWoot = true;
		$(this).html(' + Auto woot');
		$("#button-vote-positive").click();
	}
	return mubOptions.autoWoot;
});

$("#autoQueueButton").click(function(){
	if(mubOptions.autoQueue == true){
		mubOptions.autoQueue = false;
		$(this).html(' - Auto queue');
	}else{
		mubOptions.autoQueue = true;
		$(this).html(' + Auto queue');
		if(($("#button-dj-waitlist-join").css("display")) == "block"){
			$("#button-dj-waitlist-join").click();
		}
	}
	return mubOptions.autoQueue;
});

$("#speakUpButton").click(function(){
	if(mubOptions.speakingUp == true){
		mubOptions.speakingUp = false;
		$(this).html(" - Tell chat history alerts");
	}else{
		mubOptions.speakingUp = true;
		$(this).html(" + Tell chat history alerts");
	}
	return mubOptions.speakingUp;
})

$("#historyAlertButton").click(function(){
	if(mubOptions.historyAlerts == true){
		mubOptions.historyAlerts = false;
		$(this).html(" - History Alerts");
	}else{
		mubOptions.historyAlerts = true;
		$(this).html(" + History Alerts");
	}
	return mubOptions.historyAlerts;
})

function sendChatUpdate(text, color, textcolor, id, link, cursor, clickToDelete, cross){
	var chatUpdate, spanChatUpdate, crossImage;
	var crossHoverSrc = "http://i.imgur.com/y3886Cy.png";
	var crossSrc = "http://i.imgur.com/XT5fWnB.png";
	crossImage = $('<img>');
	chatUpdate = $('<div>');
	spanChatUpdate = $('<span>');
	chatUpdate.attr("class", "chat-update").css("text-align", "center").attr("id", "mubPlugChatUpdate");
	spanChatUpdate.attr("onLoad", "updateUserlist()").attr("class", "chat-text").css("text-align", "middle").css("align", "center").css("margin-left", "auto").css("margin-right", "auto");
	spanChatUpdate.html(text);
	crossImage.attr("src", crossSrc).attr("class", "chatUpdateCross").attr("align", "right").attr("onClick", "removeParent(this)").attr("onMouseOver", "this.src = '" + crossHoverSrc + "'").attr("onMouseOut", "this.src = '" + crossSrc + "'");
	if(color != ""){
		chatUpdate.css("background-color", color);
	}
	if(textcolor != ""){
		spanChatUpdate.css("color", textcolor);
	}else{
		spanChatUpdate.css("color", "black");
	}
	if(id != "") chatUpdate.attr("id", id);
	if(link != "") chatUpdate.attr("href", link);
	if(cursor != "") chatUpdate.css("cursor", cursor);
	chatUpdate.append(spanChatUpdate);
	if(clickToDelete != false){
		chatUpdate.attr("title", "Click this message to delete it").attr("onClick", "$(this).remove()");
		if(cursor == null) chatUpdate.css("cursor", "pointer");
	}else if(cross != false){
		chatUpdate.append(crossImage);
	}
	$("#chat-messages").append(chatUpdate);
	$("#chat-message").scrollTop(99999999);
}

API.on(API.HISTORY_UPDATE, checkStuff);
API.on(API.USER_JOIN, updateUserlist);
API.on(API.USER_LEAVE, updateUserlist);
API.on(API.VOTE_UPDATE, colorUserlist);
API.on(API.CURATE_UPDATE, assignCurateIcon);

function updateUserlist(){
	var users = API.getUsers();
	$("#userListDiv").html("");
	$("#usersPara").html( users.length + " users in room");
	for(var usersWritten = 0; usersWritten < users.length; usersWritten++){
		var userPara = $('<p>'); var userParaSpan = $('<span>'); var userParaImage = $('<img>'); var userParaName = $('<span>'); var userCurateImage = $('<img>');
		userParaName.html(users[usersWritten].username).attr("id", users[usersWritten].username + "Entry").attr("class", "userParaName").attr("onClick", "mentionName(this)");
		userPara.attr("class", "userListParagraph");
		if(users[usersWritten].permission == 1){
			userParaImage.attr("src", "http://i.imgur.com/g0KaaZK.png").attr("class", "imageSpan");
			userParaSpan.append(userParaImage);
		}
		if(users[usersWritten].permission >= 2 && users[usersWritten].permission < 4){
			userParaImage.attr("src", "http://i.imgur.com/bW75HNL.png").attr("class", "imageSpan");
			userParaSpan.append(userParaImage);
		}
		if(users[usersWritten].permission >= 4 && users[usersWritten].permission < 9){
			userParaImage.attr("src", "http://i.imgur.com/7pydYt5.png").attr("class", "imageSpan"); 
			userParaSpan.append(userParaImage);
		}
		if(users[usersWritten].permission == 9){
			userParaImage.attr("src", "http://i.imgur.com/gEMSNwG.png").attr("class", "imageSpan"); 
			userParaSpan.append(userParaImage);
		}
		if(users[usersWritten].permission > 9){
			userParaImage.attr("src", "http://i.imgur.com/KkElZ14.png").attr("class", "imageSpan"); 
			userParaSpan.append(userParaImage);
		}
		if(users[usersWritten].curated != false){
			userCurateImage.attr("src", "http://i.imgur.com/mYOM9qa.png").attr("class", "imageSpan").attr("id", "curateImage");
			userParaSpan.append(userCurateImage);
		}else{
			userCurateImage.remove();
		}
		userParaSpan.attr("id", users[usersWritten].username + "Span").append(userParaName);
		userPara.append(userParaSpan);
		$("#userListDiv").append(userPara);
	}
	colorUserlist();
	updateWaitlistPara();
}

function colorUserlist(obj){
	var users = API.getUsers();
	for(var usersWritten = 0; usersWritten < users.length; usersWritten++){
		var ID = users[usersWritten].username + "Entry";
		var color;
		switch(users[usersWritten].vote){
			case 1:
				color = "#5bd708";
				break;
			case 0:
				color = "white";
				break;
			case -1:
				color = "red";
				break;
		}
		var object = document.getElementById(ID);
		$(object).css("color", color);
	}
}

function assignCurateIcon(obj){
	if(mubOptions.curateAlerts) sendChatUpdate(obj.user.username + ' Just curated: "' + API.getMedia().title + '"', "", "yellow");
	updateUserlist();
}

function checkStuff(obj){
	var currentlyPlaying, history, caught, length;
	if(autoWoot){
		setTimeout(function(){
			$("#button-vote-positive").click();
		}, 5000);
	}
	if(autoQueue && $("#button-dj-waitlist-join").css("display") == "block"){
		$("#button-dj-waitlist-join").click();
	}
	
	if(testHistory() > 1 && mubOptions.historyAlerts){
		sendChatUpdate("This song is still in the history!", "red", "white");
		if(mubOptions.speakingUp){
			API.sendChat("This song is still in the history!");
		}
	}
	
	if(isInHistory() && mubOptions.upcomingAlerts) sendChatUpdate("The song you are about to play is in the history!", "", "red");
	updateUserlist();
	updateWaitlistPara();
}

API.on(API.WAIT_LIST_UPDATE, updateWaitlistPara);

function updateWaitlistPara(){
	var users = API.getWaitList(); var userID = API.getUser().id; var onWaitlist = false; var waitlistPosition;
	for(var i = 0; i < users.length; i++){
		if(userID === users[i].id){
			onWaitlist = true;
			waitlistPosition = i + 1;
		}
	}
	
	if(onWaitlist){
		$("#waitlistPara").html("Waitlist: " + waitlistPosition + " / " + users.length);
	}else{
		$("#waitlistPara").html("Waitlist: " + users.length);
	}
}

function testHistory(){
	currentlyPlaying = API.getMedia();
	history = API.getHistory();
	caught = 0;
	length = 0;
	for( ; length < history.length; length++){
		if(currentlyPlaying.cid === history[length].media.cid){
			caught++;
		}
	}
	
	return caught;
}

function isInHistory(video){
	var history, caught, length, nextMedia;
	nextMedia = API.getNextMedia();
	history = API.getHistory();
	caught = 0; length = 0;
	if(video != "undefined" && video != "" && video != null){
		for( ; length < history.length; length++){
			if(video.cid == history[length].media.cid){
				caught++;
			}
		}
	}else{
		caught = 0; length = 0;
		for( ; length < history.length; length++){
			if(nextMedia.media.cid == history[length].media.cid){
				caught++;
			}
		}
	}
	
	var DJs = API.getDJs();
	var user = API.getUser();
	if(DJs[0].id == user.id){
		caught--;
	}
	
	if(caught>=1){
		return true;
	}else{
		return false;
	}
}

$("#settingsButton").click(function(){
	$("#overlay-container").fadeIn(400, function(){
		$("#overlay-container").css("display", "block");
	});
	$("#settingsWindow").fadeIn(400, function(){
		$("#settingsWindow").css("display", "block");
	});
})

$("#settingsWindowCloseButton").click(function(){
	$("#overlay-container").fadeOut(600, function(){
		$("#overlay-container").css("display", "none");
	});
	$("#settingsWindow").fadeOut(600, function(){
		$("#settingsWindow").css("display", "none");
	});
})

function mentionName(object){
	var name = $(object).html();
	var currentText = $("#chat-input-field").val();
	$("#chat-input-field").val("@" + name + " " + currentText).focus();
}

function removeParent(object){
	$(object).parent().remove();
}

$("#userListButton").click(function(){
	if(mubOptions.userListShown){
		mubOptions.userListShown = false;
		$(this).html(" - Show user list");
		$("#mubPlug-userlist").animate({
			left: -300
		}, 800, function(){
			$("#mubPlug-userlist").css("display", "none");
		});
	}else{
		mubOptions.userListShown = true;
		$("#mubPlug-userlist").css("display", "block");
		$(this).html(" + Show user list");
		$("#mubPlug-userlist").animate({
			left: 0
		}, 800, function(){
		});
	}
})

$("#hideVideoButton").click(function(){
	var visibility = $("#playback-container").css("display");
	if(visibility == "none"){
		$("#playback-container").fadeIn(600, function(){
			$("#playback-container").css("display", "block");
		});
		$(this).html(" - Hidden video");
	}else{
		$("#playback-container").fadeOut(600, function(){
			$("#playback-container").css("display", "none");
		});
		$(this).html(" + Hidden video");
	}
})

$("#fixUserlistButton").click(function(){
	updateUserlist();
})

$("#upcomingAlertsButton").click(function(){
	if(mubOptions.upcomingAlerts){
		mubOptions.upcomingAlerts = false;
		$(this).html(" - Upcoming alerts");
	}else{
		mubOptions.upcomingAlerts = true;
		$(this).html(" + Upcoming alerts");
	}
})

$("#curateAlertsButton").click(function(){
	if(mubOptions.curateAlerts){
		mubOptions.curateAlerts = false;
		$(this).html(" - Curate messages");
	}else{
		mubOptions.curateAlerts = true;
		$(this).html(" + Curate messages");
	}
})

// ------------------ CHAT COMMANDS ------------------

API.on(API.CHAT_COMMAND, chatCommand);

function chatCommand(value){
	switch(value){
		case "/history":
		case "/h":
			if(testHistory()>=2){
				if(API.getUser().permission < 2){
					sendChatUpdate("This song is in the history, but you you have to be at least a bouncer to skip it!", "", "red");
				}else{
					API.moderateForceSkip();
					API.sendChat("Song in history.");
				}
			}else{
				sendChatUpdate("This song is not in the history!", "", "red");
			}
			break;
			
		case "/skip":
		case "/s":
			if(API.getUser().permission < 2){
				sendChatUpdate("You are not high enough rank to do this!", "", "red");
			}else{
				API.moderateForceSkip();
			}
			break;
			
		case "/commands":
		case "/cmd":
			sendChatUpdate("Click to see available commands", "", "yellow", "commandsLink", "", "pointer");
			break;
			
		case "/userlist":
		case "/u":
			$("#userListButton").click();
			break;
			
		case "/fix userlist":
		case "/uu":
			$("fixUserListButton").click();
			break;
		
		case "/autowoot":
		case "/auto woot":
		case "/aw":
			$("#autoWootButton").click();
			break;
			break;
			
		case "/autoqueue":
		case "/autojoin":
		case "/auto join":
		case "/auto queue":
		case "/aq":
			$("#autoQueueButton").click();
			break;
		
		case "/history alerts":
		case "/history alert":
		case "/historyalerts":
		case "/historyalert":
		case "/ha":
			$("#historyAlertButton").click();
			break;
			
		case "/sha":
		case "/share history alerts":
		case "/sharehistoryalerts":
		case "/sharehistoryalert":
		case "/share history alert":
			$("speakUpButton").click();
			break;
			
		case "/hide":
		case "/hv":
		case "/hide video":
		case "/hidevideo":
			$("#hideVideoButton").click();
			break;
			
		case "/not amused":
		case "/noamuse":
		case "/nah":
			API.sendChat("σ.σ");
			break;
			
		case "/settings":
		case "/setting":
		case "/set":
			$("#overlay-container").fadeIn(400, function(){
				$("#overlay-container").css("display", "block");
			});
			$("#settingsWindow").fadeIn(400, function(){
				$("#settingsWindow").css("display", "block");
			});
			break;
			
		case "/my song":
		case "/mysong":
		case "/ms":
			if(isInHistory() == true){
				sendChatUpdate("The song you are about to play is in the history!", "", "red");
			}else{
				sendChatUpdate("The song you are about to play is not in the history!", "", customGreen);
			}
			break;
			
		case "/boo":
			$("#button-vote-negative").click();
			break;
			
		case "/curate messages":
		case "/curatemessages":
		case "/cm":
			$("#curateAlertsButton").click();
			break;
			
		case "/rsb":
			$("#settingsButton").remove();
			break;
		
		default:
			sendChatUpdate("This was not regocnized as a command!", "", "red");
			break;
	}
}

API.on(API.CHAT, recieveMessage);
function recieveMessage(data){
	$("#chat-messages").scrollTop(99999999);
	if(data.fromID == myID){
		switch(data.message){
			case "!mubPlugPeepz":
				API.sendChat("I'm running mubPlug version 1.889");
				break;
		}
	}
}

updateUserlist();
$("#playback-container").css("display", "block");
setTimeout(function(){updateUserlist();}, 20000);

var windowHeight = $(window).height();
windowHeight = windowHeight * 0.99;
$("#userListDiv").css("height", windowHeight - 97 + "px");
$("#mubPlug-userlist").css("height", windowHeight + "px");

sendChatUpdate("Running mubPlug version 1.890", "green", "black");
sendChatUpdate("Click to see available commands", "", "yellow", "commandsLink", "", "pointer", false, false);

$("#commandsLink").click(function(){
	window.open("http://dl.dropboxusercontent.com/s/py9l1k5zsjyjpe7/commands.txt", '_blank');
	window.focus();
});

var user = API.getUser();
switch(user.id){
	case "50aeb07e96fba52c3ca04ca8":
		sendChatUpdate("SUP DERP!?!", "", "pink", "", "", "pointer", true, false);
		break;
		
	case "50aeaf683e083e18fa2d187e":
		sendChatUpdate("Hallo mastar!!", "", "pink", "", "", "pointer", true, false);
		break;
}






