basic.showString("Hello" + "World")
basic.forever(function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
})
