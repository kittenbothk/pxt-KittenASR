//% color="#5c7cfa" weight=10 icon="\u03f0"
namespace asr {
let cmd=''

  export enum lightCMD {
  //% block="Light On"
  lighton='200',
  //% block="Lamp On"
  lampon='200',
  //% block="Light Off"
  lightoff='201',
  //% block="Lamp Off"
  lampoff='201',
  }
/**
   * init serial port
   * @param tx Tx pin; eg: SerialPin.P1
   * @param rx Rx pin; eg: SerialPin.P2
   */
  //% blockId=asr_init block="ASR init|Tx pin %tx|Rx pin %rx"
  //% group="Basic" weight=100
  export function asr_init(tx: SerialPin, rx: SerialPin): void {
    serial.redirect(tx, rx, BaudRate.BaudRate115200)
    basic.pause(100)
    basic.pause(300)
  }

  //% blockId=asr_cmd block="ASR Command"
  //% group="Basic" weight=90
  export function asr_cmd(): string {
    cmd=serial.readString()
    cmd=cmd.substr(3,3)
    return cmd
  }

  //% blockId=asr_compare block="ASR Compare %compare"
  //% group="Basic" weight=90
  export function asc_compare(cmd, compare: lightCMD): boolean{
    return cmd == compare
  }
}