function encodeAndDecodeMessages() {
    const buttonsRef = document.querySelectorAll("button");
    const textArea = document.querySelectorAll('textarea');

    const encodeButton = buttonsRef[0];
    const decodeButton = buttonsRef[1];

    const encodeTextArea = textArea[0];
    const decodeTextArea = textArea[1];

    encodeButton.addEventListener("click", encodeAndSendMSGHandler);
    decodeButton.addEventListener("click", decodeAndReadMSGHandler);

    function encodeAndSendMSGHandler(event) {
        let currentText = encodeTextArea.value;
        let encodeMSG = "";
        for(let ch of currentText) {
            let numValue = ch.charCodeAt();
            numValue += 1;
            encodeMSG += String.fromCharCode(numValue);
        }
        decodeTextArea.value = encodeMSG;
        encodeTextArea.value = '';
    }

    function decodeAndReadMSGHandler(event) {
        let currentValue = decodeTextArea.value;
        let decodeMSG = "";
        for(let ch of currentValue) {
            let numValue = ch.charCodeAt();
            numValue --;
            decodeMSG += String.fromCharCode(numValue);
        }
        decodeTextArea.value = decodeMSG;
    }
}