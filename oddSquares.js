const oddSquares = (array) => {
    /**
     * input: array
     * we want: -> filter even numbers from the array
     * then map the remaining numbers from the arrayto their squares.
     * 
     * we will use the filter method to get array elements that are not even
     */
   const notEven = array.filter((item) => item % 2 !== 0) 
   const notEvenSquares = notEven.map((item) => item * item)
   return notEvenSquares;
}
console.log(oddSquares([10, 15, 20, 25, 30]))