const person={
    name: 'Damodhar',
    age: 30,
    greet: function(){
        console.log('Hi, I am '+this.name);
    },
   mycars : {
        car1: 'BMW',
        car2: 'Audi',
        car3: 'Mercedes',
        car4: 'Volvo',
        car5: 'Toyota Supra'
    }
};

console.log(JSON.stringify(person));