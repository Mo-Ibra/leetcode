/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    
    let StrToArray = s.split('');
    
    let lenghthOfLetter = s.length;
    let numberOfIncldes = 0;
    
    StrToArray.forEach(element => {
        if (element.includes(letter)) {
            numberOfIncldes++;
        }
    });

    return Math.floor(numberOfIncldes / lenghthOfLetter * 100);
};