function ready(selector, whenReady) {
  const element = document.querySelector(selector);
  if (element) {
    document.addEventListener('DOMContentLoaded', () => {
      return whenReady();
    });
  }
}

// factory function
const anotherPerson = (firstName, lastName) => {
  this.firstName = firstName;
  this.lastName = lastName;

  return {
    getFullName: () => {
      console.log(this.firstName + ' ' + this.lastName);
    },
  };
};

// oloo object
const person = {
  init: (firstName, lastName) => {
    this.firstName = firstName;
    this.lastName = lastName;
  },
  getFullName: () => {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

ready('#container', () => {
  const person1 = Object.create(person);

  person1.init('Mikael', 'Eriksson');

  person1.getFullName();

  person1.greeting = () => {
    return `My name is ${this.firstName} ${this.lastName}`;
  };

  console.log(person1.greeting());

  const person2 = Object.create(anotherPerson('Micke', 'Eriksson'));

  person2.getFullName();
});
