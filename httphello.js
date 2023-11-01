// let http = require(`http`);
function hasDuplicateValue(array) {
  let step = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      step++;
      console.log(`this is step ${step}`);
      if (i !== j && array[i] === array[j]) {
        console.log(`sum of steps is ${step} (it ended earlier)`);
        return true;
      }
    }
  }
  console.log(`sum of steps is ${step}`);
  return false;
}
function hasDuplicateValueButFaster(array) {
  let step = 0;
  let indexArray = [];
  for (let i = 0; i < array.length; i++) {
    step++;
    if (indexArray[array[i]] === 1) {
      return true;
    } else {
      console.log(`This is step ${i} `);
      indexArray[array[i]] = 1;
    }
  }
  console.log("Sum steps is" + step);
  return false;
}
// hasDuplicateValue([1, 4, 6, 73, 35, 2]);
hasDuplicateValueButFaster([1, 4, 6, 73, 35, 2]);
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(
//       `Hello World!  ${hasDuplicateValue([
//         1, 5, 3, 8, 1, 4,
//       ])} this first ${hasDuplicateValueButFaster([
//         1, 5, 3, 9, 1, 4,
//       ])} this second`
//     );
//   })
//   .listen(8080);
