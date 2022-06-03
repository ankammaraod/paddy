const display = (content) => {
  console.log(content);
};

class Field {
  constructor(humidity, temperature, cropColor) {
    this.humidity = humidity;
    this.temperature = temperature;
    this.cropColor = cropColor;
  }

  isHumidityRaised(humidity) {
    return humidity > this.humidity;
  }
  isTemperatureRaised(temperature) {
    return temperature > this.temperature;
  }
  isCropColorYellow(color) {
    return color === this.cropColor;
  }

  openGateWalls() {
    display('removing gateWalls');
  }
  startDrainageMotor() {
    display('drainage motor started');
  }
  closeGateWalls() {
    display('gatewalls are closed');
  }
  startMotor() {
    display('started motor at river');
  }
  harvestCrop() {
    display('harvested the crop');
  }
  callBrokers() {
    display('inform to brokers about crop');
  }
  callMillers() {
    display('inform to millers about crop');
  }
}

exports.Field = Field;
