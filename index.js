var Calculator = function() {
  function add(x, y) {
    return x + y;
  }

  return {
    add: add
  };
};

module.exports = Calculator;