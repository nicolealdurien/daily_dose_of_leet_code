/* 2621. Sleep
 * Difficulty - Easy
 * Given a positive integer millis, write an asynchronous function
 * that sleeps for (millis) milliseconds. It can resolve any value.
 */

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// Test
let t = Date.now();
sleep(300).then(() => console.log(Date.now() - t)); // Should print 300 or greater
