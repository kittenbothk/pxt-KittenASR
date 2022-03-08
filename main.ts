//% color="#5c7cfa" weight=10 icon="\u03f0"
//% groups='["Basic", "Graphic", Classifier", "Tag/Code", "Audio", "Face", "Wifi", "CloudAI"]'
namespace koi {

serial.onDataReceived('\n', function () {
    let a = serial.readUntil('\n')
    display.scroll(a)
  })
}

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
    //serial.setTxBufferSize(64)
    //serial.setRxBufferSize(64)
    //serial.readString()
    //serial.writeString('\n\n')
    // take control of the ext serial port from KOI
    //asyncWrite(`K0`, 0)
    basic.pause(300)
  }