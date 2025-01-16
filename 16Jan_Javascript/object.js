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
