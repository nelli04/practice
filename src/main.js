const name = ['bob', 'alex', 'car']
console.log(name.sort())

const name1 = ['a', 'bC', '!фа']
console.log(name1.sort())

console.log(name.sort() === name) //true

const num = [1, 5, 2, 8, 1000, -2]
const compereFunc = (q, b) => {
    if (q > b) {
        return 999
    } else {
        return -10
    }
}

const compereFun = (a, b) => a - b // по возрастанию
const compereFu = (a, b) => b - a // по убыванию

console.log(num.sort(compereFunc))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const sortStudents = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else {
        return -1
    }
}
//console.log(students.sort(sortStudents))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

// bubble sort

const nums = [1, 20, 4, 3, 10, 3.4, 110]

    for (let j = 0; j < nums.length - 1 - j; j++) { // нормально
        let sorted = true
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                sorted = false;
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]] // дуструктуризация
            }
        }
        if (sorted) {
            break;
        }
    }
console.log(nums)

/*for (let j = 0; j < nums.length - 1 - j; j++) { - n2

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] > nums[i + 1]) {

            let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp
        }
    }

}*/

//https://youtu.be/lvts84Qfo8o
//https://www.sortvisualizer.com/












/*for (let i = []; i.length < 3;
     i.push(1)
) {
    setTimeout(() => console.log(i), i.length * 1000)
}*/


//-------------------------------------------------------------------------------------------------------------------------------------------
/*const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const onClickHandler1 = (e) => {
    alert('small')
}
const onClickHandler2 = (e) => {
   alert('medium')
}
const onClickHandler3 = (e) => {
    alert('big')
    console.log(e.currentTarget)
}
//onClickHandler({...})

sm.onclick = onClickHandler1
sm.onclick = null

sm.addEventListener('click', onClickHandler1)
md.addEventListener('click', onClickHandler2)
bg.addEventListener('click', onClickHandler3)*/

// addEventListener с помощью него можно нацепить несколько обработчиков событий
// addEventListener позволяет рассматривать как погружение и всплытие
// this ссылка на тот объект который вызываем
// делегирование событий
// Дефолтное поведение form and href
// семантическая верстка
//эндпоинт