
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

    it('handles arrays with one item', function(){
        const arr = [1]
        expect( bubbleSort(arr)).toEqual(arr)
    })

    it('handles arrays with multiple items', function(){
        const arr1 = [2, 4, 3, 1]
        const arr2 = ['c', 'd', 'b', 'a']
        const arr3 = [2, 1, 'd', 'E', 7, 'd']
        expect(bubbleSort(arr1)).toEqual([1, 2, 3, 4])
        expect(bubbleSort(arr2)).toEqual(['a', 'b', 'c', 'd'])
        expect(bubbleSort(arr3)).toEqual([1, 2, 7, 'E', 'd', 'd'])
    })