/* eslint-disable no-magic-numbers */

const fs = require('fs');
const { html } = require('../../projects/htmlFrameWork/src/generateHtml.js');

const generateTime = () => {
  const date = new Date();
  const time = date.getHours() + ' : ' + date.getMinutes() + ' : ' +
    date.getSeconds();
  const dom =
    ['html', {},
      ['head', {},
        ['title', {}, 'digital-clock'],
        ['meta', { 'http-equiv': 'refresh', content: 1 }]
      ],
      ['body',
        {
          style: {
            'background-color': 'black',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
          }
        },
        [
          'div', {
            style: {
              color: 'white',
              'font-size': '100px'
            }
          }, time
        ]
      ]
    ];
  fs.writeFileSync('digitalClock.html', html(dom), 'utf-8');
};

const startTime = () => {
  const timer = setInterval(() => generateTime(), 1000);
  setTimeout(() => clearInterval(timer), 10000);
};

startTime();
