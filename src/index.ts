/** never type::--  which represent values that never occure
 *
 * this type not use quite often...
 *
 * let see some examples...
 */

/**
 * we define function that process the events continuously.
 * constantly watching a message queue waiting for next events
 */

function processEvents(): never {
  while (true) {
    // Read the msg from a queue
  }
}

processEvents();

/** after calling the function we known that below line never executing because function
 * never returns because we have infinet loop..
 *
 * so we have apply return type "never" to function tell the compiler this function never returns..
 *
 * after the give return type "never" to function below line blur see
 */
console.log("Hello world");

/** This is benefit of use never type that detect the unreachable code but
 * we configure the tsconfig.json file
 */

/** see the below example aslo like  */

function reject(message: string): never {
  throw new Error(message);
}

/** If we call like
 *
 * reject(.....);
 * console.log('hellow world')
 *
 * after the calling function we dont reach below code
 *
 * that why we use type never that show unreachable code.
 */
