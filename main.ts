input.onButtonPressed(Button.A, function () {
	
})
let x = ""
serial.redirect(
SerialPin.P2,
SerialPin.P12,
BaudRate.BaudRate115200
)
basic.forever(function () {
    x = serial.readString()
    if (x == "asr200") {
        Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.On)
    } else if (x == "asr201") {
        Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.Off)
    }
})
