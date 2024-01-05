function solution(number) {
    let sum = number;

    return function(num){
        return (sum += num);
    };
}

let add5 = solution(5);

console.log(add5(2));  