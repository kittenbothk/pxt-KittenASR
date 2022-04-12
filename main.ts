//% color="#32a852" weight=10 icon="\uf130"
namespace KittenASR {
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
  //%block='Measure Height'
  height='408'
  }

  export enum custCMD {
  //%block="Custom Command 1"
  c1='901',
  //%block="Custom Command 2"
  c2='902',
  //%block="Custom Command 3"
  c3='903',
  //%block="Custom Command 4"
  c4='904',
  //%block="Custom Command 5"
  c5='905',
  //%block="Custom Command 6"
  c6='906',
  //%block="Custom Command 7"
  c7='907',
  //%block="Custom Command 8"
  c8='908',
  //%block="Custom Command 9"
  c9='909',
  //%block="Custom Command 10"
  c10='910'
  }

  export enum ttsCMD {
  //%block="Temperature is"
  tempis=1,
  //%block="Humidity is"
  humiis=2,
  //%block="Welcome"
  welcome=5,
  //%block="Distance is"
  distis=6,
  //%block="Millimeter"
  mm=7,
  //%block="Centimeter"
  cm=8,
  //%block="Meter"
  m=9,
  //%block="Weight is"
  weightis=11,
  //%block="Gram"
  gram=12,
  //%block="Kilogram"
  kilogram=13,
  //%block="Please say the password"
  password=14,
  //%block="Weather is"
  weatheris=15,
  //%block="Sunny"
  sunny=16,
  //%block="Cloudy"
  cloudy=17,
  //%block="Raining"
  raining=18,
  //%block="Snowing"
  snowing=19,
  //%block="Haze"
  haze=20,
  //%block="Big"
  big=21,
  //%block="Middle"
  middle=22,
  //%block="Small"
  small=23,
  //%block="Which floor"
  floor=24,
  //%block="Yes"
  yes=25,
  //%block="No"
  no=26,
  //%block="Percent"
  percent=27,
  //%block="You are right"
  right=28,
  //%block="You are wrong"
  wrong=29,
  //%block="Degrees"
  degrees=30,
  //%block="ok"
  ok=33
  }

/**
   * init serial port
   * @param tx Tx pin; eg: SerialPin.P1
   * @param rx Rx pin; eg: SerialPin.P2
   */
  //% blockId=asr_init block="ASR init|Tx(Blue) pin %tx|Rx(Green) pin %rx"
  //% group="Basic" weight=100
  export function asr_init(tx: SerialPin, rx: SerialPin): void {
    serial.redirect(tx, rx, BaudRate.BaudRate115200)
    basic.pause(100)
  }

  //% blockId=asr_cmd block="ASR Command"
  //% group="Basic" weight=95
  export function asr_cmd(){
    cmd=serial.readString()
    cmd=cmd.substr(3,3)
    //if (now.length>1){
    //cmd=now
    //return now
    //} else {
    //return cmd
    //}
  }

  //% blockId=asr_awake block="Got Awake Command?"
  //% group="Basic" weight=92
  export function asr_awake(): boolean{
    let temp = get_cmd()
    //basic.showString(cmd)

    if (cmd == '100'){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_light block="Got Light Command? %compare"
  //% group="Basic" weight=90
  export function asr_light(compare: lightCMD): boolean{
    let temp = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    //let temp = get_cmd()
    if (temp == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_action block="Got Action Command? %compare"
  //% group="Basic" weight=85
  export function asr_action(compare: actionCMD): boolean{
    let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    //let temp = get_cmd()
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_ask block="Got Ask Command? %compare"
  //% group="Basic" weight=80
  export function asr_ask(compare: askCMD): boolean{
    let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    //let temp = get_cmd()
    if (cmd == compare){
    return true
    } else{
    return false
    }
  }

  //% blockId=asr_cust block="Got Custom Command? %compare"
  //% group="Basic" weight=75
  export function asr_cust(compare: custCMD): boolean{
    let cmd = get_cmd()
    //basic.showString(cmd)
    //return cmd == compare
    //let temp = get_cmd()
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
    return cmd
  }

  //% blockId=asr_tts_say block="TTS Say %tts"
  //% group="Basic" weight=70
  export function tts_say(tts:ttsCMD): void{
    let buf = pins.createBuffer(5);
    buf[0] = 170;
    buf[1] = 85;
    buf[2] = tts
    buf[3] = 85;
    buf[4] = 170;
    serial.writeBuffer(buf)
  }

  //% blockId=asr_tts_time block="TTS Say Time |hour %hour |minutes %min"
  //% hour.min=0 hour.max=24
  //% min.min=0 min.max=60
  //% group="Basic" weight=65
  export function tts_time(hour: number, min: number): void{
  let buf = pins.createBuffer(7);
    buf[0] = 170
    buf[1] = 85
    buf[2] = 3
    buf[3] = hour
    buf[4] = min
    buf[5]= 85
    buf[6]= 170
    serial.writeBuffer(buf)
  }

  //% blockId=asr_tts_int block="TTS Say Integer %int"
  //% group="Basic" weight=60
  export function tts_int(int: number): void{
  let buf = pins.createBuffer(9);
    buf[0] = 170
    buf[1] = 85
    buf[2] = 32
    buf[3] = 0
    buf[4] = 0
    buf[5] = 0
    buf[6] = 0
    buf[7] = 85
    buf[8] = 170
    let temp=int
    let index=3
    /*
    if (temp%256 != 0){
        while (temp%256 != 0){
        let remainder=temp%256
        buf[index]=remainder
        temp-=remainder
        index+=1
        }
        buf[index]=temp/256
    }
    */
    if (temp%256 != 0){
        while (temp!=0){
            let remainder=temp%256
            if (remainder!=0){
            buf[index]=remainder
            temp-=remainder
            index+=1
            }
            else {
            temp=temp/256
            index+=1
            }
        }
        buf[index]=temp
    }

    serial.writeBuffer(buf)
  }
}