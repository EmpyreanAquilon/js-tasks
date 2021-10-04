//генерируем массив с числами
// const array = []
// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random() * 100))
// }
// console.log(array)
//подставляем полученные значения
const mixedArray = [96, 20, 82, 78, 81, 9, 13, 72, 98, 45, 58, 95, 24, 15, 87, 45, 73, 50, 52, 53];

//используем метод filter с функцией, в которой проверяется элемент массива на четность, в верном случае он возвращается и добавляется в новый массив
const newArray = mixedArray.filter(number => {
    if (!(number % 2)) {
        return true
    }
})
console.log(newArray)

