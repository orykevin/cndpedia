import logo from './logo.svg';
import './App.css';
import useFetch from './component/useFetch';
import useFetch2 from './component/useFetch copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSearch,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import icon from "./img/catdog-ico.svg"
import {useState,useEffect} from "react"
import BrProfile from './component/brProfile';
import BrInfo from './component/brInfo';
import BrInfo2 from './component/brInfo2';
import SearchIcon from './component/searchIcon';
import Credit from './component/credit';
import AllBreedImage from './component/AllBreedImage';
function App() {
  const imagenew2 = "https://www.thegreatcat.org/wp-content/uploads/2020/05/Malayan-Cat.jpg"
  const imagenew = "https://burmesecat.org/wp-content/uploads/photo-gallery/index%20slider/Tanzie.jpg"
  const [inputSearch,setInput] = useState("")
  const [category,setCateg] = useState("")
  const [anim,setAnim] = useState(false)
  const [dataSlice,setSlice] = useState({
    start:0,
    end:9
  })
  const [breedInfo,setInfo] = useState({
    name:"Shiba Inu",
    img:"https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
    group:"Non-Sporting",
    trait:"Charming,Fearless,Keen",
    life:"12-16 years",
    for:"Hunting in the mountains of Japan,Alert Watchdog",
    weight:"8-10",
    height:"23-26"
  })
  const [breedInfocat,setInfocat] = useState({
    name:"Shiba Inu",
    img:"https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
    desc:"Non-Sporting",
    trait:"Charming,Fearless,Keen",
    life:"12-16 years",
    weight:"8-10",
  })
  const [credit,setCredit] = useState(false)
  const [pageAll,setPage] = useState(1);
  const [showInfo,setShow] = useState(false)
  const [showInfo2,setShow2] = useState(false)
  const [showAll,setAll] = useState(0)
  const [catDog,setcatDog] = useState("dog");
  const {data,loading,error} = useFetch("https://api.thedogapi.com/v1/breeds?api_key=880ebe23-f231-403c-b679-5406f7bd993d")
  const {data2,loading2,error2} = useFetch2("https://api.thecatapi.com/v1/breeds?api_key=f9c76eff-a967-483a-9fec-98fac9c7dbd4")
  if(error) console.log(error)
  if(loading) return <h1 className='load-screen'>LOADING ...</h1>
  /*if(data) console.log(data.filter((n)=>{
    return n.breed_group === "Non-Sporting"
  }))*/
  if(error2) console.log(error2)
  if (loading2) return <h1 className='load-screen'>LOADING ...</h1>
  const newData =[];
  newData.push(data);
  const filterBreeds = (group) =>{
    console.log(group)
    newData[0].filter((n)=>{
      return n.breed_group === group
    })
    console.log(newData[0].filter((n)=>{
      return n.breed_group === group
    }))
  }
  const newArray = [0,1,2,3,4,5,6,7,8,9,10,11];
  const newArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  const checkWidth = () =>{
    if(window.innerWidth > 1023){
      return true
    }else{
      return false
    }
  }
  const setProf = (ids)=>{
    return{
      name:newData[0][ids].name,
      img:newData[0][ids].image.url,
    }
  }
  const setProf2 = (ids)=>{
    return{
      name:ids.name,
      img:ids.image.url,
    }
  }
  const setProfcat = (ids)=>{
    if(ids === 41){
      return{
        name:data2[ids].name,
        img:imagenew2,
      }
    }
    else if(ids === 30){
      return{
        name:data2[ids].name,
        img:imagenew,
      }
    }else{
    return{
      name:data2[ids].name,
      img:data2[ids].image.url,
    }}
  }
  const setProf2cat = (ids)=>{
    if(ids.id === "ebur" || ids.id ==="mala"){
    return{
      name:ids.name,
      img:ids.id === "ebur" ? imagenew : imagenew2,
    }}else{
      return{
        name:ids.name,
        img:ids.image.url
      }
    }
  }
  const settingInfo = (i)=>{
    setInfo({
    name:newData[0][i].name,
    img:newData[0][i].image.url,
    group:newData[0][i].breed_group,
    trait:newData[0][i].temperament,
    life:newData[0][i].life_span,
    for:newData[0][i].bred_for,
    weight:newData[0][i].weight.metric+" kg",
    height:newData[0][i].height.metric+" cm"
    });
    setShow(true);
  }
  const filterInfo = (info) => {
    setInfo({
      name:info.name,
      img:info.image.url,
      group:info.breed_group,
      trait:info.temperament,
      life:info.life_span,
      for:info.bred_for,
      weight:info.weight.metric+" kg",
      height:info.height.metric+" cm"
    });
    setShow(true);
    }

    const settingInfocat = (i)=>{
      if(i === 30 || i === 41){
        setInfocat({
          name:data2[i].name,
          img:i === 30 ? imagenew : imagenew2,
          desc:data2[i].description,
          trait:data2[i].temperament,
          life:data2[i].life_span,
          weight:data2[i].weight.metric+" kg",
          });
          setShow2(true);
      }else{
      setInfocat({
      name:data2[i].name,
      img:data2[i].image.url,
      desc:data2[i].description,
      trait:data2[i].temperament,
      life:data2[i].life_span,
      weight:data2[i].weight.metric+" kg",
      });
      setShow2(true);
    }}
    const filterInfocat = (info) => {
      if(info.id === "ebur" || info.id === "mala"){
        setInfocat({
          name:info.name,
          img:info.id === "ebur" ? imagenew : imagenew2,
          desc:info.description,
          trait:info.temperament,
          life:info.life_span,
          weight:info.weight.metric+" kg",
          });
          setShow2(true);
      }else {
      setInfocat({
      name:info.name,
      img:info.image.url,
      desc:info.description,
      trait:info.temperament,
      life:info.life_span,
      weight:info.weight.metric+" kg",
      })};
      setShow2(true);
      }
  /*if(category === ""){
    newData[0].filter((n)=>{
      return true
    })
  }else if(category !== ""){
    newData[0].filter((n)=>{
      return n.breed_group === category
    })
  }*/
  const newFilter = () =>{
    if(category === ""){
      return(
      (checkWidth() ? newArray2 : newArray).map((i)=>{
        if(i+dataSlice.start < 172){
        return(
          <AllBreedImage data={i} dataSlice={dataSlice} settingInfo={settingInfo} setProf={setProf(i+dataSlice.start)} pageAll={pageAll}  />  
          )
        }
      }))
    }else{
      console.log("filtered")
      return(
        newData[0].filter((i)=>{
          return i.breed_group === category
        }).map((i)=>{
          console.log(i)
          return(
            <AllBreedImage data={i} dataSlice={dataSlice} filterInfo={filterInfo} setProf={setProf(i+dataSlice.start)} pageAll={pageAll}  />  
            )
        })
      )
    }
  }
  const newFiltercat = () =>{
      return(
        (checkWidth() ? newArray2 : newArray).map((i)=>{
        if(i+dataSlice.start < 67){
        return(
          <AllBreedImage data={i} dataSlice={dataSlice} settingInfocat={settingInfocat} setProf={setProfcat(i+dataSlice.start)} pageAll={pageAll}  />)}
      })
      )
    }
  
  /*if (data) console.log(data.filter((i)=>{
    if(typestring === ""){
      return false
    }else if(i.name.toLocaleLowerCase().includes(typestring.toLocaleLowerCase())){
      return i;
    }}))*/
  const searchingFilter = () =>{
    return(
    newData[0].filter((i)=>{
      if(inputSearch === ""){
        return false;
      }else if(i.name.toLowerCase().includes(inputSearch.toLowerCase()))
      return i;
    }).slice(0,8).map((i)=>{
      return (
        <div onClick={()=>filterInfo(i)}>
          <SearchIcon setProf={setProf2(i)} />
        </div>
      )
    }))
  }
  const searchingFiltercat = () =>{
    return(
    data2.filter((i)=>{
      if(inputSearch === ""){
        return false;
      }else if(i.name.toLowerCase().includes(inputSearch.toLowerCase()))
      return i;
    }).slice(0,8).map((i)=>{
      return (
        <div onClick={()=>filterInfocat(i)}>
          <SearchIcon setProf={setProf2cat(i)} />
        </div>
      )
    }))
  }
  const checkPage = () =>{
    if(showAll === 1 && pageAll < (checkWidth() ? 6 : 15)){
      return true
    }else if(showAll === 2 && pageAll < (checkWidth() ? 3 : 6)){
      return true
    }else {
      return false;
    }
  }
  return (
    <div className="App">
      <div className={`nav ${showInfo || showInfo2 || credit ? "nav-fix" : ""}`}>
        <img src={icon} alt="" onClick={()=>filterInfo(newData[0][0])}/>
        <h1>CNDPedia</h1>
        {credit && <h2 className='nav-close-btn' onClick={()=>setCredit(false)}>x</h2>}
        {!credit && <FontAwesomeIcon icon={faBars} className='nav-icon' onClick={()=>setCredit(true)}/>}
      </div>
      {credit ? <Credit /> : ""}
      {showAll > 0 && <div>
        <div className='all-header'>
        <FontAwesomeIcon icon={faChevronLeft} className='all-back-btn' onClick={()=>{setAll(0);setCateg("");setPage(1);setSlice({start:0,end:9})}}/>
        <h3 className='h-header'>All {showAll === 1 ? "Dog" : "Cat"} Breeds</h3>
        </div>
        {showAll === 1 ? 
        <div className='all-select-cont'>
          <span>Sort Breeds by Group</span>
          <select name="" id="" onChange={(e)=>{setCateg(e.target.value);setAnim(true)}}>
            <option value="" selected>--none--</option>
            <option value="Working">Working</option>
            <option value="Herding">Herding</option>
            <option value="Hound">Hound</option>
            <option value="Sporting">Sporting</option>
            <option value="Non-Sporting">Non-Sporting</option>
            <option value="Toy">Toy</option>
            <option value="Terrier">Terrier</option>
          </select>
        </div>
         :""}
        <div className='all-cont'>
        {showAll === 1 ? newFilter() : showAll === 2 ? newFiltercat() : ""}
        </div>
        {category === "" ?<div className='next-cont'>
          <FontAwesomeIcon icon={faChevronLeft} className="next-btn" onClick={()=> {if (pageAll !== 1){setSlice({start:dataSlice.start-(checkWidth() ? 30 : 12),end:dataSlice.end-(checkWidth() ? 30 : 12)});setPage(pageAll-1);setAnim(true)}}} />
          <p>{pageAll} / {showAll === 1 ? (checkWidth() ? "6" :"15") : (checkWidth() ? "3":"6")}</p>
          <FontAwesomeIcon icon={faChevronRight} className="prev-btn" onClick={()=> {
            if(checkPage()){
            setSlice({start:dataSlice.start+(checkWidth() ? 30 : 12),end:dataSlice.end+(checkWidth() ? 30 : 12)});
            setPage(pageAll+1);
            setAnim(true)
          }
            }
            }/>
        </div>:""}
        </div>}
      {showAll === 0 && <section className='main-sec'>
      <div className='search-section'>
      <div className='search-head'>
        <h3>Search breeds by name</h3>
        <select name="" id="" onChange={(e)=> setcatDog(e.target.value)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div className={`search-bars ${inputSearch !== "" ? "searching" : ""}`}>
        <input type="text" value={inputSearch} placeholder={`input ${catDog} breeds`} onChange={(e)=>setInput(e.target.value)} />
        {inputSearch !== "" ? <h4 className='exit-btn' onClick={()=>setInput("")}>x</h4> : ""}
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        { inputSearch !== "" ? <div className='result-bar'>
          {catDog === "dog"  ? searchingFilter() :searchingFiltercat()}
      </div>:""}
      </div>
      </div>
      <div className='top-all-cont'>
      <div className='top-sect'>
        <h3>Top Dog Breeds</h3>
        {data ? <div className='top-cont'>
        <span onClick={()=>setAll(1)}>view all breeds</span>
        <div className='card-breeds-cont' onClick={()=>settingInfo(104)}>
        <BrProfile setProf={setProf(104)}  />
        </div>
        <div className='card-breeds-cont' onClick={()=>settingInfo(82)}>
        <BrProfile setProf={setProf(82)}   />
        </div>
        <div onClick={()=>settingInfo(86)}>
        <BrProfile setProf={setProf(86)}  />
        </div>
        <div onClick={()=>settingInfo(80)}>
        <BrProfile setProf={setProf(80)}   />
        </div>
        <div onClick={()=>settingInfo(28)}>
        <BrProfile setProf={setProf(28)}   />
        </div>
        <div onClick={()=>settingInfo(146)}>
        <BrProfile setProf={setProf(146)}  />
        </div>
        <div onClick={()=>settingInfo(134)}>
        <BrProfile setProf={setProf(134)}  />
        </div>
        <div onClick={()=>settingInfo(144)}>
        <BrProfile setProf={setProf(144)}  />
        </div>
        </div> : ""}
      </div>
      <div className='top-sect'>
        <h3>Top Cat Breeds</h3>
        {data ? <div className='top-cont'>
        <span onClick={()=>setAll(2)}>view all breeds</span>
        <div className='card-breeds-cont' onClick={()=>settingInfocat(0)}>
        <BrProfile setProf={setProfcat(0)}  />
        </div>
        <div className='card-breeds-cont' onClick={()=>settingInfocat(2)}>
        <BrProfile setProf={setProfcat(2)}   />
        </div>
        <div onClick={()=>settingInfocat(42)}>
        <BrProfile setProf={setProfcat(42)}  />
        </div>
        <div onClick={()=>settingInfocat(39)}>
        <BrProfile setProf={setProfcat(39)}   />
        </div>
        <div onClick={()=>settingInfocat(40)}>
        <BrProfile setProf={setProfcat(40)}   />
        </div>
        <div onClick={()=>settingInfocat(45)}>
        <BrProfile setProf={setProfcat(45)}  />
        </div>
        <div onClick={()=>settingInfocat(32)}>
        <BrProfile setProf={setProfcat(32)}  />
        </div>
        <div onClick={()=>settingInfocat(33)}>
        <BrProfile setProf={setProfcat(33)}  />
        </div>
        </div> : ""}
      </div>
      </div>
      </section>
      }
      {showInfo && <BrInfo breedInfo={breedInfo} setShow={setShow} />}
      {showInfo2 && <BrInfo2 breedInfocat={breedInfocat} setShow2={setShow2} />}
    </div>
    
  );
}

export default App;
