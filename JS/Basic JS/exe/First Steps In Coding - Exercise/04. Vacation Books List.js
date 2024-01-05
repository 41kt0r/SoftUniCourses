function bookList (input){
    let bookPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let neededDays = bookPages /(pagesForHour*days);
    console.log(neededDays);
}
bookList(["432 ",
"15 ",
"4 "]
);