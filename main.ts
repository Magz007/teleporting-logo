input.onGesture(Gesture.Shake, function () {
    basic.showString("BHM")
    basic.clearScreen()
    radio.sendString("BHM")
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showString("BHM")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            . # # # #
            # # . . #
            # . . # .
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
radio.setGroup(23)
