function isPalindrome(s: string): boolean {
    let j = s.length - 1;
    for (let i = 0; i < j; i++, j--) {
        while (i < j && !isAlphaNumeric(s[i])) {
            i++;
        }
        while (i < j && !isAlphaNumeric(s[j])) {
            j--;
        }
        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};

function isAlphaNumeric(value: string) {
    return value.match(/^[A-Za-z0-9]+$/);
}