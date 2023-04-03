function converter(){
    let degreeValue = Number(document.getElementById("degreeValue").value);
    let celciusValue = (((degreeValue - 32)*5)/9);
    let result = document.getElementById("CelciusValue")
    result.innerHTML = celciusValue

}

