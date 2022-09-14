input.onButtonPressed(Button.A, function () {
    count = count * 2
})
input.onButtonPressed(Button.B, function () {
    count = count + 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
})
let count = 0
count = 2
