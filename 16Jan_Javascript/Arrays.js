const fruits=['apple','banana','mango','orange','grapes','pineapple','kiwi','papaya','watermelon','strawberry'];
// console.log(fruits[6]);
// console.log(fruits[0]);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits.forEach(function(fruit){
    console.log(fruit);
});


fruits.push('pear');
// console.log(fruits);


// console.log(Array.isArray(fruits));

const person={
    name:'Damodhar',
    age:21,
    hobbies:['coding','reading','travelling'],
    cars : [
        {name:'BMW',models : ['XM','M4','Z4']},
        {name:'Audi',models : ['A4','A6','A8']},
        {name:'Mercedes',models : ['G','E','S']}
    ]
}

// console.log(person);

for(let i=0; i<person.hobbies.length;i++){
    console.log(person.hobbies[i]);
}

for(let i=0; i<person.cars.length;i++)
    {
    console.log(person.cars[i].name);
    for(let j=0;j<person.cars[i].models.length;j++)
    {
        console.log(person.cars[i].models[j]);
    }
}



// console.log(fruits.toString());

// console.log(fruits.at(0));

// console.log(fruits.join("-"))

// console.log(fruits.shift());

// console.log(fruits.unshift("Lemon"));
// console.log(fruits.toString())


// const games=["cricket" , "Hockey", "Golf" ,"Chess"];

// console.log(games.concat(fruits));


// console.log(fruits.copyWithin(2,0,8));


// const a=[[2,3],[3,4]];
// console.log(a.flat())



// console.log(fruits.splice(0,3,"Guava","Dragon Fruit"));

// console.log(fruits.slice(3));
// console.log(fruits.toString())

