function Union(A,B) 
{
    let A_Union_B = [];
    let mergeArray = A.concat(B);
    let mergeArrayLength = mergeArray.length;
    const union = {};

    while(mergeArrayLength--) 
    {
        let item = mergeArray[mergeArrayLength];

        if(!union[item])
        {
            A_Union_B.unshift(item);
            union[item] = true;
        }
    }

    return A_Union_B;

}

let finalUnion = Union([1,2,3,4,5],[3,4,5,6]);

// console.log(finalUnion);

console.log("-------------------------------------------------")

function mergee() {
    let data1 = [1,2,3,4,5];
    let data2 = [3,4,5,6];
    // let data3 = [];
    let Unversal = [1,2,8,7,5];

    let counter = 0; // flag value
    let aunionb = new Array();

    for (var x in data1) {
        counter = counter + 1;
        aunionb[x] = data1[x];
    }
    for (var y in data2) {
        
        aunionb[counter] = data2[y];
        counter = counter + 1;
    }

    for (var z in Unversal) {
        aunionb[counter] = Unversal[z];
        counter = counter + 1;
    }

    let filter = aunionb.filter((c,index) => {
        return aunionb.indexOf(c) === index;
    });
    console.log(filter.sort());
}
mergee();

// function testcounter() {

//     let counterArr = [0,1,2,3,4,5];
//     let lengthofCounterArray = counterArr.length;
//     let member = 0;
//     // for(i = 0; i <lengthofCounterArray; i++){
//     //     console.log(counterArr[i]);
//     // }
//     for (var x in counterArr) { 
//         member = member + 1;
        
//        console.log(counterArr[x]);
//     }
//     console.log(member);
// }
// // testcounter();