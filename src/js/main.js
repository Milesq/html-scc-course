/* const serveredCountElement = document.getElementById('serveredCount');

const serveredCount = '1321901';
let currentValue = new Array(serveredCount.length).fill('0').join('');

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function increaseUntil(max, i) {
  const intervalId = setInterval(() => {
    if (currentValue[i] < max) {
      // currentValue = currentValue.replaceAt(i, 1 + parseInt(currentValue[i]));
      console.log(currentValue[i]);
      // serveredCountElement.innerHTML = currentValue;
    } else {
      clearInterval(intervalId);
    }
  }, (i + 1) * 150);
}

increaseUntil(4, 3); */
// serveredCount.split('').forEach((el, i) => {
// increaseUntil(el, i);
// });
