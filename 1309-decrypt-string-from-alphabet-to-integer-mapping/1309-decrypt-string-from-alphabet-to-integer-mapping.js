/**
 * @param {string} s
 * @return {string}
 */
const map = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
}

const freqAlphabets = (s) => {
    let output = '' 
    let hash = ''
    for (let i = s.length -1; i >= 0; i--) {
        let ch = s[i]
        if (ch === '#') {
            hash = '#'
            continue
        }
        if (hash.length) {
            hash = ch + hash
            if (hash.length < 3) continue
            output = map[hash] + output
            hash = ''
            continue
        }
        output = map[ch] + output
    }
    return output
};