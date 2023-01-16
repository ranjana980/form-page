import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function FormPage(props) {
    const { Formlist } = useSelector((state) => state.FormDataReducer);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({type:"Add",payload:questionList})
    },[])
    const [questionList,setquestionList]=useState(props.questions)
    

    return (
        <div className='main-div'>
            <div className='container form-page w-50  mt-5'>
                <div className='form-head'>
                    <h5 className='text-primary'>Pain & Functional Description</h5>
                    <h6>The description of the curren situation gives your Optimum<br />Trainer a picture of and clues to the underlying causes of your<br />problems</h6>
                </div>
                <div className='form-body mt-5'>
                    <h6 className='p-3'>{questionList.Question1}</h6>
                    <textarea defaultValue={questionList.answer1} className='w-100' name="answer1" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                    <div className='d-flex w-100 justify-content-between'>
                        <h6 className='p-1'>{questionList.Question2}</h6>
                        <div className='d-flex  justify-content-between'>
                            <div className='d-flex  justify-content-between'>
                                {console.log(questionList)}
                                <input defaultChecked={questionList.answer2==="Not relevent"?true:false} type='radio' name="answer2" value="Not relevent" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Not relevent</label>
                            </div>
                            <div className='d-flex  justify-content-around'>
                                <input type='radio' defaultChecked={questionList.answer2==="Yes"?true:false} name="answer2" value="Yes" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Yes</label>
                            </div>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' defaultChecked={questionList.answer2==="No" ?true:false} name="answer2" value="No" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>No</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                        <h6 className='p-3'>{questionList.Question3}</h6>
                        <div className='d-flex  justify-content-between'>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' defaultChecked={questionList.answer3==="Not relevent"?true:false} value="Not relevent" name="answer3" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Not relevent</label>
                            </div>
                            <div className='d-flex  justify-content-around'>
                                <input type='radio' defaultChecked={questionList.answer3==="Yes"?true:false} value="Yes" name="answer3" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Yes</label>
                            </div>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' value="No" defaultChecked={questionList.answer3==="No"?true:false}  name="answer3" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>No</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                        <h6 className='p-3'>{questionList.Question4}</h6>
                        <div className='d-flex  justify-content-between'>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' value="Not relevent" defaultChecked={questionList.answer4==="Not relevent"?true:false} name='answer4' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Not relevent</label>
                            </div>
                            <div className='d-flex  justify-content-around'>
                                <input type='radio' value="Yes" defaultChecked={questionList.answer4==="Yes"?true:false} name="answer4" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Yes</label>
                            </div>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' value="No"  defaultChecked={questionList.answer4==="No"?true:false} name='answer4' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>No</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-100'>
                        <h6 className='p-3'>{questionList.Question5}</h6>
                        <div className='d-flex  '>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio' defaultChecked={questionList.answer5==="Not relevent"?true:false} value="Not relevent" name="answer5" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3' >Not relevent</label>
                            </div>
                            <div className='d-flex  justify-content-around'>
                                <input type='radio'defaultChecked={questionList.answer5==="Daily"?true:false} value="Daily" name="answer5" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Daily</label>
                            </div>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio'defaultChecked={questionList.answer5==="Seeveral times/week"?true:false} value="Seeveral times/week" name='answer5' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>Seeveral times/week</label>
                            </div>
                            <div className='d-flex  justify-content-between'>
                                <input type='radio'defaultChecked={questionList.answer5==="A few times/month"?true:false} value="A few times/month" name="answer5" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-3'>A few times/month</label>
                            </div>
                        </div>
                        <div className='d-flex  '>
                            <input type='radio' defaultChecked={questionList.answer5==="A few times/year"?true:false} value="A few times/year" name="answer5" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            <label className='p-3'>A few times/year</label>
                        </div>
                    </div>
                    <div className='w-75'>
                        <h6 className='p-3'>{questionList.Question6}</h6>
                        <div className=' '>
                            <div className=''>
                                <input type='checkbox' defaultChecked={questionList.answer6==="Not relevent"?true:false} value="Not relevent" name='answer6' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-1'>Not relevent</label>
                            </div>
                            <div className='d-flex  '>
                                <input type='checkbox' defaultChecked={questionList.answer6==="When lying down"?true:false} value="When lying down" name='answer6' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-1'>When lying down</label>
                            </div>
                            <div className='d-flex  '>
                                <input type='checkbox' defaultChecked={questionList.answer6==="When sitting"?true:false} value="When sitting" name='answer6' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-1'>When sitting</label>
                            </div>
                            <div className='d-flex  '>
                                <input type='checkbox' defaultChecked={questionList.answer6==="Under standing"?true:false}  value="Under standing" name='answer6' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-1'>Under standing</label>
                            </div>
                            <div className='d-flex  '>
                                <input type='checkbox'defaultChecked={questionList.answer6==="In walking"?true:false} value="In walking" name='answer6' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                                <label className='p-1'>In walking</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-75'>
                        <h6 className='p-3'>{questionList.Question7}</h6>
                        <div className='d-flex justify-content-between w-25 pl-3'>
                            <div className=''>
                                <h6 className=''>1</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="1"?true:false}  value="1" name='answer7' onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>2</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="2"?true:false} value="2" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>3</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="3"?true:false} value="3" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>4</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="4"?true:false} value="4" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>5</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="5"?true:false} value="5" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>6</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="6"?true:false} value="6" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>7</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="7"?true:false} value="7" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>8</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="8"?true:false} value="8" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>9</h6>
                                <input type='radio' defaultChecked={questionList.answer7==="9"?true:false} value="9" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                            <div className=''>
                                <h6 className=''>10</h6>
                                <input type='radio' defaultChecked={questionList.answer6==="10"?true:false} value="10" name="answer7" onChange={(e)=>props.handleChange(e,questionList.id,props.index)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
