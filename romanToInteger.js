let ref = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM' : 900
}

var romanToInt = function (s) {
    if (s.length <= 0) return 0;
    if ((s[0] + s[1]) in ref) {
        return ref[s[0] + s[1]] + Number(romanToInt(s.slice(2)));
    }
    return ref[s[0]] + Number(romanToInt(s.slice(1)));
};

console.log(romanToInt('MCMXCIV'));
//1000+900+90+4