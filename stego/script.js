const targetImage = document.querySelector("#targetImage");
targetImage.width = "200";
targetImage.height = "200";
const targetImageCtx = targetImage.getContext("2d");

targetImageCtx.beginPath();
targetImageCtx.rect(0, 0, targetImage.width, targetImage.height);
targetImageCtx.fillStyle = "red";
targetImageCtx.fill();

function imgToBinary(canvasCtx, contextParent) {
    const canvasImgData = canvasCtx.getImageData(0, 0, targetImage.width, targetImage.height).data;
    let binaryDataString = "";
    for (let i = 0; i < canvasImgData.length; ++i) {
        if ((i + 1) % 4 === 0) continue;

        let binaryValue = canvasImgData[i].toString(2);
        while (binaryValue.length < 8) {
            binaryValue = "0" + binaryValue;
        }
        binaryDataString += binaryValue;
    }
    console.log(binaryDataString.split(""));
    return binaryDataString.split("");
}
imgToBinary(targetImageCtx, targetImage);


for (let i = 0; i < 4 * (targetImage.width ** 2); ++i) {
    newImgDataData.push(0);
}
const newImgDataData = new Uint8ClampedArray();
const newImgData = new ImageData(newImgDataData, targetImage.width, targetImage.height);
targetImageCtx.putImageData(newImgData, targetImageCtx.width, targetImageCtx.height);
