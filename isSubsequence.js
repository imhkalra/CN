let output = [];
let getAllSubsequences = (s) => {
    if (s === "") return "";
    let sequenceArr = getAllSubsequences(s.slice(1));
    for (let sequence of sequenceArr) {
        output.push(s[0] + sequence);
    }
    return output;
}

console.log(getAllSubsequences('abc'));