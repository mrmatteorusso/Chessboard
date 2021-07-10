const space = ' ';
const hashtag = '#';
let box1 = '';
let box2 = '';
const num = prompt('How many characters in a line?')
for(let i = 0; i < Number(num); i++) {
    if ((i+2)%2  == 0) {
        box1 += space
    } else {
        box1 += hashtag
    }
}
for(let i = 0; i < Number(num); i++) {
    if ((i+2)%2  == 0) {
        box2 += hashtag
    } else {
        box2 += space
    }
}

let newBox1 = box1 + '\n'
let newBox2 = box2 + '\n'

for(let i = 0; i < Number(num); i++) {
if ((i+2)%2  == 0) {
    console.log(newBox1)
} else {
    console.log(newBox2)
}
}
