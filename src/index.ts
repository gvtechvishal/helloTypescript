/** Generic Interfaces */

/** consider we have one website and fetch a users and products as well like
 *
 * http://mywebsite.com/users
 * http://mywebsite.com/products
 */

// creating generic interface
interface Result<T> {
  //if we have error we have not data
  data: T | null;
  // somtime we got error when we calling backend services
  error: string | null;
}

// dummy function for fetching

function fetch<T>(url: string): Result<T> {
  return {
    data: null,
    error: null,
  };
}

// individual interface for showing user and product object

interface User {
  username: string;
}
interface Product {
  title: string;
}

let result = fetch<User>("url");

result.data?.username;

let result2 = fetch<Product>("url");
result2.data?.title;
