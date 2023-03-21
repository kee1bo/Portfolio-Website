import React from 'react'
import './Skills.css'
import {SiPytorch,SiTensorflow,SiPython,SiJavascript,SiPandas,SiScikitlearn,SiGooglecloud} from 'react-icons/si';
import {GrArchlinux} from 'react-icons/gr'
import {DiLinux} from 'react-icons/di'




const Skills = () =>(
    <div className='arrange'>
      <div>
      
        <h1 className='h1-g'> Technical Skills </h1>

        <div className='iconsd'>
      {/* <logosIcon icon={<SiPytorch/>}/> */}

      <Icons icons={<SiPython/>}/>    


      
      <Icons icons={<SiJavascript/>}/>

      <Icons icons={<SiPytorch/>}/>
      <Icons icons={<SiPandas/>}/>
      <Icons icons={<SiTensorflow/>}/>
      <Icons icons={<SiGooglecloud/>}/>

      <Icons icons={<SiScikitlearn/>}/>
      <Icons icons={<GrArchlinux/>}/>
      <Icons icons={<DiLinux/>}/>

      
    </div>
      </div>
    

    </div>
  );


const Icons = ({icons})=> {
  return (
    <div>
      <button className='butn-ic'>{icons}</button>
   
      {/* <button><SiPytorch/></button>
       <button><SiTensorflow/></button>  */}
    </div>
    ) 
  }





export default Skills;