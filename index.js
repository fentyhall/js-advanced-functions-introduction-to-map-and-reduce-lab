function mapToNegativize(arr) {
    return arr.map(element => -element);
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(arr) {
    return arr.map(element => element * 2);
}

function mapToSquare(arr) {
    return arr.map(element => element ** 2);
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for (let element of arr) {
        total += element
    }
    return total;
}

function reduceToAllTrue(arr) {
    for (let element of arr) {
        if (!element) return false;
    }
    return true;
}

function reduceToAnyTrue(arr) {
    for (let element of arr) {
        if (element) return true;
    }
    return false;
}