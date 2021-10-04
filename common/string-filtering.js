const string = "Ты кто такой? Давай до свидания!";
// гласные (а, е, ё, и, о, у, ы, э, ю, я)

// создаем функцию
function getVowels(str) {
    //преобразуем строку в массив
    let array = str.split('');
    //создаем новый массив, в который будем добалять гласные
    let newArray = [];
    //перебираем наш массив с условием на соответствие гласным буквам
    array.forEach(elem => {
        if (elem == 'а' || elem == 'е' || elem == 'ё' || elem == 'и' || elem == 'о' || elem == 'у' || elem == 'ы' || elem == 'э' || elem == 'ю' || elem == 'я') {
            //отфильтрованные элементы добавляем в новый массив
            newArray.push(elem)
        };
    });
    //преобразуем массив с гласными в строку с - между элементами
    let newString = newArray.join('-')
    //возвращаем
    return newString;
}

console.log(getVowels(string))

