//Task16
//Reliable Multiply

//function multiplicatorUnitFailure() sets error message
function multiplicatorUnitFailure() {
    this.message = 'not lucky';
}

//defining error prototype for multiplicatorUnitFailure
// object
multiplicatorUnitFailure.prototype = Object.create(Error.prototype);
multiplicatorUnitFailure.prototype.name = 'multiplicatorUnitFailure';

//function primitiveMultiply() multiplies arguments
// in approximately 50% cases, in other cases
// throws an exception
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new multiplicatorUnitFailure();
  }
}

//function reliableMultiply() tries to multiply its arguments
//until succeed
function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof multiplicatorUnitFailure) {
                console.log('Something went wrong: ' + error);
            } else {
                throw error;
            }
        }
    }
}
