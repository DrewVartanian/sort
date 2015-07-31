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

function mergeSort(arr){
	if(arr.length<=1){
		return arr;
	}

	var splitArr = split(arr);
	splitArr[0]=mergeSort(splitArr[0]);
	splitArr[1]=mergeSort(splitArr[1]);

	return merge(splitArr[0],splitArr[1]);
}

function split(arr){
	var returnArr = [];
	returnArr[0] = arr.splice(0,Math.ceil(arr.length/2));
	returnArr[1] = arr;
	return returnArr;
}

function merge(arr1,arr2){
	var returnArr = [];
	var combLength = arr1.length+arr2.length;
	for (var i = 0; i < combLength; i++) {
		if(!arr2[0]||arr1[0]<arr2[0]){
			returnArr.push(arr1.shift());
		}else{
			returnArr.push(arr2.shift());
		}
	}
	return returnArr;
}