function focused() {
    const inputFields  = document.getElementsByTagName("input");
    const inputFieldsArr = Array.from(inputFields);

    inputFieldsArr.forEach((input) => {
        input.addEventListener("focus", inputFocus);
        input.addEventListener("blur", inputBlur);
    });

    function inputFocus(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.classList.add("focused");
    }

    function inputBlur(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.classList.remove("focused");
    }
}