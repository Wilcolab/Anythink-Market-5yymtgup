function toCamelCase(str) {
    if (str.length <= 3) return str;
    return str.slice(0, 3) + str.charAt(3).toUpperCase() + str.slice(4);
}

// Example usage
console.log(toCamelCase("setparams")); // Output: setParams