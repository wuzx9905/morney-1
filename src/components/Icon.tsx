import React from 'react';
// require( 'icons/tag.svg');  //svgo-loader; svg-sprite-loader(生成标签)
// require('icons/money.svg');
// require( 'icons/chart.svg')
//require 一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons',true,/\.svg$/));
}
catch (error){
    console.log(error)
}

type Props = {
    name?: string
}

const Icon = (props:Props)=>{
    return(
        <svg className="icon">
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    )
}

export default Icon;