/* 2725. Interval Cancellation
 * Difficulty - Easy

 * Given a function (fn), an array of arguments (args), and an interval time (t), 
 * return a cancel function (cancelFn).
 * 
 * After a delay of (cancelTimeMs), the returned cancel function (cancelFn) will be invoked.
 * 
 * setTimeout(cancelFn, cancelTimeMs)
 * 
 * The function (fn) should be called with (args) immediately and then called again 
 * every (t) milliseconds until (cancelFn) is called at (cancelTimeMs) ms.
*/

const cancellable = (fn, args, t) => {
    fn(...args);

    let intervalFn;
    
    const start = () => {
        intervalFn = setInterval(() => fn(...args), t)
    }
    
    const cancelFn = (cancelTimeMs) => {
        setTimeout(() => {
            clearInterval(intervalFn)
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
const cancelTimeMs1 = 30;
const cancelTimeMs2 = 35;

const cancel = cancellable(fn, args, 10);
setTimeout(cancel, cancelTimeMs2); // Should print 48 a total of 4 times (once immediately and then every 10ms until cancellation at 35ms)

const cancel2 = cancellable(fn2, args2, 40);
setTimeout(cancel2, cancelTimeMs1); // Should print 21 only once (cancelled before it can run again)

