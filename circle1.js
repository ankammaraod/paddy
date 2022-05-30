/* eslint-disable no-magic-numbers */

const { html } = require('../projects/htmlFrameWork/src/generateHtml.js');
const fs = require('fs');

class Style {
  constructor() {
    this.styles = [];
  }

  addAttrib(property, value) {
    this.styles.push([property, value]);
  }

  getStyles() {
    return this.styles.map((x) => x.join(': ')).join(';');
  }
}

class colors {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  rgb() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

}

const toHtml = () => {
  const style = new Style();
  const color = new colors(randInt(256), randInt(256), randInt(256));

  style.addAttrib('border', `1px solid ${color.rgb()}`);
  style.addAttrib('position', 'absolute');
  style.addAttrib('height', '0.1px');
  style.addAttrib('width', '50%');
  style.addAttrib('transform', `rotate(${randInt(180)}deg)`);

  return `<div style = "${style.getStyles()}"></div> `;
};

const randInt = (num) => Math.floor(Math.random() * num);

const lines = () => {
  const divs = Array(500).fill(1).map(() => toHtml()).join('');

  const dom =
    ['html', {},
      ['head', {},
        ['title', {}, 'circle'],
        ['meta', { 'http-equiv': 'refresh', content: '1' }]
      ],
      ['body',
        {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            margin: '0px'
          }
        }, divs
      ]
    ];

  fs.writeFileSync('./circle1.html', html(dom), 'utf-8');
};

const startCircle = () => {
  const interval = setInterval(() => lines(), 1000);
  setTimeout(() => clearInterval(interval), 30000);
};

startCircle();
