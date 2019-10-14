create class Human {
	constructor(milk, sugar){
		this.milk = milk;
		this.sugar = sugar;
	}


}

var willy = new Human("William Loosman", {age: 26, IQ : "over 2000"});
willy.makeCoffee({ milk: 0.2, sugar: 1});
willy.makeCoffee({milk : 0, sugar : 0});

var willemijn = new Human("Willemijn ???", {null : null});
willemijn.takeCarFrom(willy);



