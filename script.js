function print(...args) {
    console.log(args);
}
function print(a) {
    console.log(a);
}

function isSimple(a) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) return false;
    }
    return true;
}



function isEven(a) {
    return a % 2 == 0;
}


function maxNumber(...args) {
    let max = 0;
    console.log("maxLength");
    for (el of args) {
        console.log(el);
        if (el > max) max = el;
    }
    return max;
}



function listSimple(n) {
    let arr = new Array();
    let count = 0;
    console.log("count");
    for (let i = 2; i <= n; i++) {
        if (isSimple(i)) arr[count++] = i;
    }
    return arr;
}


function findFactorial(n) {
    if (n == 1) return 1;
    return n * findFactorial(n - 1);
}



breakWhile: while (true) {
    let taskNumber = +prompt("Выберите номер домашнего задания, 0 для выхода");
    switch (taskNumber) {

        case 1:
            print("Задание 1");
            let number1 = +prompt("Введите число для проверки является ли число простым");
            print(`Число ${number1} ${isSimple(number1) ? "является простым" : "не является простым"}`);
            break;
        case 2:
            print("Задание 2");
            let number2 = +prompt("Введите число для проверки является ли число четным");
            print(`Число ${number2} ${isEven(number2) ? "является четным" : "является нечетным"}`);
            break;
        case 3:
            print("Задание 3");
            //let arr1=prompt("Введите числа для поиска наибольшего");
            let arr1 = [1, 2, 3, 5, 7, 400];
            print(`Максимальное число равно ${maxNumber(arr1)}`);
            break;
        case 4:
            print("Задание 4");
            let n = prompt("Введите число n для создания списка простыхь чисел");
            print(listSimple(n));
            break;
        case 5:
            print("Задание 5");
            let f = prompt("Введите число для поиска его факториала");
            print(`Факториал числа ${f} равен ${findFactorial(f)}`);
            break;
        case 6:
            while (true) {
                let number4 = prompt("Введите число которое больше 100");
                if (number4 > 100) { print("Число больше 100"); break; }
                else {
                    print("Число меньше или ровно 100");
                }
            }
        case 0:
            break breakWhile;
        default:
            print("Неверный ввод");
            break;

    }
}

