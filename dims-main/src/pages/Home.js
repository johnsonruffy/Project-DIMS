import { Link } from "react-router-dom";
import { useState, useReducer, useEffect, useRef } from "react";
import { deptSummary, reps, infos, gallery } from "./str";


function Home() {
    return (
        <div className="flex flex-col w-[100%] gap-y-[5vw]">
            <section className="flex flex-row justify-between items-center w-[100%] aspect-[1/0.4] pl-[5%] pr-[3%]">
                <div className="flex flex-col justify-between w-[40%] aspect-[1/1] pt-[6%] max-[601px]:w-[50%] max-[601px]:aspect-[1/0.9] max-[601px]:pt-[0%]">
                    <p className="text-[3.5vw] text-[#292d32] font-[Montserrat] font-bold min-[601px]:text-[2.5vw]">Welcome to the<br/>Department of<br/><span className="text-[#502369]">Information<br/>Technology</span></p>
                    <p className="text-[2.7vw] text-[#292d32] font-[Montserrat] font-medium min-[601px]:text-[1.8vw]">Manage and share informations<br/>related to the department<br/>seamlessly</p>
                    <Link className="w-[30%] py-[3%] flex justify-center items-center bg-[#502369] text-white rounded-[3px] text-[2vw] font-medium font-[Montserrat] min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Get Started</Link>
                </div>
                <div className="w-[55%] aspect-[1/0.6] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat max-[601px]:w-[50%] max-[601px]:aspect-[1/0.9]"></div>
            </section>
            <section className="w-[100%] aspect-[1/0.06] px-[5%] flex flex-row justify-between items-center max-[1280px]:flex-col max-[1280px]:aspect-[1/0.1]">
                <div className="w-[25%] h-[100%] pl-[2%] gap-x-[5%] flex flex-row justify-start items-center rounded-[3px] bg-white shadow-[0_0.2vw_0.3vw_0_rgba(0,0,0,0.5)] max-[1280px]:h-[30%] max-[1280px]:w-[100%] max-[1280px]:gap-x-[0%]">
                    <div className="bg-[url('/public/images/image2.png')] w-[20%] aspect-square bg-contain bg-no-repeat bg-center max-[1280px]:w-[20%]"></div>
                    <div className="w-[50%] aspect-[1/0.3] flex justify-center items-center break-words max-[1280px]:w-[75%] max-[1280px]:aspect-[1/0.2] max-[1280px]:py-[8%]">
                        <p className="break-words text-[4.1vw] font-[Montserrat] font-medium text-center min-[601px]:text-[3.1vw] min-[1280px]:text-[1.1vw]">Sponsored<br/><span className="text-[4.5vw] font-semibold text-[#00659f] min-[601px]:text-[3.5vw] min-[1280px]:text-[1.5vw]">By<br/>FUTA</span></p>
                    </div>
                </div>
                <div className="w-[25%] h-[100%] pl-[2%] gap-x-[5%] flex flex-row justify-start items-center rounded-[3px] bg-white shadow-[0_0.2vw_0.3vw_0_rgba(0,0,0,0.5)] max-[1280px]:h-[30%] max-[1280px]:w-[100%] max-[1280px]:gap-x-[0%]">
                    <div className="bg-[url('/public/images/image3.png')] w-[20%] aspect-square bg-contain bg-no-repeat bg-center max-[1280px]:w-[20%]"></div>
                    <div className="w-[50%] aspect-[1/0.3] flex justify-center items-center break-words max-[1280px]:w-[80%] max-[1280px]:aspect-[1/0.2]">
                        <p className="break-words text-[4.1vw] font-[Montserrat] font-medium text-center min-[601px]:text-[3.1vw] min-[1280px]:text-[1.1vw]">Department of<br/><span className="text-[4.5vw] font-semibold text-[#00659f] min-[601px]:text-[3.5vw] min-[1280px]:text-[1.5vw]">Information Technology</span></p>
                    </div>
                </div>
                <div className="w-[25%] h-[100%] pl-[2%] gap-x-[5%] flex flex-row justify-start items-center rounded-[3px] bg-white shadow-[0_0.2vw_0.3vw_0_rgba(0,0,0,0.5)] max-[1280px]:h-[30%] max-[1280px]:w-[100%] max-[1280px]:gap-x-[0%]">
                    <div className="bg-[url('/public/images/image4.png')] w-[20%] aspect-square bg-contain bg-no-repeat bg-center max-[1280px]:w-[20%]"></div>
                    <div className="w-[60%] aspect-[1/0.4] flex justify-center items-center break-words max-[1280px]:w-[75%] max-[1280px]:aspect-[1/0.2]">
                        <p className="break-words text-[4.1vw] font-[Montserrat] font-medium text-center min-[601px]:text-[3.1vw] min-[1280px]:text-[1.1vw]">Department of<br/><span className="text-[4.5vw] font-semibold text-[#00659f] min-[601px]:text-[3.5vw] min-[1280px]:text-[1.5vw]">Updated Information</span></p>
                    </div>
                </div>
            </section>
            <section className="w-[100%] aspect-[1/0.4] px-[5%] flex flex-col justify-around items-start max-[1280px]:aspect-[1/1.2]">
                <p className="text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw]">The Department</p>
                <div className="w-[100%] h-[70%] flex flex-row flex-wrap gap-x-[12%] gap-y-[2.8vw] justify-between max-[1280px]:gap-x-[10%] max-[1280px]:h-[85%]">
                    {deptSummary.map((summary)=> (
                        <div className="w-[25%] h-[45%] flex flex-col justify-between shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[3px] max-[1280px]:h-[30%] max-[1280px]:w-[45%]">
                            <div className={`w-[23%] h-[40%] flex justify-center items-center ${summary.style} rounded-tl-[0.5vw] rounded-br-[1.5vw]`}>
                                <p className="font-[Montserrat] text-[4vw] text-white min-[601px]:text-[3vw] min-[1280px]:text-[2vw]">{summary.no}</p>
                            </div>
                            <div className="w-[100%] h-[55%] flex flex-col items-center justify-between pb-[7%]">
                                <p className="text-[3.4vw] font-[Montserrat] font-semibold text-[#00659f] min-[601px]:text-[2.4vw] min-[1280px]:text-[1.4vw]">{summary.deptName}</p>
                                <div className="w-[80%]">
                                    <p className="text-[2vw] font-[Montserrat] font-normal text-black min-[601px]:text-[1.8vw] min-[1280px]:text-[0.9vw]">{summary.courseDetail} <span>...</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Slide1 css="w-[100%] aspect-[1/0.35] px-[5%] flex flex-col justify-around items-center max-[1280px]:aspect-[1/0.7]" headColor="text-black"/>
            <Slide2 css="w-[100%] aspect-[1/0.35] px-[5%] flex flex-col justify-around items-center max-[1280px]:aspect-[1/0.7]" headColor="text-black"/>
            <section className="w-[100%] aspect-[1/0.3] px-[5%] flex flex-col justify-around items-center max-[1280px]:aspect-[1/4]">
                    <div className="flex flex-row items-center justify-between w-[100%] h-[10%] max-[1280px]:h-[5%]">
                        <p className="text-[2.6vw] font-[Montserrat] font-bold text-[#502369] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.2vw]">Department News & Achievements</p>
                        <Link className="text-[2.3vw] font-[Montserrat] font-bold text-[#720aa2] underline min-[601px]:text-[2vw] min-[1280px]:text-[1vw]" to="/">More News</Link>
                    </div>
                    <div className="flex flex-row justify-between w-[100%] h-[75%] max-[1280px]:flex-col max-[1280px]:h-[95%]">
                        {infos.map((info)=>(
                            <div className="flex flex-col justify-around items-center w-[30%] h-[100%] bg-[#fdf8ff] rounded-[0.3vw] max-[1280px]:w-[100%] max-[1280px]:h-[30%]">
                                <div style={{ background: `url(${info.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[95%] h-[45%]"></div>
                                <div className="flex flex-col items-start justify-around w-[95%] h-[45%] rounded-[3px]">
                                    <div className="flex flex-col justify-between w-[100%] h-[50%]">
                                        <p className="text-[3.8vw] font-[Montserrat] font-bold text-[#502369] min-[601px]:text-[3.2vw] min-[1280px]:text-[1vw]">{info.topic}</p>
                                        <p className="text-[3.6vw] font-[Montserrat] text-black min-[601px]:text-[3vw] min-[1280px]:text-[1vw]">{info.summary}</p>
                                    </div>
                                    <div className="flex justify-end w-[100%]">
                                        <button className="w-[25%] aspect-[1/0.35] text-white text-[3vw] bg-[#502369] font-semibold rounded-[5px] min-[601px]:text-[2.6vw] min-[1280px]:text-[1vw]">view more</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
            <Slide3/>
        </div>
    );
}

function Slide1(props) {
    const [clr, setClr] = useState(0);
    const [start, setstart] = useState(null);
    const [end, setEnd] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const extra = useRef(null);

    function nxt(idx) {
        setClr(idx);
    }

    function reducer(state, action) {
        if (action.type === 'move') {
            const prevState = [...state];
            let temp = prevState.shift();
            if (extra.current === null) {
                prevState.push(temp);
                state = prevState;
            } else {
                prevState.push(extra.current);
                state = prevState;
                extra.current = temp;
            }
            (clr >= 3) ? setClr(0) : setClr(clr + 1);
        } else if (action.type === 'odd') {
            const prevState = [...state];
            extra.current = prevState.pop();
            state = prevState;
        }
        return state;
    }

    const [content, dispatch] = useReducer(reducer, reps);

    if (content.length % 2 !== 0) {
        dispatch({type: 'odd'});
    }

    useEffect(()=>{
        
        if (start === null && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        } else if (start === 0 && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(() => {
                setstart(null);
                setEnd(content.length - 1);
                dispatch({type: 'move'});
            }, 200);
        } else if (start === null && end === content.length - 1) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        }
    }, [start]);

    return(
        <section className={props.css}>
            <p className={`text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw] ${props.headColor}`}>Meet The Department Reps</p>
            <div className="w-[100%] h-[90%] flex flex-col flex-wrap gap-x-[2.6%] gap-y-[2.8vw] justify-between content-center overflow-hidden max-[1280px]:gap-x-[3%]">
                {content.map((rep, idx)=> (
                    (screenWidth > 1280) ?
                    <div className={`${(start === idx) ? 'decrease w-[22.9%]' : (end === idx) ? 'increase w-[0%]' : 'w-[22.9%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[80%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[3px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[3px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[1.2vw] font-[Montserrat] font-bold text-[#01669f]">{rep.Name}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.position}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`${(start === idx) ? 'decreaseMobile w-[48%]' : (end === idx) ? 'increaseMobile w-[0%]' : 'w-[48%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[3px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[3px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[3.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.2vw]">{rep.Name}</p>
                                <p className="text-[2.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2vw] min-[1280px]:text-[1vw]">{rep.position}</p>
                                <p className="text-[2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-around px-[0.6%] w-[6%] aspect-[1/0.35] rounded-[3px] bg-[#edc8ff] max-[1280px]:w-[10%]">
                {Array.from({ length: 4 }, (_, i) => i).map((index)=> (
                    <button onClick={()=> nxt(index)} className={`${(clr === index) ? 'bg-[#4d2165]' : 'bg-white'} w-[20%] rounded-[49%] aspect-square max-[1280px]:w-[17%]`}></button>
                ))}
            </div>
        </section>
    );
}

function Slide2(props) {
    const [clr, setClr] = useState(0);
    const [start, setstart] = useState(null);
    const [end, setEnd] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const extra = useRef(null);

    function nxt(idx) {
        setClr(idx);
    }

    function reducer(state, action) {
        if (action.type === 'move') {
            const prevState = [...state];
            let temp = prevState.shift();
            if (extra.current === null) {
                prevState.push(temp);
                state = prevState;
            } else {
                prevState.push(extra.current);
                state = prevState;
                extra.current = temp;
            }
            (clr >= 3) ? setClr(0) : setClr(clr + 1);
        } else if (action.type === 'odd') {
            const prevState = [...state];
            extra.current = prevState.pop();
            state = prevState;
        }
        return state;
    }

    const [content, dispatch] = useReducer(reducer, reps);

    if (content.length % 2 !== 0) {
        dispatch({type: 'odd'});
    }

    useEffect(()=>{
        
        if (start === null && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        } else if (start === 0 && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(() => {
                setstart(null);
                setEnd(content.length - 1);
                dispatch({type: 'move'});
            }, 200);
        } else if (start === null && end === content.length - 1) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        }
    }, [start]);

    return (
        <section className={props.css}>
            <p className={`text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw] ${props.headColor}`}>Our Department In</p>
            <div className="w-[100%] h-[90%] flex flex-col flex-wrap gap-x-[2.6%] gap-y-[2.8vw] justify-between content-center overflow-hidden max-[1280px]:gap-x-[3%]">
                {content.map((rep, idx)=> (
                    (screenWidth > 1280) ?
                    <div className={`${(start === idx) ? 'decrease w-[22.9%]' : (end === idx) ? 'increase w-[0%]' : 'w-[22.9%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[3px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[3px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[1.2vw] font-[Montserrat] font-bold text-[#01669f]">{rep.Name}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.position}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`${(start === idx) ? 'decreaseMobile w-[48%]' : (end === idx) ? 'increaseMobile w-[0%]' : 'w-[48%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[3px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[3px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[3.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.2vw]">{rep.Name}</p>
                                <p className="text-[2.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2vw] min-[1280px]:text-[1vw]">{rep.position}</p>
                                <p className="text-[2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-around px-[0.6%] w-[6%] h-[5%] rounded-[3px] bg-[#edc8ff] max-[1280px]:w-[10%]">
                {Array.from({ length: 4 }, (_, i) => i).map((index)=> (
                    <button onClick={()=> nxt(index)} className={`${(clr === index) ? 'bg-[#4d2165]' : 'bg-white'} w-[20%] rounded-[49%] aspect-square max-[1280px]:w-[17%]`}></button>
                ))}
            </div>
        </section>
    );
}

function Slide3() {
    const [clr, setClr] = useState(0);
    const [start, setstart] = useState(null);
    const [end, setEnd] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const extra = useRef(null);

    function nxt(idx) {
        setClr(idx);
    }

    function reducer(state, action) {
        if (action.type === 'move') {
            const prevState = [...state];
            let temp = prevState.shift();
            if (extra.current === null) {
                prevState.push(temp);
                state = prevState;
            } else {
                prevState.push(extra.current);
                state = prevState;
                extra.current = temp;
            }
            (clr >= 3) ? setClr(0) : setClr(clr + 1);
        } else if(action.type === 'evenOdd') {
            const prevState = [...state];
            extra.current = prevState.pop();
            state = prevState;
        }
        return state;
    }

    const [content, dispatch] = useReducer(reducer, gallery);

    if (screenWidth > 1280) {
        if (content.length % 2 === 0) {
            dispatch({type: 'evenOdd'});
        }
    } else if (screenWidth < 1280) {
        if (content.length % 2 === 1) {
            dispatch({type: 'evenOdd'});
        }
    }

    useEffect(()=>{
        if (start === null && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        } else if (start === 0 && end === null) {
            setstart(null);
            setEnd(null);
            setTimeout(() => {
                setstart(null);
                setEnd(content.length - 1);
                dispatch({type: 'move'});
            }, 200);
        } else if (start === null && end === content.length - 1) {
            setstart(null);
            setEnd(null);
            setTimeout(()=>{
                setstart(0);
                setEnd(null);
            }, 4000);
        }
    }, [start]);

    
}

export { Home, Slide1, Slide2, Slide3 };