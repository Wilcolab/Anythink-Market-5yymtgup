/**
 * toKebabCase Function Description:
 * 
 * The toKebabCase function converts any string into kebab-case format.
 * Kebab-case is a naming convention where:
 * - All letters are lowercase
 * - Words are separated by hyphens (-)
 * 
 * The function should handle various input formats including:
 * - Strings with spaces: "Hello World" → "hello-world"
 * - Strings with underscores: "hello_world" → "hello-world"
 * - camelCase strings: "helloWorld" → "hello-world"
 * - PascalCase strings: "HelloWorld" → "hello-world"
 * - Mixed formats: "Hello_World Test" → "hello-world-test"
 * - Multiple separators: "hello__world  test" → "hello-world-test"
 */

/**
 * Pseudocode Outline:
 * 
 * FUNCTION toKebabCase(str):
 *   1. Handle edge cases (null, undefined, empty string)
 *   2. Insert hyphens before uppercase letters in camelCase/PascalCase
 *      - Replace each uppercase letter with a hyphen + lowercase letter
 *   3. Replace all non-alphanumeric characters (spaces, underscores, etc.) with hyphens
 *   4. Convert the entire string to lowercase
 *   5. Remove any consecutive hyphens (reduce multiple hyphens to single hyphen)
 *   6. Remove leading and trailing hyphens
 *   7. Return the kebab-case string
 * END FUNCTION
 */

/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} The string converted to kebab-case
 */
function toKebabCase(str) {
    // Handle edge cases
    if (!str || typeof str !== 'string') {
        return '';
    }

    return str
        // Insert a hyphen before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace spaces, underscores, and other non-alphanumeric chars with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Replace multiple consecutive hyphens with a single hyphen
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Example usage and test cases:
console.log(toKebabCase('Hello World'));           // "hello-world"
console.log(toKebabCase('hello_world'));           // "hello-world"
console.log(toKebabCase('helloWorld'));            // "hello-world"
console.log(toKebabCase('HelloWorld'));            // "hello-world"
console.log(toKebabCase('Hello_World Test'));      // "hello-world-test"
console.log(toKebabCase('hello__world  test'));    // "hello-world-test"
console.log(toKebabCase('getUserID'));             // "get-user-id"
console.log(toKebabCase(''));                      // ""

module.exports = toKebabCase;