input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.pause(5000)
    led.stopAnimation()
})
let step = 0
let index = 0
basic.forever(function () {
    basic.showNumber(step)
    music.playMelody("- C5 - F - G - C ", 120)
})
