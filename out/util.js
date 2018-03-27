function replaceZenkakuToHankaku(str) {
    return str
        .replace(/１/g, "1").replace(/２/g, "2").replace(/３/g, "3").replace(/４/g, "4").replace(/５/g, "5")
        .replace(/６/g, "6").replace(/７/g, "7").replace(/８/g, "8").replace(/９/g, "9").replace(/０/g, "0")
        .replace(/　/g, "")
        .replace(/\s/g, "");
}
function convertHeiseiYearToYear(heiseiYear) {
    return heiseiYear + 1988;
}
function convertNengouToYear(nengoStr) {
    let s = replaceZenkakuToHankaku(nengoStr);
    let results = s.match(/平成[1-9]+年[1-9]+月/g);
    if (!results)
        return null;
    let result = results[0];
    let heiseiYearStr = result.replace(/平成([1-9]+)年[1-9]+月/, "$1");
    let heiseiYear = Number.parseInt(heiseiYearStr);
    let year = convertHeiseiYearToYear(heiseiYear);
    let monthStr = result.replace(/平成[1-9]+年([1-9]+)月/, "$1");
    let month = Number.parseInt(monthStr);
    let date = new Date();
    date.setFullYear(year, month - 1, 1);
    return date;
}
let input = "人事　平成３年　１２月付";
let date = convertNengouToYear(input);
console.log(date.getFullYear() + ", " + date.toString());
//# sourceMappingURL=util.js.map