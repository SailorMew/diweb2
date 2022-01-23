
function zero(i) {
    let type = typeof (i);
    if (type == 'number') {
        alert('This is number = ' + i)
    } else if (type == 'string') {
        alert('This is string \'' + i + '\'')
    } else if (type == 'undefined') {
        alert('This is undefined')
    } else {
        alert('Unknown type')
    }
}

function Show(x) {
    type(x);
    document.getElementById('1').innerText = "Значение = " + x;
}


function first() {
    var zodiac = prompt('Введите знак зодиака: ', '');

    switch (zodiac.toLowerCase().trim()) {
        case 'козерог':
            alert("Ваш знак Козерог");
            break;

        case 'рыба':
            alert("Ваш знак Рыбы");
            break;

        case 'водолей':
            alert("Ваш знак Водолей");
            
            break;
        
        case 'овен':
            alert("Ваш знак Овен");
                
            break;

         case 'телец':
            alert("Ваш знак Телец");

            break;
        case 'близнецы':
            alert("Ваш знак Близнецы");
                
            break;
        case 'рак':
            alert("Ваш знак Рак");
                    
            break;

        case 'лев':
            alert("Ваш знак ЛЕВ");
            break;

        case 'весы':
            alert("Ваш знак Весы");
                
            break;
        case 'скорпион':
            alert("Ваш знак Скорпион");
                    
            break;
        case 'дева':
            alert("Ваш знак Дева");
                
            break;
        case 'стрелец':
            alert("Ваш знак Стрелец");
                    
            break;

        default:
            alert("Знак не найден");
            break;
    }
}

function second() {
    let forStr = '';
    let whileStr = '';
    let doWhileStr = '';

    let i = 1;
    while (i <= 40) {
        whileStr += i + ' ';
        i++;
    }

    let j = 1;
    do {
        doWhileStr += j + ' ';
        j++;
    } while (j <= 40);

    for (let i = 1; i <= 40; i++) {
        forStr += i + ' ';
    }

    let result = "For: " + forStr + "\n" +
        "While: " + whileStr + "\n" +
        "DoWhile: " + doWhileStr;
    alert(result);
}

function third() {
    while (true) {
        alert('');
    }
}

function fourth() {
    let isNotCorrect = true;
    while (isNotCorrect) {
        let value = prompt("Введите число: ", '').trim();
        let condition = (value != null) && (!isNaN(value)) && (value > 5);
        if (condition) {
            alert("Ура, молодец!");
            isNotCorrect = false;
        } else {
            alert("Нет - попробуйте еще");
        }
    }
}

function fifth() {
    let result = '';
    for (let i = 8; i <= 20; i = i + 2) {
        result += i + ' ';
    }
    alert(result);
}

function sixth() {
    let result = '';
    for (let i = 1; i <= 7; i = i + 2) {
        if (i != 5)
            result += i + ' ';
    }
    alert(result);
}