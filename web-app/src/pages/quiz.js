import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import arrow from '../images/arrow_icon.png'
import logo from '../images/logo.png'
import false_icon from '../images/false.png'
import true_icon from '../images/true.png'
import false_red from '../images/false_red.png'
import true_green from '../images/true_green.png'

function Quiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/get-question')
            .then(res => {
                setQuestions(res.data)
            })
            .catch(err => {
                console.log(err)
            }
            )
    }, [])

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].correct_answer) {
            setScore(score + 1)
        }
        setAnswers([...answers, answer])
        setCurrentQuestion(currentQuestion + 1)
    }

    if (currentQuestion === 10) {
        return (
            <div className="flex flex-col w-[900px] bg-white shadow-lg rounded-[10px] my-20">
                <div className='flex flex-row items-center justify-between p-5 border-b-2 mx-5'>
                    <img src={logo} alt="logo" className="w-[63px]" />
                    <h1 className='text-[30px]'>Final Results</h1>
                    <div className='w-[63px]'/>
                </div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <div className='flex flex-row items-center justify-center p-5 w-[523px] h-[89px] bg-[#DE8B2A]'>
                        <h1 className='text-[40px] text-center text-white'>You scored {score}/10</h1>
                    </div>
                    <div className='flex flex-col mt-10 mx-20 border-t-2'>
                        {answers.map((answer, index) => (
                            <div key={index} className='flex flex-row items-center justify-between p-5 border-b-2 border-dotted'>
                                <div class="w-[85%] flex flex-row">
                                    <span className='text-[16px] text-[#9D9D9D] mr-2'>{index+1}.</span>
                                    <div>
                                        <p className='text-[16px] text-black'>{decodeURI(questions[index].question)}</p>
                                        <p className='text-[14px] text-[#9D9D9D]'>The correct answer is <span className={questions[index].correct_answer === 'True' ? 'text-[#4FBD1B]' : 'text-[#E04E10]'}>{questions[index].correct_answer}</span>. You answered <span className={answer === 'True' ? 'text-[#4FBD1B]' : 'text-[#E04E10]'}>{answer}</span></p>
                                    </div>
                                </div>
                                {answer === questions[index].correct_answer ? <img src={true_green} alt="true" className="w-[20px]"/> : <img src={false_red} alt="false" className="w-[20px]"/>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center w-full mb-10">
                    <button className='flex flex-row items-center p-5'>
                        <Link to="/" className='text-[30px] mr-3'>Play Again</Link>
                        <img src={arrow} alt="arrow" className="w-[40px]" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-[900px] h-[700px] bg-white shadow-lg rounded-[10px] ">
            <div className='flex flex-row items-center justify-between p-5 border-b-2 mx-5'>
                <img src={logo} alt="logo" className="w-[63px]" />
                <h1 className='text-[30px]'>Category: {questions[currentQuestion]?.category}</h1>
                <h1 className='text-[20px]'>{currentQuestion + 1} of 10</h1>
            </div>
            <div className='flex flex-row items-center justify-between p-5 h-full'>
                <h1 className='text-[40px] text-center'>{decodeURI(questions[currentQuestion]?.question)}</h1>
            </div>
            <div className='flex flex-row items-center mt-10 justify-center border-t-2 mx-5 p-5'>
                <button className='bg-[#4FBD1B] text-white p-3 mr-5  flex flex-row items-center' onClick={() => handleAnswer('True')}>
                    <img src={true_icon} alt="true" className="w-[20px] mr-3" />
                    True
                </button>
                <button className='bg-[#E04E10] text-white p-3 flex flex-row items-center' onClick={() => handleAnswer('False')}>
                    <img src={false_icon} alt="false" className="w-[20px] mr-3" />
                    False
                </button>
            </div>
        </div>
    )


}

export default Quiz