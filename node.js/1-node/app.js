const fs = require('fs');

console.log(global);

global.hellow = () => {
      global.console.log('hellow');
};

global.hellow();
hellow();