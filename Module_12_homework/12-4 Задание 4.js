function Appliance(name, power, switcher){
  this.name = name,
  this.power = power,
  this.switcher = switcher
}

Appliance.prototype.getPower = function (){ // Параметр power в функции никак не используется, можно его убрать
  console.log(`Потребляемая мощность: ${this.power}`);
}
Appliance.prototype.turnOn = function (){ // То же самое, исправила здесь  и в аналогичных местах ниже
  if (this.switcher === false){
    this.switcher = true
  }
  console.log(`Устройство включено`);
}
Appliance.prototype.turnOff = function (){
  if (this.switcher === true){
    this.switcher = false
  }
  console.log(`Устройство выключено`);
}

function SmartAppliance (isWiFiAble, ecosystem){
  this.isWiFiAble = isWiFiAble,
  this.ecosystem = ecosystem
}

SmartAppliance.prototype = new Appliance();
const kettle = new Appliance('kettle', 2200, false);
const fridge = new Appliance('fridge', 250, true); 
const coffeeMachine = new Appliance('coffeeMachine', 2000, false);
const wifiRouter = new SmartAppliance (true, 'xiaomi', 'wifiRouter', 10, true);
const yandexStation = new SmartAppliance (true, 'Yandex', 'yandexStation', 5, true);


fridge.turnOff();
fridge.getPower();