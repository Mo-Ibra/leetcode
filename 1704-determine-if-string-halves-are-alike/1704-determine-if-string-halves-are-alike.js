/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let makeItTwo = [];

    let lenghtOfString = s.length;

    let firstSlice = s.slice(0, lenghtOfString / 2);
    let secondSlice = s.slice(lenghtOfString / 2, lenghtOfString);

    makeItTwo.push(firstSlice);
    makeItTwo.push(secondSlice);

    let result = [];

    makeItTwo.map((char) => {
        let increment = 0;
        char.split('').forEach(c => {
            if (vowels.includes(c)) {
                increment++;
            }
        });
        result.push([increment]);
    });

    if (result[0][0] === result[1][0]) {
        return true;
    } else {
        return false;
    }

};