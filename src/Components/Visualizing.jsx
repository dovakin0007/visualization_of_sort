import React, { useState } from "react";
import { useEffect } from "react";
import MergeSort from "./SortingAlgorithms/MergeSort";
import SelectionSort from "./SortingAlgorithms/SelectionSort"
import "./Visualizing.css"

const  Visualizing = (props) =>{

    let[array, newArray]=useState([])
    useEffect(()=>{
    newArray([100, 12, 500, 76,90 ,80])
    }, [])



    const checkArrayIsSorted = (event)=>{
        event.preventDefault()
        let copiedArray = [...array]
    
        
        copiedArray.sort((a, b)=> a -b)
        console.log(copiedArray)
        // let MergeSortedArray = MergeSort(array)
        // console.log(ArrayIsSortedHelper(copiedArray, MergeSortedArray))
    

    }
    function ArrayIsSortedHelper(a, b){
        if(a == null || b == null) return false;
        if(a.length !== b.length) return false;
        for(let i = 0; i<a.length;i++) {
            if(a[i] !== b[i]) return false;
        }
        return true

    }
    return(<div >
        {/* {array.map((element, idx) =>{
            return <div className="array-bar" key = {idx} style={{backgroundColor: "black",height: `${element}px`, width:`${5}px`}}>
            <div hidden="hidden"> {element} </div>
            </div>
        
            
        }
    )
} */}
<SelectionSort props = {array}></SelectionSort>
<br/>
    {/* <button onClick={checkArrayIsSorted} >check array</button> */}

    
    </div>)
    
}

export default Visualizing