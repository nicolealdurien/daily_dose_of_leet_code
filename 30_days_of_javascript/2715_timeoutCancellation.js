/* 2715. Timeout Cancellation
 * Difficulty - Easy
 * Given a function (fn), an array of arguments(args), and a timeout (t) in milliseconds, 
 * return a cancel function (cancelFn).
 * 
 * After a delay of (cancelTimeMs), the returned cancel function (cancelFn) will be invoked
 * 
 * setTimeout(cancelFn, cancelTimeMs)
 * 
 * Initially, the execution of the function (fn) should be delayed by (t) milliseconds.
 * 
 * If, before the delay of (t) milliseconds, the function (cancelFn) is invoked, 
 * it should cancel the delayed execution of (fn). 
 * Otherwise, if (cancelFn) is not invoked within the specified delay (t), 
 * (fn) should be executed with the provided (args) as arguments.
 */

const cancellable = (fn, args, t) => {
    let delay;

    const start = () => {
        delay = setTimeout(() => fn(...args), t)
    }

    const cancelFn = (cancelTimeMs) => {
        setTimeout(() => {
            clearTimeout(delay)
        }, cancelTimeMs)
    }

    start();

    return cancelFn;
};

// Tests
const fn = (x, y, z) => console.log(x * y * z);
const fn2 = (x) => console.log(x / 2);
const args = [2, 4, 6];
const args2 = [42]
const cancelTimeMs = 30;

const cancel1 = cancellable(fn2, args2, 2);
setTimeout(cancel1, cancelTimeMs); // Should print 21

const cancel2 = cancellable(fn, args, 10);
setTimeout(cancel2, cancelTimeMs); // Should print 48

const cancel3 = cancellable(fn2, args2, 40);
setTimeout(cancel3, cancelTimeMs); // Should print nothing (cancelled before it runs)

