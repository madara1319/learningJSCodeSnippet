//This function in big O Notation classifies under O(N2) efficiency category
function findGreatestValueInArray(array) {
  let isIValueTheGreatest;
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    isIValueTheGreatest = true;
    for (let j = 0; j < array.length; j++) {
      steps++;
      if (array[j] > array[i]) {
        isIValueTheGreatest = false;
      }
    }
    if (isIValueTheGreatest) {
      console.log(`steps number is ${steps}`);
      return array[i];
    }
  }
}
//Here i managed to write solution with efficiency that would classify as O(N)

function findTheGreatestValueInArrayButFaster(array) {
  let valuesAsIndexesArray = [];
  steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    valuesAsIndexesArray[array[i]] = 1;
  }

  console.log(`steps number is ${steps}`);
  return valuesAsIndexesArray.length - 1;
}

function findGreatestValueInArrayOptimal(array) {
  let greatestValue = array[0];
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] > greatestValue) {
      greatestValue = array[i];
    }
  }

  console.log(`steps number is ${steps}`);
  return greatestValue;
}

//read about std::deque as its seems interesting aproach to array like structures with nice efficiency

function selectionSort(array) {
  let lowestValue = array[0];
  let counter = array.length;
  for (let i = 0; i < counter; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < lowestValue) {
        lowestValue = array[i];
        temp = array[0];
        array[0] = lowestValue;
        array[i] = temp;
      }
      counter--;
    }
  }
  return array;
}

// console.log(findGreatestValueInArray([1, 5, 6, 2, 7]));
// console.log(findTheGreatestValueInArrayButFaster([1, 5, 23, 10, 2]));

// console.log(findGreatestValueInArrayOptimal([1, 5, 23, 10, 2]));
console.log(selectionSort([5, 4, 3, 2, 1]));
