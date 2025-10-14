/**
 * Converts a snake_case string to camelCase format.
 * 
 * @function camelCaseGenerator
 * @param {string} str - The input string in snake_case format (underscore-separated words)
 * @returns {string} The converted string in camelCase format
 * @throws {TypeError} Throws a TypeError if the input is not a string
 * @throws {Error} Throws an Error if the input is null or undefined
 * @example
 * // returns "helloWorld"
 * camelCaseGenerator("hello_world");
 * @example
 * // returns "myVariableName"
 * camelCaseGenerator("my_variable_name");
 * @example
 * // returns ""
 * camelCaseGenerator("");
 */

/**
 * Converts a snake_case string to dot.case format.
 * 
 * @function dotCaseGenerator
 * @param {string} str - The input string in snake_case format (underscore-separated words)
 * @returns {string} The converted string in dot.case format (dot-separated lowercase words)
 * @throws {TypeError} Throws a TypeError if the input is not a string
 * @throws {Error} Throws an Error if the input is null or undefined
 * @example
 * // returns "hello.world"
 * dotCaseGenerator("hello_world");
 * @example
 * // returns "my.variable.name"
 * dotCaseGenerator("my_variable_name");
 * @example
 * // returns ""
 * dotCaseGenerator("");
 */
function camelCaseGenerator(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (str == null) {
        throw new Error('Input cannot be null or undefined');
    }
    if (str === '') {
        return '';
    }
    // Assume input is in snake_case (underscore-separated)
    const words = str.split('_');
    const camelCased = words.map((word, index) => {
        const lowerWord = word.toLowerCase();
        if (index === 0) {
            return lowerWord;
        } else {
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        }
    }).join('');
    return camelCased;
}

function dotCaseGenerator(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (str == null) {
        throw new Error('Input cannot be null or undefined');
    }
    if (str === '') {
        return '';
    }
    // Assume input is in snake_case (underscore-separated)
    const words = str.split('_');
    const dotCased = words.map(word => word.toLowerCase()).join('.');
    return dotCased;
}
