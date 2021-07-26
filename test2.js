let arr =["BACDABABCDFG"]
let arrTarget=["AB"];

const findOcurrency = (arr,arrTarget)=> {
    arrTarget = arrTarget.toString();
    arr = arr.toString();
    console.log("Se encontro " + arr.match(new RegExp(arrTarget, "g")) || [].length);

    var match = arr.match(new RegExp(arrTarget),"g")
    if(match){
        console.log("se encontro en " + match.index);
    }
  
}

findOcurrency(arr,arrTarget)