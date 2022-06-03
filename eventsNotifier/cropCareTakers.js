/* eslint-disable no-console */
const { EventNotifier } = require('./eventNotifier.js');
const fs = require('fs');

const openGateWalls = () => console.log('removing gateWalls');
const startDrainageMotor = () => console.log('drainage motor started');
const closeGateWalls = () => console.log('gatewalls are closed');
const startMotor = () => console.log('started motor at river');
const harvestCrop = () => console.log('harvested the crop');
const callBrokers = () => console.log('inform to brokers about crop');
const callMillers = () => console.log('inform to millers about crop');

// const fileBasedEventGenerator = (notifier) => {
//   fs.watchFile('./events.txt', (prev, curr) => {
//     const content = fs.readFileSync('./events.txt', 'utf-8');
//     const event = content.split('\n').slice(-1);
//     console.clear();
//     notifier.notify(event);
//   });
// };

const decideActions = (notifier, parsedContents) => {
  if (parsedContents['humidity'] > 60) {
    notifier.notify('humidity-raised');
  }
  if (parsedContents['cropColor'] === 'yellow') {
    notifier.notify('cropInYellowColor');
  }
  if (parsedContents['temperature'] > 40) {
    notifier.notify('temperature-raised');
  }
};

const fileBasedEventGenerator = (notifier) => {
  fs.watchFile('./events.json', (curr, prev) => {
    const content = fs.readFileSync('./events.json', 'utf-8');
    const parsedContents = JSON.parse(content);
    console.clear();
    decideActions(notifier, parsedContents);
  });
};

const main = () => {
  const eventNotifier = new EventNotifier();

  eventNotifier.register('humidity-raised', openGateWalls);
  eventNotifier.register('humidity-raised', startDrainageMotor);

  eventNotifier.register('temperature-raised', closeGateWalls);
  eventNotifier.register('temperature-raised', startMotor);

  eventNotifier.register('cropInYellowColor', harvestCrop);
  eventNotifier.register('cropInYellowColor', callBrokers);
  eventNotifier.register('cropInYellowColor', callMillers);

  fileBasedEventGenerator(eventNotifier);
};

main();
