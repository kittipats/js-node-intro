import * as should from 'should';
import { evenDoubler, evenDoublerSync } from './mathFun';

describe('MathFun', function() {
    describe('1) Synchronous test', function() {
        it('should double even numbers correctly', function() {
            evenDoublerSync(2).should.equal(4);
        });
        it('should throw on odd numbers', function(done) {
            (function() { evenDoublerSync(3); }).should.throw(/Odd/);
            done();
        })
    })

    describe('2) Asynchronous test', function() {
        it('should double even numbers correctly', function(done) {
            evenDoubler(2, function(err, results) {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });
        it('should throw on odd numbers', function(done) {
            evenDoubler(3, function(err, results) {
                should.exist(err);
                should.throws(/Odd/);
                done();
            });
        })
    })
})
