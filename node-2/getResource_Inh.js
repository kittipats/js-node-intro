import EventEmitter from 'events';
import util from 'util';

function getResource(m) {
    var maxEvents = m;
    var e = this; //Inherit method
    //var e = new EventEmitter(); //Instantiate method
    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function() {
            e.emit('data', ++count);
            if (count === maxEvents) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
}

//inherit EventEmitter
util.inherits(getResource, EventEmitter);
export default getResource;
