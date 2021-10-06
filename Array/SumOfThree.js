let array = new Array(0, -1, 2, -3, 1);

function findTriplet(array){
    let flag = true;
    for(let i=0; i < array.length -2 ; i++){
        for(let j=i+1; j< array.length -1 ; j++){
            for( let k =j+1; k< array.length; k++){
                if( array[i]+ array[j] + array[k] === 0){
                    flag = false;
                    console.log("["+ array[i]+ ", "+ array[j]+ ", "+ array[k]+ "]");
                }
            }
        }
    }
    if(flag) console.log("No such triplet found");
}

findTriplet(array);