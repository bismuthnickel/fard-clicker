const createImageElement = function(src) {
	var self = document.createElement("img");
	self.setAttribute("src",src);
	return self;
}

const linebreak = document.createElement("br");

let clickpoints = 1;
let automationpoints = 0;
let scorepoints = 0;
	
let play = document.getElementById("play");

let game = document.getElementById("content");

let fard = createImageElement("static/a.png");

let scoremonitor = document.createElement("h1");
scoremonitor.innerText = scorepoints;

let sneakysnitch = new Audio("static/b.mp3");

let ten = new Audio("static/c.wav");

let fifty = new Audio("static/d.wav");

let seventyfive = new Audio("static/e.wav");

let onehundred = new Audio("static/f.wav");

let upgrades = document.createElement("div");
let automation = document.createElement("button");
automation.innerHTML = "+1 beans eating man - 10 fards";
let morebeans = document.createElement("button");
morebeans.innerHTML = "more beans - 50 fards";
upgrades.appendChild(automation);
upgrades.appendChild(linebreak);
upgrades.appendChild(morebeans);

let stats = document.createElement("div")
let cps = document.createElement("p")
let cmp = document.createElement("p")
let fps = document.createElement("span")
let fmp = document.createElement("span")
cps.innerHTML = "Fards per second: "
cps.appendChild(fps)
cmp.innerHTML = "Fards multiplier: "
cmp.appendChild(fmp)
stats.appendChild(cps)
stats.appendChild(cmp)

let tip = document.createElement("p");

let update = () => {
	fps.innerText = automationpoints;
	fmp.innerText = clickpoints;
	scoremonitor.innerText = Math.round(scorepoints * 10)/10;
	if (scorepoints > 9) {
		automation.style.display = "initial";
	} else {
		automation.style.display = "none";
	}
	if (scorepoints > 49) {
		morebeans.style.display = "initial";
	} else {
		morebeans.style.display = "none";
	}
	switch (true) {
		case scorepoints < 25:
			tip.innerText = "Your fards are not very stinky big fard";
			break;
		case scorepoints < 50:
			tip.innerText = "Your dog hates your fards";
			break;
		case scorepoints < 100:
			tip.innerText = "Your fards are hated by your whole family";
			break;
		case scorepoints < 250:
			tip.innerText = "Your fards are hated by your whole town";
			break;
		case scorepoints < 1000:
			tip.innerText = "Your fards are so stinky that they are killing peple";
			break;
		case scorepoints < 5000:
			tip.innerText = "Your fards are the stinkiest in the world";
			break;
		case scorepoints < 12500:
			tip.innerText = "Your fards are considered a form of gas weaponry";
			break;
		case scorepoints < 50000:
			tip.innerText = "Your fards have caused the world to devolve into chaos. Are you happy with yourself?";
			break;
		case 50000 < scorepoints:
			tip.innerText = "There is nobody left to write these messages. You've killed everyone off.";
			break;
	}
}

let automate = () => {
    scorepoints = scorepoints + (0.1 * (clickpoints * automationpoints));
	update();
    setTimeout(automate,100);
}

play.onclick = () => {

	automate();
	
	play.style.display = "none";

	game.appendChild(fard);
	game.appendChild(scoremonitor);
	update();
	game.appendChild(upgrades);
	game.appendChild(linebreak);
	game.appendChild(stats);
	game.appendChild(linebreak);
	game.appendChild(tip);

	sneakysnitch.play();

	fard.onclick = () => {
		scorepoints = scorepoints + clickpoints;
		update();
	}

	automation.onclick = () => {
		automationpoints = automationpoints + 1;
		scorepoints = scorepoints - 10;
	}

	morebeans.onclick = () => {
		clickpoints = clickpoints + 1;
		scorepoints = scorepoints - 50;
	}
}