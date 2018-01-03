var Calculator = function() {
  function add(x, y) {
    return x + y;
  }

  function sub(x, y) {
    return x - y;
  }

  return { add, sub };
};

module.exports = Calculator;