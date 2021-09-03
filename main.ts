let numero = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < numero; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 6)
    basic.showNumber(numero)
})
input.onButtonPressed(Button.B, function () {
    for (let indice = 0; indice <= numero; indice++) {
        for (let index = 0; index < numero; index++) {
        	
        }
    }
})
