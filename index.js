import React,{useState} from 'react'
import "./index.css"


const useCases=[
  {
    id:1,
    key:"asdfjkl;"
  },
  {
    id:2,
    key:"asl; asl; asl;"
  },
  {
    id:3,
    key:"sdf sdf sdf"
  },
  {
    id:4,
    key:"jkl jkl jkl"
  },
  {
    id:5,
    key:"akl akl akl;"
  },
  {
    id:6,
    key:"dfjkl; dfjkl; dfjkl;"
  },
  {
    id:7,
    key:"asdf asdf asdf"
  },
  {
    id:8,
    key:"askl askl askl"
  },
  {
    id:9,
    key:"fjkl fjkl fjkl"
  },
  {
    id:10,
    key:"kfl; kfl; kfl;"
  },
  {
    id:11,
    key:"sjl sjl sjl"
  },
  {
    id:12,
    key:"asdfjkl;"
  },
  {
    id:13,
    key:"asl; asl; asl;"
  },
  {
    id:14,
    key:"sdf; sdf; sdf;"
  },
  {
    id:15,
    key:"jkl jkl jkl"
  },
  {
    id:16,
    key:"akl akl akl;"
  },
  {
    id:17,
    key:"dfjkl; dfjkl; dfjkl;"
  },
  {
    id:18,
    key:"asdf; asdf; asdf;"
  },
  {
    id:19,
    key:"askl askl askl"
  },
  {
    id:20,
    key:"fjkl fjkl fjkl"
  },
  {
    id:21,
    key:"kfl; kfl; kfl;"
  },
  {
    id:22,
    key:"asdfjkl;"
  },
  {
    id:23,
    key:"asl; asl; asl;"
  },
  {
    id:24,
    key:"sdf; sdf; sdf;"
  },
  {
    id:25,
    key:"jkl jkl jkl"
  },
  {
    id:26,
    key:"akl akl akl;"
  },
  {
    id:27,
    key:"dfjkl; dfjkl; dfjkl;"
  },
  {
    id:28,
    key:"asdf; asdf; asdf;"
  },
  {
    id:29,
    key:"askl; askl; askl;"
  },
  {
    id:30,
    key:"fjkl fjkl fjkl"
  },

]


function Home() {
  const [text,setText]=useState(0)
  const [inputValue,setInputValue]=useState("")
  const [bg,setBg]=useState(false)
  const [accuracy,setAccuracy]=useState(0)
  const [error,setError]=useState(0)
  const [kpressed,setKpressed]=useState(0)
  const[lesson,setLesson]=useState(1)
  const{key}=useCases[text]

  const textLen=useCases[text].key.length



  const onchangeText=(event)=>{
    setInputValue(event.target.value)

    if(event.target.value===useCases[text].key ){
      setText(prev=>prev+1)
      setInputValue("")
      const acc=Math.floor(((textLen-error) / textLen) *100)
      setAccuracy(acc)
      setError(0)
      setLesson(prev=>prev+1)
    }

  }

  const onchangekey=(event)=>{
    if(useCases[text].key.startsWith(event.target.value)){
      setBg(false)
    }else{
      setError(prev=>prev+1)
      setBg(true)
    }
    setKpressed(prev=>prev+1)

  }

  const bgColor=bg?"#ff3b26  ":"transparent"


  return (
    <div className='homebg-container'>
      <h1 className='heading'>Lessons: {lesson} / 30</h1>
      <div className='home-container'>
       <div className='key-text-container'>
        <p className='key-text'>{key}</p>
        </div>  
        <textarea className='text-area' style={{backgroundColor:bgColor}} onChange={onchangeText}  
        value={inputValue} onKeyUp={(event)=>onchangekey(event)}
         />
      </div>

      <div className='values-container'>
        <p className='accuracy'>Accuracy: {accuracy} %</p>
        <p className='accuracy'>Keys pressed: {kpressed} </p>
      </div>


    </div>
  )
}

export default Home