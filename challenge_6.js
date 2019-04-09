/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function () {
    let sumNsquared = 0;
    for (let i = 1; i <= this.naturalNumbers; i++) {
      sumNsquared += i ** 2;
    }
    return sumNsquared;
  };

  this.squareOfTheSums = function () {
    // use the triangular number formula (squared) to perform calculation
    // https://en.wikipedia.org/wiki/Triangular_number
    let squaredNsum =
      ((this.naturalNumbers * (this.naturalNumbers + 1)) / 2) ** 2;
    return squaredNsum;
  };
}
