//Task32
//Waiting for multiple promises

//function all() given an array of promises, returns
// a promise that waits for all of the promises in the
// array to finish. It then succeeds, yielding an array of
// result values. If any of the promises in the array fail,
// the promise returned by all fails too
function all(promises) {
    return new Promise(function(success, failure) {
        var res = [], pending = promises.length;
        promises.forEach(function(promise, i) {
            promise.then(function(result) {
                res[i] = result;
                pending -= 1;
                if (pending === 0) {
                    success(res);
                }
            }, function(error) {
                failure(error);
            });
        });
        if (promises.length === 0) {
            success(res);
        }
    });
}

//function soon() - predefied function to imitate
// successful promise returning
function soon(val) {
    return new Promise(function(success) {
        setTimeout(function() { success(val); },
        Math.random() * 1000);
    });
}

//function fail() - predefined function to imitate
// failing promise returning
function fail() {
    return new Promise(function(success, failure) {
        failure(new Error('boom'));
    });
}
