export class Human {
	
	name;
	options;

	constructor(name, options){
		this.name = name;
		this.options = options;
	}

}

var willy = new Human("William Loosman", {age: 26, IQ : "over 2000"});
willy.makeCoffee({ milk: 0.2, sugar: 1});
willy.makeCoffee({milk : 0, sugar : 0});

var willemijn = new Human("Willemijn ???", {age : 18});
willemijn.takeCarFrom(willy);



