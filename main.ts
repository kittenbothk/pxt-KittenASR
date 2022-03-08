//% color="#5c7cfa" weight=10 icon="\u03f0"
namespace asr {
let cmd=''

  export enum lightCMD {
  //% block="Light On"
  lighton='200',
   //% block="Light Off"
  lightoff='201',
  //% block="Lamp On"
  lampon='200',
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

  export enum actionCMD {
  //%block="Open Door"
  dooropen='300',
  //%block="Close Door"
  doorclose='301',
  //%block="Open Window"
  windowopen='302',
  //%block="Close Window"
  windowclose='303',
  //%block="Open Curtains"
  curtainopen='304',
  //%block="Close Curtains"
  curtainclose='305',
  //%block="Hanger Out"
  hangerout='306',
  //%block="Hanger In"
  hangerin='307',
  //%block="Fan On"
  fanon='308',
  //%block='Fan Off'
  fanoff='309',
  //%block='Speed Up'
  speedup='310',
  //%block='Slow Down'
  slowdown='311',
  //%block='Air Conditioner On'
  airconon='312',
  //%block='Air Conditioner Off'
  airconoff='313',
  //%block='Music On'
  musicon='314',
  //%block='Music Off'
  musicoff='315',
  //%block='Pause'
  pause='316',
  //%block="Previous Song"
  previous='317',
  //%block='Next Song'
  next='318',
  //%block="Volume Up"
  volumeup='319',
  //%block="Volume Down"
  volumedown='320',
  //%block="Robot On"
  roboton='321',
  //%block="Robot Off"
  robotoff='322',
  //%block='Robot Stop'
  robotstop='323',
  //%block='Move Forward'
  moveforward='324',
  //%block="Move Backward"
  movebackward='325',
  //%block="Turn Left"
  turnleft='326',
  //%block="Turn Right"
  turnright='327',
  //%block='Lift On'
  lifton='328',
  //%block="First Floor"
  firstfloor='329',
  //%block='Second Floor'
  secondfloor='330',
  //%block='Third Floor'
  thirdfloor='331'
  }

  export enum askCMD {
  //%block="Check Temperature"
  temp='400',
  //%block="Check Humidity"
  humid='401',
  //%block="Check Weather"
  weather='402',
  //%block='Check Time'
  time='403',
  //%block="Measure Distance"
  distance='405',
  //%block="Measure Temperature"
  mtemp='406',
  //%block='Measure Weight'
  weight='407',
  //block='Measure Height'
  height='408'
  }

  export enum custCMD {
  //block="Custom Command 1"
  c1='901',
  //block="Custom Command 2"
  c2='902',
  //block="Custom Command 3"
  c3='903',
  //block="Custom Command 4"
  c4='904',
  //block="Custom Command 5"
  c5='905',
  //block="Custom Command 6"
  c6='906',
  //block="Custom Command 7"
  c7='907',
  //block="Custom Command 8"
  c8='908',
  //block="Custom Command 1"
  c9='909',
  //block="Custom Command 10"
  c10='910'
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
  //% group="Basic" weight=95
  export function asr_cmd(): string {
    cmd=serial.readString()
    cmd=cmd.substr(3,3)
    return cmd
  }

  //% blockId=asr_awake block="Got Awake Command? %cmd"
  //% group="Basic" weight=92
  export function asr_awake(cmd: string): boolean{
    //let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    if (cmd == '100'){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_light block="Got Light Command? %cmd %compare"
  //% group="Basic" weight=90
  export function asr_light(cmd: string, compare: lightCMD): boolean{
    //let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_action block="Got Action Command? %cmd %compare"
  //% group="Basic" weight=85
  export function asr_action(cmd: string, compare: actionCMD): boolean{
    //let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_ask block="Got Ask Command? %cmd %compare"
  //% group="Basic" weight=80
  export function asr_ask(cmd: string, compare: askCMD): boolean{
    //let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_cust block="Got Custom Command? %cmd %compare"
  //% group="Basic" weight=75
  export function asr_cust(cmd: string, compare: custCMD): boolean{
    //let cmd = get_cmd()
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

  function get_cmd(): string {
    cmd=serial.readString()
    cmd=cmd.substr(3,3)
    return cmd
  }
}