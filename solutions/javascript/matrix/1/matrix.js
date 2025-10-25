class Matrix {
    constructor(matrix) {
        this.rows = this.__getRows(matrix);
        this.columns = this.__getColumns();
    }

    __getRows(matrix) {
        return matrix.split("\n").map(value => value.split(" ").map(numberString => parseInt(numberString)));
    }

    __getColumns() {
        return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
    }
}

export default Matrix;