import { useState, useContext } from "react";
import { StateUpdate } from "./App";
import { Link } from "react-router-dom";


function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const {signAs, setsignAS} = useContext(StateUpdate);

    const navigation = [
        {name: 'Home', to: '/'},
        {name: 'Dept.info', to: 'dept'},
        {name: 'News', to: 'news'},
        {name: 'Contact Us', to: 'contact'}
    ]
    const [selector, setSelector] = useState(null);
    const [select, setSelect] = useState(null);
    const [show, setShow] = useState(0);
    const [mShow, setmShow] = useState(0);

    function selected(idx) {
        console.log(idx);
        setSelector(idx);
    }

    function asWho (idx) {
        setsignAS(idx);
    }

    function drop() {
        (show === 0) ? setShow(1) : setShow(0);
    }

    function display() {
        (mShow === 0 ? setmShow(1) : setmShow(0));
    }

    function shw(idx) {
        setSelect(idx);
        console.log(idx);
    }

    return (
        (screenWidth > 800) ?
            <section className="relative flex flex-row justify-between items-center w-[100%] aspect-[1/0.05] px-[5%]">
                <p className="font-[Montserrat] text-[1.7vw] font-bold text-[#502369]">ITDIMS</p>
                <nav className="flex flex-row justify-between items-center w-[56%] h-full">
                    <div className="flex flex-row justify-around items-center w-[81%] h-full">
                        {navigation.map((navg, index)=>(
                            <Link className={`font-[Montserrat] font-semibold ${selector === index ? 'text-[#502369] text-[1.5vw]':'text-[#292d32] text-[1vw]'}`} to={navg.to} onClick={()=>selected(index)}>{navg.name}</Link>
                        ))}
                    </div>
                    <div onClick={drop} className="flex flex-row items-center justify-around h-[60%] w-[14%] text-white rounded-[7px] bg-[#502369] text-[1vw] font-[Montserrat] font-semibold pr-[1.2%] cursor-pointer">
                        <Link >Sign in</Link>
                        <div className="w-[20%] aspect-[1/1] cursor-pointer">
                            <svg viewBox="0 0 20 20">
                                <path d="M3 7 L10 13 L17 7" fill="" fillOpacity="0" stroke="#fff" strokeWidth="1px"/>
                            </svg>
                        </div>
                    </div>
                    <div className={`${(show === 0) ? 'hidden' : 'flex'} absolute w-[7.05%] aspect-[1/1] left-[87.95%] top-[73%] flex-col items-center bg-white shadow-[0.1vw_0.25vw_0.25vw_0_rgba(0,0,0,0.2)] justify-end rounded-[0.4vw]`}>
                        {['Sign in as Student', 'Sign in as Lecturer', 'Sign in as Admin'].map((user, idx)=>(
                            <>
                                <Link onClick={()=>asWho(idx)} className="py-[1.3vh] text-[0.65vw] font-[Montserrat] font-semibold" to="signin">{user}</Link>
                                <div className="border-b border-black/10 w-[100%]"></div>
                            </>
                        ))}
                    </div>
                </nav>
            </section>
        :
            <>
                <div className="relative flex flex-row justify-between items-center w-[100%] h-[50px] px-[5%]">
                    <p className="font-[Montserrat] text-[2.9vw] font-bold min-[601px]:text-[2vw]">ITDIMS</p>
                    <div onClick={display} className="flex items-center justify-center w-[4%] h-[45%] max-[480px]:w-[7%] cursor-pointer">
                        <svg viewBox="0 0 100 100">
                            <line x1="0" y1="25" x2="100" y2="25" stroke="#000" strokeWidth="7" strokeLinecap="round"/>
                            <line x1="0" y1="50" x2="70" y2="50" stroke="#000" strokeWidth="7" strokeLinecap="round"/>
                            <line x1="0" y1="75" x2="90" y2="75" stroke="#000" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={`${mShow === 0 ? 'hidden' : 'flex'} absolute flex flex-col justify-around items-center w-[100%] bg-[#CCE0EC] bg-opacity-90 h-[30vh] top-[50px] pl-[2%] pr-[2%] pt-[1%] pb-[1%]`}>
                    {navigation.map((nav, idx)=>(
                        <Link onClick={()=>shw(idx)} className={`${select === idx ? 'text-[#502369] text-[2.3vw] font-bold':'text-[#292d32] text-[1vw] font-semibold'} font-[Montserrat] text-[2vw] max-[620px]:text-[2.3vw] max-[480px]:text-[2.8vw] max-[380px]:text-[3.2vw] max-[300px]:text-[3.9vw]`} to={nav.to}>{nav.name}</Link>
                    ))}
                    <Link onClick={shw} className="py-[0.6vh] px-[2vw] rounded-[3px] font-[Montserrat] font-medium text-[2vw] max-[620px]:text-[2.3vw] max-[480px]:text-[2.8vw] max-[380px]:text-[3.2vw] max-[300px]:text-[3.9vw] bg-[#502369] text-white" to="signin">Sign in</Link>
                </div>
            </>
    );
}
export default Header;