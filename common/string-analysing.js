const path = "/user/folder/index.html"
const path_2 = "/user/folder/style.css"

function isHtml(path) {
    //применим метод возвращения подстроки с конца
    let format = path.slice(-5);
    //проверим на соответствие нужного формата и вернем значение
    if (format === '.html') {
        return true
    } else {
        return false
    }
}

console.log(isHtml(path))