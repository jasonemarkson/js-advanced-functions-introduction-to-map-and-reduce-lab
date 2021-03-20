// Your code here
// map

function mapToNegativize(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element ** 2)
    }
    return newArray
}


// reduce
function reduceToTotal(sourceArray, startingPoint = 0) {
    // let total = sourceArray.forEach(element => startingPoint + element)
    // return total
    let accum = startingPoint
    sourceArray.forEach(element => accum = accum + element)
    return accum
}

function reduceToAllTrue(sourceArray) {
    if (sourceArray.every(element => !!element === true)) {
        return true
    }
    else {
        return false
    }
    // if (sourceArray.forEach(element => element === false)) {
    //     return false
    // } else {
    //     return true
    // }
}

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.find(element => element === true)) {
        return true
    } else {
        return false
    }
}