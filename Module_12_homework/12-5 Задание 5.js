class Appliance {
  constructor (name, power, switcher){
  this.name = name;
  this.power = power;
  this.switcher = switcher;
  }
  getPower(){ // Аналогичное замечание, как в предыдущих заданиях
  console.log(`Потребляемая мощность: ${this.power}`);
  }
  turnOn(){
    if (this.switcher === false){
    this.switcher = true
      }
  console.log(`Устройство включено`);
  }
  turnOff(){
    if (this.switcher === true){
    this.switcher = false
     }
  console.log(`Устройство выключено`);
}
}

class SmartAppliance extends Appliance {
  constructor (isWiFiAble, ecosystem, name, power, switcher) {
    super (name, power, switcher);
    this.isWiFiAble = isWiFiAble;
    this.ecosystem = ecosystem;
  }
  getEcosystem(){
    console.log(this.ecosystem);
  }
}

const kettle = new Appliance('kettle', 2200, false);
const fridge = new Appliance('fridge', 250, true); 
const coffeeMachine = new Appliance('coffeeMachine', 2000, false);
const wifiRouter = new SmartAppliance (true, 'xiaomi', 'wifiRouter', 10, true);
const yandexStation = new SmartAppliance (true, 'Yandex', 'yandexStation', 5, true);


fridge.turnOff();
kettle.getPower();
yandexStation.getEcosystem();