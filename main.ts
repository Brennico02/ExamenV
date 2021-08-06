input.onButtonPressed(Button.B, function () {
    index += 1
    Volumen += 51
    music.setVolume(Volumen)
    for (let index = 0; index <= contador; index++) {
        led.plot(x, y - index)
    }
    contador += 1
})
let index = 0
let contador = 0
let y = 0
let x = 0
let Volumen = 0
music.setVolume(51)
Volumen = 51
x = 0
y = 4
contador = 1
led.plot(x, y)
basic.forever(function () {
    music.playMelody("G F G A - F E D ", 120)
})
