//% color="#5c7cfa" weight=10 icon="\u03f0"
//% groups='["Basic", "Graphic", Classifier", "Tag/Code", "Audio", "Face", "Wifi", "CloudAI"]'
namespace asr {

 serial.onDataReceived('\n', function () {
     let a = serial.readUntil('\n')
     display.scroll(a)
   })

/**
   * init serial port
   * @param tx Tx pin; eg: SerialPin.P1
   * @param rx Rx pin; eg: SerialPin.P2
   */
  //% blockId=koi_init block="ASR init|Tx pin %tx|Rx pin %rx"
  //% group="Basic" weight=100
  export function asr_init(tx: SerialPin, rx: SerialPin): void {
    serial.redirect(tx, rx, BaudRate.BaudRate115200)
    basic.pause(100)
    basic.pause(300)
  }

}