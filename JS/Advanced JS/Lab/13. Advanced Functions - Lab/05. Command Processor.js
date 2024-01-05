function solution() {
    let res = '';

    return{
        append: (str) => res += str,
        print: () => console.log(res),
        removeStart: (n) => (res = res.substring(n)), 
        removeEnd: (n) => (res = res.substring(0, res.length - n))
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeEnd(3);
//firstZeroTest.removeEnd(4);
firstZeroTest.print();
