import React, { useEffect, useState } from "react";
import "../Visualizing.css"

const SelectionSort =(props)=>{

    var [array, newArray] = useState([100, 12, 500,76 ,90 ,80 ,5 ,9 , 10 ,20 , 890])

//     function swap(arr,xp, yp)
// {   
//     var temp = arr[xp];
//     arr[xp] = arr[yp];
//     arr[yp] = temp;
// }

useEffect(()=>{
    console.log(array)
    

},[array])

function selectionSort()

{


    setTimeout(()=>{let newArr = [...array]
    for (let i = 0; i < newArr.length; i++) {
        let lowest = i
        setTimeout(()=>{

            
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[lowest]) {
              lowest = j
            }
          }
          if (lowest !== i) {
            // Swap
            ;[newArr[i], newArr[lowest]] = [newArr[lowest], newArr[i]]
            setTimeout(() =>{
                newArray([...newArr])
            },10)
            
          }
        }, i*1000)
      }
    }, 500)
    
//     setTimeout(()=>{

//     let n =array.length
//     var i, j, min_idx;
    


    
//     for (i = 0; i < n-1; i++)
//     {
//         min_idx = i;
//         for (j = i + 1; j < n; j++){
//             // console.log(array)
//             if (array[j] < array[min_idx]){
//                 min_idx = j;
//             }
//         }
//             swap(array,min_idx, i);
//                 // var temp = newArr[min_idx];
//                 // newArr[min_idx] = newArr[i];
//                 // newArr[i] = temp;
                
//             let y = [...array]
//             setTimeout(()=>{
//                     newArray([...y]);
//                 },j*100);    
            
//     }

// }, 500)



}

return(
    <div className= "array-component">
    {array.map((element) =>{
        return <div className="array-bar"style={{backgroundColor: "black",height: `${element}px`, width:`${5}px`}}>
        {/* <div hidden="hidden"> {element} </div> */}
        <br></br>
        
    </div>
    
    
        
    }
)
}
<button onClick={selectionSort} >check array</button>
</div>
)

}
export default SelectionSort


