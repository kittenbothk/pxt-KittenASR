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
  //%block="Brighter"
  bright='202',
  //%block="Dimmer"
  dim='203',
  //%block="Red Light On"
  red='204',
  //%block="Green Light On"
  green='205',
  //%block="Yellow Light On"
  yellow='206',
  //%block="Blue Light On"
  blue='207',
  //%block="Sitting Room Light On"
  livingon='208',
  //%block="Sitting Room Light Off"
  livingoff='209',
  //%block="Kitchen Light On"
  kitchenon='210',
  //%block="Kitchen Light Off"
  kitchenoff='211',
  //%block="Bedroom Light On"
  bedon='212',
  //%block="Bedroom Light Off"
  bedoff='213',
  //%block="Balcony Light On"
  balconyon='214',
  //%block="Balcony Light Off"
  balconyoff='215',
  //%block='Bathroom Light On'
  bathroomon='216',
  //%block="Bathroom Light Off"
  bathroomoff='217',
  //%block="All On"
  allon='218',
  //%block="All Off"
  alloff='219'
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

  //% blockId=asr_light block="ASR Light Command %cmd %compare"
  //% group="Basic" weight=90
  export function asr_light(cmd: string, compare: lightCMD): boolean{
    //let cmd = asr_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  serial.onDataReceived('',function(){
  music.playTone(262, music.beat(BeatFraction.Eighth))
  })
}