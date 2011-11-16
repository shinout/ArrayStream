const colors = {
  'clear'  : '\033[0m',
  'black'  : '\033[30m',
  'red'    : '\033[31m',
  'green'  : '\033[32m',
  'yellow' : '\033[33m',
  'blue'   : '\033[34m',
  'purple' : '\033[35m',
  'cyan'   : '\033[36m',
  'white'  : '\033[37m'
};


function colorize(str, colorname) {
  return (colors[colorname] || colors['white']) + str + colors['clear']
}

function colorize_args() {
  var colorname = Array.prototype.shift.call(arguments);
  Array.prototype.unshift.call(arguments, colors[colorname] || colors['white']);
  Array.prototype.push.call(arguments, colors['clear']);
  return arguments;
}

module.exports = colorize;

module.exports.colors = Object.keys(colors);
module.exports.args = colorize_args;

module.exports.define = function() {
  console.color = function()  {
    console.log.apply(console, colorize_args.apply(console, arguments));
  };

  console.ecolor = function() {
    console.error.apply(console, colorize_args.apply(console, arguments));
  };

  Object.keys(colors).forEach(function(color) {
    console[color] = function() {
      Array.prototype.unshift.call(arguments, color);
      console.color.apply(console, arguments);
    };
    console['e' + color] = function(v) {
      Array.prototype.unshift.call(arguments, color);
      console.ecolor.apply(console, arguments);
    };
    colorize[color] = function(v) { return colorize(v, color) };
  });

  return colorize;
};

module.exports.prod = function() {
  console.ecolor = function() {};
  return this;
};

module.exports.define();
