import React ,{useEffect,useState} from 'react';
import axios from 'axios';

function useFetch2(url) {

  const [data2,setData] = useState(null);
  const [loading2,setLoad] = useState(false)
  const [error2,setError] = useState(null)

  useEffect(()=>{
    setLoad(true);
    axios.get(url).then((response)=>{
      setData(response.data)
    }).catch((err)=>{
      setError(err)
    }).finally(()=>{
      setLoad(false);
    })
  },[url])

  return {data2,loading2,error2};
}

export default useFetch2;
