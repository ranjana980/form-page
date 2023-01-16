import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Formlist() {
  const navigate = useNavigate()
  const { Formlist } = useSelector((state) => state.FormDataReducer);
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Form Summary</h2>
     <div  className='p-3'>
      {/* <Link to={'/'}> */}

        <button className='btn btn-default bg-primary  text-white' onClick={()=>navigate('/')}>Go Back</button>
        {/* </Link> */}
     <table style={{width:'100%'}}>
        {Formlist.map((item, index) => (
          <>
            <h5>Form No: {index+1}</h5>
            <tr><th style={{width:'50%'}}><h6 className='p-3' style={{background:'skyblue',}}>Qus:-1. {item.Question1}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans: {item.answer1}</h6></td></tr>
            <tr><th style={{width:'50%'}}><h6 className='p-3'style={{background:'skyblue',}}>Qus:-2. {item.Question2}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer2}</h6></td></tr>
            <tr><th style={{width:'50%'}}><h6  className='p-3' style={{background:'skyblue',}}>Qus:-3. {item.Question3}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer3}</h6></td></tr>
            <tr ><th style={{width:'50%'}}><h6  className='p-3' style={{background:'skyblue',}}>Qus:-4. {item.Question4}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer4}</h6></td></tr>
            <tr><th style={{width:'50%'}}><h6  className='p-3' style={{background:'skyblue',}}>Qus:-5. {item.Question5}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer5}</h6></td></tr>
            <tr><th style={{width:'50%'}}><h6  className='p-3' style={{background:'skyblue',}}>Qus:-6. {item.Question6}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer6}</h6></td></tr>
            <tr><th style={{width:'50%'}}><h6  className='p-3' style={{background:'skyblue',}}>Qus:-7. {item.Question7}</h6></th><td><h6 className='ml-2 p-3'style={{background:'lightgreen',}} >Ans:-{item.answer7}</h6></td></tr>
            </>
        ))}
      </table>
     </div>

    </div>
  )
}
