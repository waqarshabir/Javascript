function sortArray(arr){
    let length= arr.length;
    for(let i = 0; i < length-1; i++){
        for(let j=i+1;j< length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                 arr[i] = arr[j];
                  arr[j] = temp;
            }
        }

    }
    console.log(arr);
    
}
let arr = [10,4,5,6,7,9,3]
sortArray(arr)