function solve(str1, str2, str3){
    let len1 = str1.length;
    let len2 = str2.length;
    let len3 = str3.length;

    let totalLength = len1 + len2 + len3;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);

}
solve('pasta', '5', '22.3');