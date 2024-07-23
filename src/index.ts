/**  When we work with null and undfined values some time we need to provide fallback default value *..
 *
 * see the below code user not provide and speed value
 */

let speed: number | null = null;

let ride = {
  /** we know that Logical || operate check truthy or falsy value
   * Falsy vlaue (null,undefined,'',false,0)
   *
   * see the 0 is falsy value.
   *
   * if user enter 0 the speed property become 30.
   *
   * how to solve this scenario?? like this
   *
   * speed : speed !== null ? speed : 30
   *
   * but in typescript we solve better way using
   * "NULLISH COALESCING OPERATOR"
   */
  speed: speed ?? 30,
  /** Upper line of code describe if the speed not null or undefined use speed value */
};
