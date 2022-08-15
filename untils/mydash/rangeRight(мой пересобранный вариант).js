function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

function range(start = 0, end, step, isRight) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;

  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  if (isRight) {
    while (length--) {
      result[++index] = start;
      start += step;
    }
  } else {
    while (length--) {
      end -= step;
      result[++index] = end;
    }
  }
  return result;
}

console.log(rangeRight(4)); // => [3, 2, 1, 0]
console.log(rangeRight(-4)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 5)); // => [4, 3, 2, 1]
console.log(rangeRight(0, 20, 5)); // => [15, 10, 5, 0]
console.log(rangeRight(0, -4, -1)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]
console.log(rangeRight(0)); // => []
