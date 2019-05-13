class AGreatClass {
  constructor(greatNumber) {
    this.greatNumber = greatNumber;
  }

  returnGreatThings() {
    return this.greatNumber;
  }
}

class AnotherGreatClass extends AGreatClass
{
  constructor(greatNumnber,greatWord) {
    super(greatNumnber);
    this.greatWord = greatWord;

  }

  returnGreatThings() {
    let greatNumber = super.returnGreatThings();

    return [greatNumber, this.greatWord]
  }
}

const aGreatObject = new AnotherGreatClass(42, 'adventure');
console.log(
  aGreatObject.returnGreatThings()
);



// spread operator

let printThreeThings = function (thing1, thing2, thing3) {
  console.log(thing1, thing2, thing3)
}

let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];
printThreeThings(...yummyThings);

let greatThings = ['swimming', 'sunsets', ...yummyThings];
let anotherGreatThings = [...greatThings];
anotherGreatThings.push('summer');
console.log(greatThings);
console.log(anotherGreatThings);

const favoriteFood = 'gelato';
const iLoveFood = `The year is ${(new Date()).getFullYear()} and my favorite food is ${favoriteFood}`;
console.log(iLoveFood);

