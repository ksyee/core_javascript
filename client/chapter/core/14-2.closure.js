function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'ipad', 'mac', 'watch'],
  };

  let gravity = 10;

  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

ufo(1);

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return write;
}

const b = useState(true);

console.log(b(''));
