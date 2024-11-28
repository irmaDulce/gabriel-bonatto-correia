input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Aaaa papai para isso faz cosiga")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Papai tô com fome quero pizza")
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        # # # # #
        `)
})
basic.showString("Oi vc está bem papai")
basic.showLeds(`
    . . . . .
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    `)
