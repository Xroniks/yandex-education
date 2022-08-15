/*
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */

function range(start, end, step) {
  let start1;
  let end1;
  let step1;
  let array = [];

  if (step) {
    step1 = step;
  } else {
    if (step === 0) {
      step1 = 0;
    } else {
      step1 = 1;
    }
  }

  if (end) {
    end1 = end;
  } else {
    end1 = start;
  }

  if (start >= 0) {
    if (end) {
      start1 = start;
    } else {
      start1 = 0;
      end1 = start;
    }
  } else {
    start1 = 0;
  }

  if (start < 0) {
    start1 = 0;
    end1 = start;
    step1 = -1;
  }

  console.log("start1 " + start1);
  console.log("end1 " + end1);
  console.log("step1 " + step1);

  for (let i = start1; end1 < 0 ? i > end1 : i < end1; i = i + step1) {
    console.log(i);
    array.push(i);
  }

  return array;
}

//console.log(range(4)); // => [0, 1, 2, 3]
console.log(range(-4)); // => [0, -1, -2, -3]
//console.log(range(1, 5)); // => [1, 2, 3, 4]
//console.log(range(0, 20, 5)); // => [0, 5, 10, 15]
//console.log(range(0, -4, -1)); // => [0, -1, -2, -3]
//console.log(range(1, 4, 0)); // => [1, 1, 1]
//console.log(range(0)); // => []
