describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single item array', function(){
        expect( bubbleSort([13]) ).toEqual( [13] );
    });

    it('handles a sorted array', function(){
        expect( bubbleSort([1,2,7]) ).toEqual( [1,2,7] );
    });

    it('handles an unsorted array', function(){
    	expect( bubbleSort([9,1,3,6,-1])).toEqual( [-1,1,3,6,9]);
    });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        // test the merging algorithm
        expect(mergeSort([])).toEqual([]);
    });
    it ('handles a single item array', function() {
      expect(mergeSort([13])).toEqual ([13]);
    });
    it ('handles a sort array', function() {
      expect(mergeSort([1,2,7,9])).toEqual([1,2,7,9]);
    });
    it ('handles an even lenghted unsorted array', function(){
      expect(mergeSort([9,1,2,-1])).toEqual([-1,1,2,9]);
    });
    it ('handles an odd lenghted unsorted array', function(){
      expect(mergeSort([9,1,2,5,-1])).toEqual([-1,1,2,5,9]);
    });
});

describe('Split Array function', function() {
  it('is able to split an even lengthed array into two halves', function() {
    expect(split([1,2,3,5,7,8])).toEqual([[1,2,3],[5,7,8]]);
  });
  it('is able to split an odd lengthed array into two halves', function() {
    expect(split([-1,1,2,3,5,7,8])).toEqual([[-1,1,2,3],[5,7,8]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted array', function(){
    expect(merge([1],[2])).toEqual([1,2]);
  });
  it('is able to merge two bigger and equal size arrays', function() {
    expect(merge([3,5,7],[1,2,8])).toEqual([1,2,3,5,7,8]);
  });

  it('is able to merge two bigger and not equal size arrays', function() {
    expect(merge([3,5,7],[-1,1,2,8])).toEqual([-1,1,2,3,5,7,8]);
  });

});
