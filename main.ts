input.onButtonPressed(Button.A, function () {
    count = count - 1
})
input.onButtonPressed(Button.B, function () {
    count = count / 1
})
let count = 0
count = 0
basic.forever(function () {
    basic.showNumber(count)
})
