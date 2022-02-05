import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=>void,dependency:any[])=>{
    const count = useRef(0)
    useEffect(()=>{
        count.current +=1;
    })


    useEffect(()=>{
        if (count.current >1){
            fn()//不可变数据
        }
    },[fn,dependency])
}

export {useUpdate}

