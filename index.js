// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(e => {
        return e * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(e => {
        return e
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(e => {
        return e * 2
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(e => {
        return e ** 2
    })
}

// reduce methods

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(total, e) {
        return total + e 
    }, startingPoint)
};

function reduceToAllTrue(sourceArray) {
    if (sourceArray.every(element => !!element === true)) {
        return true
    }
    else {
        return false
    }
}

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.find(element => element === true)) {
        return true
    } else {
        return false
    }
}