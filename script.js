function turnColorRed() {
    document.body.style.backgroundColor = 'red';
}
function turnColorBlue() {
    document.body.style.backgroundColor = 'blue';
}
const blackbuttton = document.getElementById('coloRchange');
blackbuttton.onclick = makeBlack;
function makeBlack() {
    document.body.style.backgroundColor = 'black';
}
const my = document.getElementById('yellow');
my.onclick = yL;
function yL() {
    document.body.style.backgroundColor = 'yellow'
}
const shortcut = document.getElementById('short');
shortcut.addEventListener('click', function () {
    document.body.style.backgroundColor = 'grey'
})
document.getElementById('shotend').addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'
})

document.getElementById('submit').addEventListener('click', function () {

    const commentinput = document.getElementById('YourFeedbacks');
    const feedback = commentinput.value;

    const p = document.createElement('p');
    p.innerText = feedback;

    const parents = document.getElementById('comnt');
    parents.appendChild(p)
    commentinput.value = '';

})
document.getElementById('deleteConfirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
 })
 document.getElementById('DeleteButton').addEventListener('click', function () {
    document.getElementById('comnt').style.display = 'none'
})
 document.getElementById('deleteConfirm').addEventListener('keydown', function () {
    document.getElementById('comnt').style.display = 'none'
})
document.getElementById('deleteConfirm').addEventListener('keyup', function (event) {
    const Typed = document.getElementById('deleteConfirm');
    const Action = document.getElementById('DeleteButton');

    if (event.target.value == 'Delete') {
        Action.removeAttribute('disabled', true)

    } else {
        Action.setAttribute('disabled', true)
    }
})


document.getElementById('DeleteButton')
