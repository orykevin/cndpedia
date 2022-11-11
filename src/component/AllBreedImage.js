import React,{useState,useEffect} from 'react'
import BrProfile from "./brProfile"

export default function AllBreedImage({data,dataSlice,settingInfo,setProf,filterInfo,setProfCat,settingInfocat,pageAll}) {
    const [load,setLoad] = useState(false)
    const clickHandler = () =>{
        if(settingInfo !== undefined){
            settingInfo(data+dataSlice.start)
        }else if(filterInfo !== undefined){
            filterInfo(data)
        }else if(settingInfocat !== undefined){
            settingInfocat(data+dataSlice.start)
        }
    }
    useEffect(()=>{
        setLoad(false)
    },[pageAll])

  return (
        <div className='card-breeds-cont'  onClick={()=>{clickHandler()}}>
            {!load && <div className={`loading-cont`}>
              <div className='loadings'></div>
              <div className='white-box'></div>
            </div> }
            <div className='profile-cont' >
                <img onLoad={()=>setLoad(true)} src={setProf ? setProf.img : setProfCat.img} alt="" width="75px" height="75px"/>
                <p className='breeds-name'>{setProf ? setProf.name : setProfCat.name}</p>
            </div>
          </div>
  )
}
