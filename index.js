function mapToNegativize(sourceArray) {
    const negativeArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let negative = sourceArray[i] * -1;
        negativeArray.push(negative);
    };
    return negativeArray;
};

function mapToNoChange(sourceArray) {
    const sameArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let same = sourceArray[i];
        sameArray.push(same);
    };
    return sameArray;
};

function mapToDouble(sourceArray) {
    const doubledArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let doubled = sourceArray[i] * 2;
        doubledArray.push(doubled);
    };    
    return doubledArray;
};

function mapToSquare(sourceArray) {
    const squaredArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let squared = sourceArray[i]**2;
        squaredArray.push(squared);
    };
    return squaredArray;
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    let truthy = true
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === false) {
            truthy = false;
            break;
        };
    };
    return truthy;
};

function reduceToAnyTrue(sourceArray) {
    let truthy = false
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true) {
            truthy = true;
            break;
        };
    };
    return truthy;
};
