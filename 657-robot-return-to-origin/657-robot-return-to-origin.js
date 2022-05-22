/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    let up = 0;
    let right = 0;

    let myArray = moves.split('');

    myArray.forEach(move => {
        switch(move){
            case 'U':
                up++;
                break;
            case 'D':
                up--;
                break;
            case 'R':
                right++;
                break;
            case 'L':
                right--;
                break;
            default:
                '';
        }
    });

    if (up == 0 && right == 0) {
        return true;
    } else {
        return false;
    }
};