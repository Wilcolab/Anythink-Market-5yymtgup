function toCamelCase(str) {
    // Split on spaces, underscores, or hyphens
    const words = str.split(/[\s_-]+/);
    // Filter out empty strings in case of multiple separators
    const filteredWords = words.filter(word => word.length > 0);
    // Convert to camelCase
    return filteredWords.map((word, index) => {
        const lower = word.toLowerCase();
        if (index === 0) {
            return lower;
        } else {
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    }).join('');
}