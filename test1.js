let arr =[1,3,5,2,6,10]
let target=10;

const addNumbers = (arr,target)=> {
    let result= []
    for ( i= 0; i < arr.length;i+=1) {
        for (j = 0; j < arr.length; j += 1) {
            if (i != j  && (arr[i] + arr[j]) === target) {
               
                result.push(i,j)
            }
        }
    }
    let response = result.filter((item,index)=>{   
        return result.indexOf(item) === index;
    })
  console.log(response)
}

addNumbers(arr,target)