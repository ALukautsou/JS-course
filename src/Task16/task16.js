function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch(error) {
        if (error instanceof MultiplicatorUnitFailure) {
            return reliableMultiply(a, b);
        } else {
            throw error;
        }
    }
}