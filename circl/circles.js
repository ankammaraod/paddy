/* eslint-disable no-magic-numbers */
/* eslint-disable id-length */
const fs = require('fs');

class Style {
  styles = [];
  constructor() {
  }

  addAttrib(property, value) {
    this.styles.push([property, value]);
  }

  getStyles() {
    return this.styles.map((x) => x.join(': ')).join(';')
  }
}

class Circle {
  constructor(point, radius) {
    this.point = point;
    this.radius = radius;
  }

  diameter() {
    return this.radius * 2;
  }

  toHtml() {
    const style = new Style();

    style.addAttrib('border-radius', '50%');
    style.addAttrib('position', 'absolute');
    style.addAttrib('top', `${randInt(100)}%`);
    style.addAttrib('left', `${randInt(100)}%`);
    style.addAttrib('background-color', `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`);
    style.addAttrib('height', `${this.diameter()}px`);
    style.addAttrib('width', `${this.diameter()}px`);

    return `<div style = "${style.getStyles()}"></div> `;
  }
}

const randInt = (x) => Math.floor(Math.random() * x);

const colors = () => {
  const html = Array(500).fill(1).map(() => {
    return new Circle({ x: randInt(200), y: randInt(200) }, randInt(100)).toHtml();
  });
  const refresh = '<meta http-equiv="refresh" content="1">'
  fs.writeFileSync('./a.html', refresh + html.join(''), 'utf-8');
}
const interval = setInterval(() => colors(), 1000);

setTimeout(() => clearInterval(interval), 30000)