const div = document.getElementsByClassName('col')

let chance = 0
function play() {
    if (chance % 2 === 0) {
        return "X";
    }
    else {
        return "O"
    }
}
const popUp = document.querySelector('.popUp')

function correctvalue(value) {
    return value === "X"
}
function correctvalue2(value) {
    return value === "O"
}

function win(player) {
    popUp.style.display = 'block'
    console.log(chance, "inside win")
    document.querySelector('.popUp h1').textContent = `${player} won`;
    clearInterval(id)
}
function tie() {
    popUp.style.display = 'block'
    document.querySelector('.popUp h1').textContent = "Tie";
}

const playAgain = document.getElementById('playAgain')
playAgain.addEventListener('click', clear)
function clear() {
    for (let element of div) {
        element.querySelectorAll('h1')[0].textContent = ''
    }
    popUp.style.display = 'none'
    chance = 0
    array = []
    row1 = {}
    row2 = {}
    row3 = {}
    mainDiagonal = []
    diagonal = []
    column1 = []
    column2 = []
    column3 = []

    id = setInterval(() => {
        if (chance === 9) {
            tie()
            clearInterval(id)
        }
    }, 1)


}
let row1 = {}
let row2 = {}
let row3 = {}
let mainDiagonal = []
let diagonal = []
let column1 = []
let column2 = []
let column3 = []
let array = []
for (let element of div) {
    element.addEventListener('click', (e) => {

        if (e.target.querySelectorAll('h1')[0].textContent === '') {
            e.target.querySelectorAll('h1')[0].textContent = play()
            e.target.id[1] == 0 ? row1[e.target.id] = e.target.textContent : ''
            e.target.id[1] == 1 ? row2[e.target.id] = e.target.textContent : ''
            e.target.id[1] == 2 ? row3[e.target.id] = e.target.textContent : ''
            array = [row1, row2, row3]

            for (let i = 0; i <= 2; i++) {
                let rownew = Object.values(array[i]);
                if (rownew.length == 0) {
                } else if (rownew.length >= 3) {

                    if (rownew.every(correctvalue)) {
                        win(rownew[0]);

                    } else if (rownew.every(correctvalue2)) {
                        win(rownew[0]);
                    }

                }
            }
            mainDiagonal = [array[0]['a00'], array[1]['a11'], array[2]['a22']]
            if (mainDiagonal.length === 3) {
                if (mainDiagonal.every(correctvalue)) {
                    win(mainDiagonal[0])

                } else if (mainDiagonal.every(correctvalue2)) {
                    win(mainDiagonal[0])
                }
            }
            diagonal = [array[0]['a02'], array[1]['a11'], array[2]['a20']]
            if (diagonal.length === 3) {
                if (diagonal.every(correctvalue)) {
                    win(diagonal[0])
                } else if (diagonal.every(correctvalue2)) {
                    win(diagonal[0])
                }
            }
            column1 = [array[0]['a00'], array[1]['a10'], array[2]['a20']]
            if (column1.length === 3) {
                if (column1.every(correctvalue)) {
                    win(column1[0])
                } else if (column1.every(correctvalue2)) {
                    win(column1[0])
                }
            }
            column2 = [array[0]['a01'], array[1]['a11'], array[2]['a21']]
            if (column2.length === 3) {
                if (column2.every(correctvalue)) {
                    win(column2[0])
                } else if (column2.every(correctvalue2)) {
                    win(column2[0])
                }
            }
            column3 = [array[0]['a02'], array[1]['a12'], array[2]['a22']]
            if (column3.length === 3) {
                if (column3.every(correctvalue)) {
                    win(column3[0])
                } else if (column3.every(correctvalue2)) {
                    win(column3[0])
                }
            }
            chance++
        }
    })
}

let id = setInterval(() => {
    if (chance === 9) {
        tie()
        clearInterval(id)
    }
}, 1)

