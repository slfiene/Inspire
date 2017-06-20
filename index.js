const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', () => {
  // Create an Led on pin 7 on P1 (GPIO4)
  // and strobe it on/off
  const led = new five.Led('P1-7');
  led.strobe(500);
});