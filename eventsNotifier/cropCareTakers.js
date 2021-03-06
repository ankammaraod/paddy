/* eslint-disable no-console */
const { EventNotifier } = require('./eventNotifier.js');
const { Field } = require('./field.js');
const fs = require('fs');

const decideActions = (eventNotifier, field, parsedContents) => {
  if (field.isHumidityRaised(parsedContents['humidity'])) {
    eventNotifier.notify('humidity-raised');
  }
  if (field.isTemperatureRaised(parsedContents['temperature'])) {
    eventNotifier.notify('temperature-raised');
  }
  if (field.isCropColorYellow(parsedContents['cropColor'])) {
    eventNotifier.notify('cropInYellowColor');
  }
};

const fileBasedEventGenerator = (eventNotifier, field) => {
  fs.watchFile('./events.json', (curr, prev) => {
    const content = fs.readFileSync('./events.json', 'utf-8');
    const parsedContents = JSON.parse(content);
    console.clear();
    decideActions(eventNotifier, field, parsedContents);
  });
};

const main = () => {
  const eventNotifier = new EventNotifier();
  const field = new Field(30, 30, 'yellow');

  eventNotifier.register('humidity-raised', () => field.openGateWalls());
  eventNotifier.register('humidity-raised', () => field.startDrainageMotor());
  eventNotifier.register('temperature-raised', () => field.closeGateWalls());
  eventNotifier.register('temperature-raised', () => field.startMotor());
  eventNotifier.register('cropInYellowColor', () => field.harvestCrop());
  eventNotifier.register('cropInYellowColor', () => field.callBrokers());
  eventNotifier.register('cropInYellowColor', () => field.callMillers());
  fileBasedEventGenerator(eventNotifier, field);
};

main();
