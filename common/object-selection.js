const turtles = [
    {"name": "Leonardo", "skill": 111},
    {"name": "Raphael", "skill": 222},
    {"name": "Donatello", "skill": 333},
    {"name": "Michelangelo", "skill": 444}
]
//создаем функцию
function getWorthyTurtles(array) {
    //создаем новый массив, который будет содержать имена скилловых черепашек
    let newArray = [];
    //перебираем исходный массив
    array.forEach(element => {
        //добавляем условие для отбора по нужному полю
        if (element.skill > 250) {
            //поле name отобранных объектов добавляем в созданный массив
            newArray.push(element.name)
        }
    });
    //возвращаем новый массив
    return newArray
}
console.log(getWorthyTurtles(turtles))