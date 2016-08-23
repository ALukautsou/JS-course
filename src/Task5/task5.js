//Task5
//Sum of a range

//range(start, end, [step]) takes two arguments, start and end, and
// returns an array containing all the numbers from start up to
// (and including) end. An optional 3rd argument that indicates
// the 'step' value used to build up the array.
    function range(start, end, step) {
        var arr = [];
        var diff;

        if (step === undefined) {
            step = 1;
        }
        if (start < end) {
        diff = end - start;
        } else {
            diff = start - end;
        }
        for (var i = 0; i < diff + 1; i++) {
        arr[i] = start;
        start += step;
        }
        return arr;
    }

//sum(array) takes an array of numbers and returns
// the sum of these numbers.
    function sum(array) {
        var s = 0;

        for (var i = 0; i < array.length; i++) {
            s += array[i];
        }
        return s;
    }
