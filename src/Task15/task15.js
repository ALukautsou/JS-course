function ArraySeq(arr) {
    var i = 0;
    return {
        next: function () {
            return {
                value: arr[i],
                done: !arr[i++]
            };
        }
    }
}

function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        const { value, done } = sequence.next();
        if (done) {
            break;
        }
        console.log(value);
    }
}

function RangeSeq(from, to) {
    return {
        next: function () {
            return {
                value: from++, 
                done: from > to
            };
        }
    }
}