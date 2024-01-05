function solve(path) {

    let lastSlashIndex = path.lastIndexOf('\\');
    let lastPointIndex = path.lastIndexOf('.');

    let fileName = path.substring(lastSlashIndex+1, lastPointIndex);
    let extension = path.substring(lastPointIndex + 1);
    console.log("File name: " + fileName);
    console.log("File extension: " + extension);
}
solve('C:\\Internal\\training-internal\\Template.pptx');