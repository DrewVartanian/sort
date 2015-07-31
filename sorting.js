function bubbleSort(array) {
  if(array.length <= 1) return array;
  var loopAgain = true;

  while (loopAgain) {
    loopAgain = false;
    for (var i=0; i <array.length - 1; i++) {
      if (array[i+1] < array[i]) {
        loopAgain = true;
        var c = array[i+1];
        array[i+1] = array[i];
        array[i] = c;
      }
    }
  }

  return array;
}
