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