let shape;
moveStep2 = () => {
    var input = document.getElementsByName("shape");
    var selectedId = "";
    for (var i = 0, l = input.length; i < l; i++) {
        console.log(input[i].checked);
        if (input[i].checked) {
            this.shape = input[i].value;
            selectedId = input[i].id;

        }
    }
    document.getElementById("shapeText").innerHTML = this.shape;
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById(selectedId + "-input").style.display = "block";

}
moveStep3 = () => {

    var shapeTxtValue;
    var shapeTxtResult;
    switch (this.shape) {
        case "rectangle":
            let length = document.getElementById("length").value;
            let width = document.getElementById("width").value;
            shapeTxtValue = "length of " + length;
            shapeTxtValue += " and width of " + width;
            shapeTxtResult = length * width;
            break;
        case "circle":
            let diameter = document.getElementById("diameter").value;
            shapeTxtValue = "diameter of " + diameter;
            shapeTxtResult = Math.PI * diameter;;
            break;
        case "square":
            let side = document.getElementById("side").value;
            shapeTxtValue = "side of " + side;
            shapeTxtResult =  side * side;
            break;
        case "ellipse":
            var aAxis = document.getElementById("aAxis").value;
            var bAxis = document.getElementById("bAxis").value;
            shapeTxtValue = "a-Axis of " + aAxis;
            shapeTxtValue += " b-Axis of " + bAxis;
            shapeTxtResult = Math.PI * aAxis * bAxis;
            break;
    }
    document.getElementById("shapeTxtValue").innerHTML = shapeTxtValue;
    document.getElementById("shapeValue").innerHTML = shapeTxtResult;
    document.getElementById("step3ShapeText").innerHTML = this.shape;
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
}

reset = () =>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step3").style.display = "none";
}
