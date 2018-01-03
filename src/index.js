document.addEventListener('DOMContentLoaded', function() {
  const numbers = document.getElementsByClassName('number');

  for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = setNumber(numbers[i].value);
  }

  function setNumber(number) {
    return function() {
      var display = document.getElementById('display');
      display.value += number;
    };
  }
});
