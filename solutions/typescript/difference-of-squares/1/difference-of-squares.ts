class Squares {
    digit: number
    squareOfSum: number
    sumOfSquares: number
    difference: number

    constructor(digit: number) {
        this.digit = digit
        this.squareOfSum = this.getSquareOfSum(digit)
        this.sumOfSquares = this.getSumOfSquare(digit)
        this.difference = this.getDifference()
    }

    private getSquareOfSum(int: number): number {
        let sum: number = 0
        let x: number = 1

        while (x <= int) {
            sum += x
            x++
        }

        return sum * sum
    }

    private getSumOfSquare(int: number): number {
        let sum: number = 0
        let x: number = 1

        while (x <= int) {
            sum += (x * x)
            x++
        }

        return sum
    }

    private getDifference(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}

export default Squares