import FormPage from "./FormPage";
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
export default function MainPage() {
    const navigate = useNavigate()
    const { Formlist } = useSelector((state) => state.FormDataReducer);
    const dispatch = useDispatch()
    const [questionList, setquestionList] = useState({
        Question1: "If you have problems with pain/aches,stiffnes,weakness or functional problems,describe this/these below.(List the symptoms in decending order with the most troblesome first)",
        answer1: "",
        Question2: "Have you been diagnoed with this problems?",
        answer2: "",
        Question3: "Did the problems a start after a physical trauma?",
        answer3: "",
        Question4: "Did the problem start after a mental trauma?",
        answer4: "",
        Question5: "How often do you experience the problem?",
        answer5: "",
        Question6: "When do you experience the problem?",
        answer6: "",
        Question7: "How intense is the experience of the problem on average on a 0-10 scale?",
        answer7: "",
    })
    const [addList, setAddList] = useState([])
    useEffect(() => {
        if (Formlist.length > 0) {
            setAddList(Formlist)
        }
        else {
            setAddList([{ ...questionList, id: uuidv4() }])
        }
    }, [])
    const handleChange = (e, id, index) => {
        if (e.target.name == "answer1") {

            addList.forEach((item) => {
                console.log(item.id, id)
                if (item.id == id) {

                    addList[index][e.target.name] = e.target.value
                }
            })
        }
        else if (e.target.name == "answer2") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
        else if (e.target.name == "answer3") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
        else if (e.target.name == "answer4") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
        else if (e.target.name == "answer5") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
        else if (e.target.name == "answer6") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
        else if (e.target.name == "answer7") {
            addList.forEach((item) => {
                if (item.id == id) {
                    addList[index][e.target.name] = e.target.value
                }
            })

        }
    }
    const handleSubmit = () => {
        dispatch({ type: "Add", payload: addList })
        navigate('/Fromlist')
        // console.log(addList, 'list')

    }
    return (
        <div>
            {addList.map((item, index) => (
                <FormPage questions={item} index={index} handleChange={handleChange} />
            ))}
            <div className='container w-50  mb-2'>
                <div className='d-flex justify-content-center'>
                    <div className='add bg-primary text-white' onClick={() => setAddList([...addList, { ...questionList, id: uuidv4() }])}><AddIcon /></div>
                </div>
                <div className='d-flex  mt-2 justify-content-center'>
                    <button className='btn btn-default bg-primary text-white'>Back</button>
                    <button className='btn btn-default bg-primary text-white ml-2' onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>
    )
}
