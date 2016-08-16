//Task17
//The locked box

//Initializing box object
var box = {
    locked: true,
    unlock: function() {
        this.locked = false;
    },
    lock: function() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error('Locked!');
        }
        return this._content;
    }
};

//function withBoxUnlocked() manages box object using argument
// as action to apply to box
function withBoxUnlocked(body) {
    try {
        box.unlock();
        body();
    } catch (e) {
        throw e;
    } finally {
        box.lock();
    }
};

//Putting some gold to the box
withBoxUnlocked(function() {
    box.content.push('gold piece');
});

//Testing Error
try {
    withBoxUnlocked(function() {
        throw new Error('Pirates on the horizon! Abort!');
    });
} catch (e) {
    console.log('Error raised:', e);
};
