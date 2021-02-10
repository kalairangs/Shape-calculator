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

var shapeFactory = function (...args) {
    var shape = {};
    shape.length = args[0];
    shape.width = args[1];
    shape.diameter = args[0];
    shape.side = args[0];
    shape.aAxis = args[0];
    shape.bAxis = args[1];
  
    shape.printRecArea = function () {
      return this.length * this.width;
    };
    shape.printCircleArea = function () {
      return Math.PI * this.diameter;
    };
    shape.printsquareArea = function () {
      return this.side * this.side;
    };
    shape.printEllipseArea = function () {
      return Math.PI * this.aAxis * this.bAxis;
    };
    return shape;
  };

moveStep3 = () => {

    var shapeTxtValue;
    var shapeTxtResult;
    switch (this.shape) {
        case "rectangle":
            let length = document.getElementById("length").value;
            let width = document.getElementById("width").value;
            shapeTxtValue = "length of " + length;
            shapeTxtValue += " and width of " + width;
            let areaOfRec = shapeFactory(length, width);
             shapeTxtResult = areaOfRec.printRecArea();
            break;
        case "circle":
            let diameter = document.getElementById("diameter").value;
            shapeTxtValue = "diameter of " + diameter;
            let areaOfCir = shapeFactory(diameter);
             shapeTxtResult = areaOfCir.printCircleArea();
            break;
        case "square":
            let side = document.getElementById("side").value;
            shapeTxtValue = "side of " + side;
            let areaOfSquare = shapeFactory(side);
             shapeTxtResult = areaOfSquare.printsquareArea();
            break;
        case "ellipse":
            var aAxis = document.getElementById("aAxis").value;
            var bAxis = document.getElementById("bAxis").value;
            shapeTxtValue = "a-Axis of " + aAxis;
            shapeTxtValue += " b-Axis of " + bAxis;
            let areaOfElli = shapeFactory(aAxis,bAxis);
            shapeTxtResult = areaOfElli.printEllipseArea();
            break;
    }
    document.getElementById("shapeTxtValue").innerHTML = shapeTxtValue;
    document.getElementById("shapeValue").innerHTML = shapeTxtResult;
    document.getElementById("step3ShapeText").innerHTML = this.shape;
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
}

clearForm = () => {

    let shapes = document.getElementsByName("shape");
    for (let i = 0; i < shapes.length; i++) {
        document.getElementById(`${shapes[i].id}-input`).style.display = "none";
        shapes[i].checked = false;
    }
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
}
