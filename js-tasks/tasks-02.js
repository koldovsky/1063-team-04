// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let index;
  const minOfArray = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (minOfArray === arr[i]) {
      index = i;
      break;
    }
  }
  return toReturn === "value" ? minOfArray : index;
}

function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const SEARCHED_ANIMAL = "wolf";
  if (queue[queue.length - 1] === SEARCHED_ANIMAL)
    return "Pls go away and stop eating my sheep";
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === SEARCHED_ANIMAL)
      return `Oi! Sheep number ${queue.length - i - 1}! 
		You are about to be eaten by a wolf!`;
  }
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

function maps(x) {
  return x.map((value) => value * 2);
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  return Math.ceil(year / 100);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - a - b;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return n * 2 - 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) return n;
  if (n > 0 && n < 13) return n - 1;
  return n - 2;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
