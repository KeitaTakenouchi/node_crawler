
function replaceZenkakuToHankaku(str: string): string {
    return str
        .replace(/１/g, "1").replace(/２/g, "2").replace(/３/g, "3").replace(/４/g, "4").replace(/５/g, "5")
        .replace(/６/g, "6").replace(/７/g, "7").replace(/８/g, "8").replace(/９/g, "9").replace(/０/g, "0")
        .replace(/　/g, "")
        .replace(/\s/g, "")
        ;
}

function convertHeiseiYearToYear(heiseiYear: number): number {
    return heiseiYear + 1988;
}

function convertNengouToYear(nengoStr: string): Date {
    let s: string = replaceZenkakuToHankaku(nengoStr);
    let results = s.match(/平成[1-9]+年[1-9]+月/g);
    if (!results) return null;

    let result: string = results[0];

    let heiseiYearStr: string = result.replace(/平成([1-9]+)年[1-9]+月/, "$1");
    let heiseiYear: number = Number.parseInt(heiseiYearStr);
    let year: number = convertHeiseiYearToYear(heiseiYear);

    let monthStr: string = result.replace(/平成[1-9]+年([1-9]+)月/, "$1");
    let month: number = Number.parseInt(monthStr);

    let date = new Date();
    date.setFullYear(year, month - 1, 1);
    return date;
}

let input = "人事　平成３年　１２月付";
let date: Date = convertNengouToYear(input);
console.log(date.getFullYear() + ", " + date.toString());


