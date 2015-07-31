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
    })
});

// describe('Merge Sort', function(){
    
// });