import { StateUpdate } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function SignIn() {
    const {signAs, setsignAS} = useContext(StateUpdate);
    const previous = useNavigate();

    function swch(idx) {
        setsignAS(idx);
    }

    function back() {
        previous(-1);
    }

    function forgot() {
        previous('/forgotten');
    }

    function loginAdminLecturer(e) {
        e.preventDefault();

        const login = e.target;
        const email = login.elements['email'].value;
        const pswd = login.elements['password'].value;
        let access = '';

        (async function () {
            await axios.post('https://dims.pythonanywhere.com/account/login/', {'email': email, 'password': pswd})
            .then(function (response) {
                access = response.data.token.access;
                console.log(access);
                axios.get('https://dims.pythonanywhere.com/account/profile/', {
                    headers: {
                        'Authorization': `Bearer ${access}`,
                    }
                })
                .then(function (response) {
                    let nData = response.data;
                    nData.access = access;
                    axios.post('https://dims-dashbaord.vercel.app/', nData)
                    .then(function(response){

                    })
                    .catch(function(response){

                    })
                })
                .catch(function (response) {
                    console.log(response);
                })
            })
            .catch(function (response) {
                console.log(response.response.data.message);
            })
        })();

        (async function () {
            
        })();
    }

    function loginStudent(e) {
        e.preventDefault(); // prevent default form submission

        const login = e.target;
        const matric = login.elements['matric'].value;
        const pswd = login.elements['password'].value;

        (async function () {
            await axios.post('https://dims.pythonanywhere.com/account/login/', {'email': matric, 'password': pswd})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            })
        })();
        
    }

    

    return (
        <div className={`w-[100%] h-[100vh] px-[3%] py-[2%] flex flex-col justify-between max-[1280px]:justify-start ${(signAs === 0) ? 'bg-[#502369]' : (signAs === 1) ? 'bg-[#0D659F]' : 'bg-[white]'}`}>
            <div className="w-[100%] h-[7%] items-center flex flex-row justify-between px-[3%]">
                <p className={`font-[Montserrat] text-[2.9vw] font-bold min-[601px]:text-[2vw] min-[1280px]:text-[1.7vw] ${(signAs === 0) ? 'text-white' : (signAs === 1) ? 'text-white' : 'text-[#502369]'}`}>ITDIMS</p>
                {(signAs === 0) ?
                    <button onClick={()=>swch(1)} className="flex justify-center items-center w-[12%] h-[100%] text-white rounded-[7px] text-[2.4vw] min-[601px]:text-[1.6vw] min-[1280px]:text-[1.3vw] max-[1280px]:w-[25%] bg-transparent max-[1280px]:bg-transparent">Sign in as lecturer</button>
                : (signAs === 1) ?
                    <button onClick={()=>swch(0)} className="flex justify-center items-center w-[12%] h-[100%] text-white rounded-[7px] text-[2.4vw] min-[601px]:text-[1.6vw] min-[1280px]:text-[1.3vw] max-[1280px]:w-[25%] bg-transparent max-[1280px]:bg-transparent">Sign in as student</button>
                :<button onClick={()=>swch(0)} className="flex justify-center items-center w-[12%] h-[100%] text-white rounded-[7px] text-[2.4vw] min-[601px]:text-[1.6vw] min-[1280px]:text-[1vw] max-[1280px]:w-[25%] bg-[#502369] max-[1280px]:bg-transparent max-[1280px]:text-[#502369]">Sign in as student</button>
                }
            </div>
            <div className="w-[100%] h-[90%] flex flex-row justify-between items-center px-[3%] max-[1280px]:justify-center">
                <div className="flex flex-col w-[40%] aspect-[1/1] gap-y-[1%] max-[1280px]:w-[500px] max-[1280px]:h-[90%] max-[601px]:w-[100%]">
                    <div className=" w-[100%] h-[12%] flex flex-col justify-between">
                        <p className={`font-[Montserrat] text-[5vw] font-semibold min-[601px]:text-[24px] min-[1280px]:text-[1.8vw] ${(signAs === 0) ? 'text-white' : (signAs === 1) ? 'text-white' : 'text-black'}`}>Sign in</p>
                        {(signAs === 0) ?
                            <p className="font-[Montserrat] text-[3vw] font-medium text-white min-[601px]:text-[20px] min-[1280px]:text-[0.9vw]">sign in to your student profile</p>
                        : (signAs === 1) ?
                            <p className="font-[Montserrat] text-[3vw] font-medium text-white min-[601px]:text-[20px] min-[1280px]:text-[0.9vw]">sign in to your lecturer profile</p>
                        :<p className="font-[Montserrat] text-[3vw] font-medium text-black min-[601px]:text-[20px] min-[1280px]:text-[0.9vw]">sign in to your admin profile</p>
                        }
                    </div>
                    {(signAs === 0) ?
                        <form onSubmit={loginStudent} className="flex flex-col justify-between w-[100%] h-[60%] max-[1230px]:h-[50%]">
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-white" for="matric">Matric number</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="text" id="matric" name="matric" placeholder='IFT/00/0000' pattern = "[A-Z]{3}/\d{2}/\d{4}"/>
                            </div>
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-white" for="password">Password</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="password" id="password" name="password" placeholder="********"/>
                            </div>
                            <div className="w-[100%] h-[27%] flex justify-between pb-[13%] max-[1280px]:h-[20%] max-[1280px]:pb-[0%] max-[1280px]:items-start">
                                <div className="w-[23%] h-[100%] flex justify-between items-center max-[1280px]:items-start max-[1280px]:w-[40%] max-[1280px]:gap-x-[2%] max-[1280px]:justify-start">
                                    <input type="checkbox" id="remember" name="remember" className="accent-[#0D659F] max-[1280px]:mt-[3%]"/>
                                    <label className="font-[Montserrat] text-[3vw] font-semibold text-white min-[460px]:text-[2.5vw] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]" for="remember">Remember me</label>
                                </div>
                                <button onClick={forgot} className="font-[Montserrat] text-[3vw] font-semibold text-white min-[460px]:text-[17.5px] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]">Forgot password?</button>
                            </div>
                            <input className="w-[100%] h-[14%] text-white rounded-[5px] font-[Montserrat] font-semibold bg-[#0D659F] text-[3.6vw] min-[460px]:text-[3vw] min-[601px]:text-[17.5px] min-[1280px]:text-[1.2vw]" type="submit" value="Log in"/>
                        </form>
                    :(signAs === 1) ?
                        <form onSubmit={loginAdminLecturer} className="flex flex-col justify-between w-[100%] h-[60%] max-[1230px]:h-[50%]">
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-white" for="email">Email address</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="email" id="email" name="email" placeholder='you@mail.com'/>
                            </div>
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-white" for="password">Password</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="password" id="password" name="password" placeholder="********"/>
                            </div>
                            <div className="w-[100%] h-[27%] flex justify-between pb-[13%] max-[1280px]:h-[20%] max-[1280px]:pb-[0%] max-[1280px]:items-start">
                                <div className="w-[23%] h-[100%] flex justify-between items-center max-[1280px]:items-start max-[1280px]:w-[40%] max-[1280px]:gap-x-[2%] max-[1280px]:justify-start">
                                    <input type="checkbox" id="remember" name="remember" className="accent-[#502369] max-[1280px]:mt-[3%]"/>
                                    <label className="font-[Montserrat] text-[3vw] font-semibold text-white min-[460px]:text-[2.5vw] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]" for="remember">Remember me</label>
                                </div>
                                <button onClick={forgot} className="font-[Montserrat] text-[3vw] font-semibold text-white min-[460px]:text-[2.5vw] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]">Forgot password?</button>
                            </div>
                            <input className="w-[100%] h-[14%] text-white rounded-[5px] font-[Montserrat] font-semibold bg-[#502369] text-[3.6vw] min-[460px]:text-[3vw] min-[601px]:text-[17.5px] min-[1280px]:text-[1.2vw]" type="submit" value="Log in"/>
                        </form>
                    :
                        <form onSubmit={loginAdminLecturer} className="flex flex-col justify-between w-[100%] h-[60%] max-[1230px]:h-[50%]">
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-black" for="email">Email address</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="email" id="email" name="email" placeholder='you@mail.com'/>
                            </div>
                            <div className="w-[100%] h-[22%] flex flex-col justify-between max-[1280px]:h-[25%]">
                                <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[18px] min-[1280px]:text-[1vw] text-black" for="password">Password</label>
                                <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] max-[1280px]:h-[70%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[16px] min-[1280px]:placeholder:text-[0.95vw] font-[Montserrat] text-[3vw] min-[460px]:text-[2.5vw] min-[601px]:text-[16px] min-[1280px]:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="password" id="password" name="password" placeholder="********"/>
                            </div>
                            <div className="w-[100%] h-[27%] flex justify-between pb-[13%] max-[1280px]:h-[20%] max-[1280px]:pb-[0%] max-[1280px]:items-start">
                                <div className="w-[23%] h-[100%] flex justify-between items-center max-[1280px]:items-start max-[1280px]:w-[40%] max-[1280px]:gap-x-[2%] max-[1280px]:justify-start">
                                    <input type="checkbox" id="remember" name="remember" className="accent-[#0D659F] max-[1280px]:mt-[3%]"/>
                                    <label className="font-[Montserrat] text-[3vw] font-semibold text-black min-[460px]:text-[2.5vw] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]" for="remember">Remember me</label>
                                </div>
                                <button onClick={forgot} className="font-[Montserrat] text-[3vw] font-extrabold text-[#502369] min-[460px]:text-[2.5vw] min-[601px]:text-[17.5px] min-[1280px]:text-[0.9vw]">Forgot password?</button>
                            </div>
                            <input className="w-[100%] h-[14%] text-white rounded-[5px] font-[Montserrat] font-semibold bg-[#502369] text-[3.6vw] min-[460px]:text-[3vw] min-[601px]:text-[17.5px] min-[1280px]:text-[1.2vw]" type="submit" value="Log in"/>
                        </form>
                    }
                    <div onClick={back} className="w-[20%] h-[8%] max-[1280px]:w-[25%] max-[1280px]:h-[7%] bg-[#FDF8FF] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex items-center justify-between px-[2%] rounded-[7px] mt-[10%] cursor-pointer">
                        <div className="w-[25%] aspect-square">
                            <svg viewBox="0 0 25 24" fill="none">
                                <path d="M10.07 5.92993L4 11.9999L10.07 18.0699" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.9999 12H4.16992" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className="font-[Montserrat] font-semibold text-[2.8vw] text-[#502369] min-[460px]:text-[2.5vw] min-[601px]:text-[15px] min-[1280px]:text-[0.9vw]">Go Back</p>
                    </div>
                </div>
                <div className="w-[35%] aspect-square block max-[1280px]:hidden ">
                    <svg viewBox="0 0 526 501" fill="none">
                        <g clip-path="url(#clip0_733_8642)">
                            <path d="M335.491 112.306H307.504V345.534C307.504 349.193 306.766 352.816 305.334 356.197C303.901 359.578 301.801 362.65 299.154 365.237C296.507 367.825 293.364 369.877 289.906 371.277C286.447 372.678 282.74 373.399 278.996 373.399H65.0223V373.665C65.0223 377.324 65.7597 380.948 67.1923 384.329C68.6249 387.709 70.7248 390.781 73.372 393.369C76.0192 395.956 79.1618 398.009 82.6205 399.409C86.0792 400.809 89.7863 401.53 93.5299 401.53H335.491C339.235 401.53 342.942 400.809 346.4 399.409C349.859 398.009 353.002 395.956 355.649 393.369C358.296 390.781 360.396 387.709 361.828 384.329C363.261 380.948 363.999 377.324 363.999 373.665V140.171C363.999 132.781 360.995 125.693 355.649 120.468C350.303 115.242 343.052 112.306 335.491 112.306Z" fill="#F2F2F2"/>
                            <path d="M468.163 482.941C468.659 482.963 469.149 482.836 469.568 482.576C469.987 482.317 470.315 481.938 470.506 481.491C470.697 481.044 470.743 480.55 470.638 480.076C470.532 479.602 470.281 479.172 469.916 478.843L469.751 478.198C469.773 478.147 469.794 478.095 469.817 478.044C470.316 476.891 471.152 475.909 472.221 475.22C473.289 474.53 474.542 474.165 475.823 474.17C477.103 474.174 478.353 474.549 479.417 475.246C480.48 475.943 481.309 476.931 481.799 478.087C483.759 482.701 486.254 487.323 486.869 492.201C487.139 494.357 487.025 496.543 486.531 498.661C491.134 488.847 493.525 478.179 493.54 467.382C493.541 464.673 493.387 461.966 493.079 459.273C492.824 457.066 492.47 454.874 492.018 452.698C489.551 440.892 484.254 429.827 476.562 420.41C472.839 418.425 469.828 415.371 467.936 411.662C467.25 410.328 466.765 408.905 466.497 407.436C466.917 407.489 468.08 401.238 467.763 400.854C468.349 399.986 469.396 399.554 470.035 398.707C473.214 394.494 477.594 395.23 479.881 400.955C484.765 403.365 484.812 407.361 481.815 411.204C479.908 413.649 479.646 416.958 477.973 419.576C478.146 419.791 478.325 420 478.497 420.215C481.643 424.17 484.385 428.416 486.684 432.894C486.125 427.877 486.792 422.803 488.631 418.088C490.495 413.694 493.987 409.994 497.063 406.195C497.877 405.175 498.981 404.413 500.238 404.006C501.494 403.599 502.846 403.566 504.122 403.909C505.397 404.253 506.54 404.959 507.406 405.938C508.272 406.916 508.821 408.124 508.985 409.408C508.991 409.464 508.997 409.52 509.003 409.576C508.546 409.827 508.099 410.095 507.661 410.378C507.112 410.737 506.686 411.25 506.439 411.849C506.193 412.449 506.138 413.107 506.281 413.738C506.424 414.369 506.758 414.943 507.241 415.385C507.723 415.827 508.331 416.116 508.984 416.214L509.051 416.224C508.888 417.834 508.601 419.429 508.191 420.996C512.137 435.911 503.618 441.344 491.454 441.588C491.185 441.723 490.924 441.857 490.655 441.985C492.965 448.383 494.414 455.047 494.965 461.81C495.277 465.8 495.259 469.808 494.91 473.796L494.931 473.654C495.812 469.221 498.232 465.22 501.781 462.328C507.053 458.096 514.501 456.537 520.188 453.134C520.792 452.755 521.495 452.553 522.213 452.551C522.932 452.549 523.635 452.748 524.242 453.125C524.848 453.501 525.332 454.039 525.635 454.675C525.939 455.312 526.05 456.02 525.956 456.716L525.933 456.864C525.085 457.202 524.259 457.59 523.461 458.028C523.004 458.28 522.557 458.548 522.119 458.83C521.57 459.189 521.144 459.702 520.897 460.302C520.651 460.902 520.596 461.56 520.739 462.191C520.882 462.822 521.216 463.396 521.699 463.838C522.181 464.279 522.789 464.569 523.442 464.667L523.509 464.677C523.557 464.684 523.599 464.691 523.647 464.697C522.198 468.078 520.165 471.19 517.637 473.897C515.169 486.917 504.572 488.153 493.237 484.361H493.23C491.986 489.644 490.184 494.786 487.853 499.704H468.645C468.576 499.496 468.514 499.28 468.452 499.072C470.23 499.181 472.015 499.077 473.767 498.762C472.342 497.053 470.917 495.33 469.491 493.621C469.46 493.589 469.43 493.555 469.402 493.52C468.679 492.645 467.949 491.777 467.226 490.902L467.226 490.901C467.187 488.22 467.502 485.544 468.163 482.941L468.163 482.941Z" fill="#F2F2F2"/>
                            <path d="M256.598 80.5808C257.299 81.6193 258.223 82.4966 259.305 83.1519C260.387 83.8072 261.602 84.2249 262.866 84.376C264.13 84.5272 265.412 84.4083 266.624 84.0275C267.836 83.6467 268.949 83.0131 269.886 82.1705L309.821 99.7816L317.52 90.1822L269.932 69.6042C268.364 68.1683 266.311 67.3446 264.163 67.2891C262.015 67.2337 259.921 67.9504 258.277 69.3034C256.633 70.6564 255.555 72.5517 255.245 74.6302C254.936 76.7087 255.417 78.826 256.598 80.5808H256.598Z" fill="#A0616A"/>
                            <path d="M427.984 91.5621L431.944 113.501C432.129 114.524 432.093 115.574 431.838 116.583C431.583 117.592 431.115 118.538 430.464 119.36C429.813 120.182 428.994 120.861 428.058 121.355C427.123 121.849 426.092 122.147 425.032 122.228L357.73 127.401L278.619 92.7936L288.068 75.2612L356.743 96.5184L427.984 91.5621Z" fill={`${(signAs === 0) ? '#0D659F' : (signAs === 1) ? '#502369' : '#0D659F'}`}/>
                            <path d="M270.469 75.8394H28.5076C12.7633 75.8394 0 88.3149 0 103.704V337.198C0 352.588 12.7633 365.063 28.5076 365.063H270.469C286.213 365.063 298.976 352.588 298.976 337.198V103.704C298.976 88.3149 286.213 75.8394 270.469 75.8394Z" fill="#F2F2F2"/>
                            <path d="M28.5078 81.5696C25.534 81.5696 22.5893 82.1421 19.8419 83.2544C17.0945 84.3668 14.5981 85.9972 12.4953 88.0526C10.3926 90.108 8.72454 92.5481 7.58652 95.2335C6.4485 97.919 5.86279 100.797 5.86279 103.704V337.198C5.86279 343.069 8.24859 348.699 12.4953 352.85C16.7421 357.001 22.502 359.333 28.5078 359.333H182.933C197.402 359.333 211.73 356.547 225.097 351.135C238.465 345.723 250.611 337.79 260.842 327.789C271.073 317.789 279.189 305.917 284.726 292.85C290.263 279.784 293.113 265.78 293.113 251.637V103.704C293.113 100.797 292.528 97.919 291.39 95.2335C290.252 92.5481 288.584 90.108 286.481 88.0526C284.378 85.9972 281.882 84.3668 279.134 83.2544C276.387 82.1421 273.442 81.5696 270.468 81.5696H28.5078Z" fill="white"/>
                            <path d="M217.127 152.431H81.3198C80.0736 152.431 78.8785 151.947 77.9973 151.086C77.1161 150.225 76.6211 149.057 76.6211 147.839C76.6211 146.621 77.1161 145.452 77.9973 144.591C78.8785 143.73 80.0736 143.246 81.3198 143.246H217.127C218.374 143.246 219.569 143.73 220.45 144.591C221.331 145.452 221.826 146.621 221.826 147.839C221.826 149.057 221.331 150.225 220.45 151.086C219.569 151.947 218.374 152.431 217.127 152.431Z" fill="#F2F2F2"/>
                            <path d="M217.127 250.371H81.3198C80.0736 250.371 78.8785 249.887 77.9973 249.025C77.1161 248.164 76.6211 246.996 76.6211 245.778C76.6211 244.56 77.1161 243.392 77.9973 242.53C78.8785 241.669 80.0736 241.185 81.3198 241.185H217.127C218.374 241.185 219.569 241.669 220.45 242.53C221.331 243.392 221.826 244.56 221.826 245.778C221.826 246.996 221.331 248.164 220.45 249.025C219.569 249.887 218.374 250.371 217.127 250.371Z" fill="#F2F2F2"/>
                            <path d="M272.276 201.433H26.1712C24.925 201.433 23.7299 200.949 22.8487 200.088C21.9676 199.227 21.4725 198.058 21.4725 196.84C21.4725 195.622 21.9676 194.454 22.8487 193.593C23.7299 192.731 24.925 192.248 26.1712 192.248H272.276C273.522 192.248 274.717 192.731 275.598 193.593C276.48 194.454 276.975 195.622 276.975 196.84C276.975 198.058 276.48 199.227 275.598 200.088C274.717 200.949 273.522 201.433 272.276 201.433Z" fill="#F2F2F2"/>
                            <path d="M419.48 188.259L394.964 239.313L489.275 229.976L469.588 180.966L419.48 188.259Z" fill="#A0616A"/>
                            <path d="M441.407 481.695L432.465 481.621L428.507 447.123L441.703 447.232L441.407 481.695Z" fill="#A0616A"/>
                            <path d="M412.765 495.593C412.757 496.63 413.17 497.626 413.913 498.365C414.656 499.104 415.668 499.525 416.728 499.535L434.507 499.68L437.619 493.514L438.762 499.712L445.47 499.771L443.777 477.665L441.443 477.514L431.923 476.872L428.852 476.671L428.798 482.926L414.517 492.394C413.982 492.749 413.543 493.226 413.237 493.783C412.932 494.34 412.77 494.961 412.765 495.593Z" fill="#2F2E41"/>
                            <path d="M342.45 481.735L333.925 479.096L340.511 444.984L353.094 448.877L342.45 481.735Z" fill="#A0616A"/>
                            <path d="M310.895 486.794C310.576 487.782 310.671 488.854 311.159 489.773C311.647 490.693 312.489 491.386 313.499 491.7L330.449 496.945L335.277 491.944L334.507 498.197L340.901 500.18L345.927 478.563L343.742 477.748L334.835 474.401L331.96 473.327L330.028 479.29L313.531 484.239C312.913 484.425 312.35 484.754 311.891 485.199C311.432 485.644 311.09 486.191 310.895 486.794Z" fill="#2F2E41"/>
                            <path d="M484.98 215.619L399.228 230.978C399.228 230.978 385.474 241.034 389.153 244.636C392.832 248.237 393.403 247.68 390.986 250.042C388.569 252.405 383.342 255.564 383.29 257.631C383.239 259.698 344.865 352.428 344.865 352.428C344.865 352.428 349.129 350.345 345.931 353.47C342.733 356.596 342.733 359.179 342.733 359.179L327.81 457.661L352.046 459.056L375.777 369.271L428.711 285.393C428.711 285.393 433.963 360.191 434.184 365.166C434.404 370.141 437.602 363.889 434.404 370.141C431.206 376.392 429.074 372.225 431.206 376.392C433.338 380.56 423.526 465.407 423.526 465.407H445.648L493.093 289.542C493.093 289.542 509.973 239.264 484.98 215.619Z" fill="#2F2E41"/>
                            <path d="M459.718 74.9493L425.369 71.4607L416.469 82.7542L406.102 88.1516C401.714 90.4356 398.093 93.9066 395.67 98.1494C393.248 102.392 392.127 107.227 392.442 112.076L404.558 180.966C404.558 180.966 394.324 203.491 401.36 209.098C408.396 214.704 395.92 228.589 410.953 221.601C425.987 214.612 490.899 222.643 490.899 222.643L477.042 184.092L487.393 146.211L488.533 114.448C488.746 108.512 486.944 102.675 483.408 97.8452C479.872 93.0155 474.8 89.465 468.984 87.747L467.536 87.3194L459.718 74.9493Z" fill={`${(signAs === 0) ? '#0D659F' : (signAs === 1) ? '#502369' : '#0D659F'}`}/>
                            <path d="M507.008 49.2096C507.233 58.6733 503.615 67.8369 498.417 75.8856C496.872 71.1869 494.096 66.9104 491.2 62.8337C492.66 71.6527 491.105 80.6961 486.777 88.5643C486.624 88.6709 486.466 88.77 486.303 88.8611C482.066 91.3523 476.694 92.3614 472.111 90.5621C481.581 80.584 482.786 64.0519 474.847 52.8599C472.599 49.6842 469.692 46.8755 468.299 43.2614C466.101 37.4949 468.214 31.1459 469.547 25.1338C470.794 19.5383 471.012 12.8796 467.171 8.77881C467.582 8.20573 468.14 7.74956 468.79 7.45704C469.44 7.16452 470.158 7.04618 470.87 7.11412C473.238 7.44106 474.962 9.45284 476.06 11.5249C477.157 13.5968 477.881 15.8932 479.411 17.6829C482.244 21.0326 487.069 21.8246 491.135 23.59C500.982 27.877 506.772 38.6792 507.008 49.2096Z" fill="#2F2E41"/>
                            <path d="M253.322 499.76C253.321 499.923 253.354 500.085 253.417 500.235C253.481 500.386 253.574 500.523 253.692 500.638C253.81 500.753 253.95 500.844 254.104 500.907C254.258 500.969 254.423 501.001 254.59 501H524.582C524.919 501 525.241 500.869 525.479 500.637C525.717 500.404 525.851 500.089 525.851 499.76C525.851 499.431 525.717 499.116 525.479 498.883C525.241 498.651 524.919 498.52 524.582 498.52H254.59C254.423 498.52 254.258 498.551 254.104 498.614C253.95 498.676 253.81 498.767 253.692 498.882C253.574 498.998 253.481 499.134 253.417 499.285C253.354 499.436 253.321 499.597 253.322 499.76Z" fill="#CCCCCC"/>
                            <path d="M509.134 268.55C514.432 268.55 518.727 264.351 518.727 259.173C518.727 253.994 514.432 249.795 509.134 249.795C503.836 249.795 499.541 253.994 499.541 259.173C499.541 264.351 503.836 268.55 509.134 268.55Z" fill={`${(signAs === 0) ? '#502369' : (signAs === 1) ? '#0D659F' : '#fff'}`}/>
                            <path d="M424.123 43.7987C424.686 41.8737 420.807 53.6409 422.679 53.8533C431.203 54.8092 442.904 59.7851 448.841 62.1065C449.108 62.0761 449.375 62.0458 449.635 62.0079C450.272 61.9396 450.893 61.841 451.506 61.7272C465.33 59.1706 470.646 38.4143 470.646 38.2247C470.646 37.2916 468.355 11.6633 464.746 11.2841C463.798 11.1835 462.845 11.1329 461.891 11.1324H452.935C451.081 10.742 449.203 10.4758 447.313 10.3358H447.297C429.266 8.99302 415.049 19.7351 416.378 32.8063C416.386 32.8214 416.402 32.8366 416.409 32.8518C416.795 33.4131 417.133 33.9442 417.432 34.4525C417.723 34.9304 417.966 35.3855 418.179 35.818C419.822 39.1559 415.598 43.3561 418.399 44.1401C422.124 45.1828 408.6 79.4541 423.347 79.4541C416.174 81.4475 422.571 49.109 424.123 43.7987Z" fill="#2F2E41"/>
                            <path d="M440.219 63.9077C451.93 63.9077 461.424 54.6277 461.424 43.1804C461.424 31.733 451.93 22.4531 440.219 22.4531C428.507 22.4531 419.013 31.733 419.013 43.1804C419.013 54.6277 428.507 63.9077 440.219 63.9077Z" fill="#A0616A"/>
                            <path d="M416.378 33.9365C416.732 34.1186 417.078 34.2855 417.432 34.4524C417.801 34.6268 418.171 34.8014 418.541 34.9606C425.641 38.109 431.421 38.4579 434.928 33.9365C435.022 31.5575 435.568 29.2163 436.54 27.033C436.368 29.4729 437.026 31.8998 438.411 33.9365H445.473C452.746 38.6551 456.481 39.1483 451.433 54.6394C450.025 58.9559 444.429 84.074 446.63 87.7989C447.267 87.7306 454.044 60.2185 454.657 60.1048C468.481 57.5482 477.264 35.2869 476.14 34.0276C476.145 30.4464 475.303 26.9126 473.678 23.7027C471.623 19.6359 468.42 16.2294 464.447 13.8861C462.079 12.7636 459.61 11.857 457.071 11.1778C457.008 11.1626 456.953 11.1474 456.89 11.1323C456.112 10.9274 455.317 10.7378 454.523 10.5784C452.883 10.2398 451.223 9.99412 449.554 9.84259C449.436 9.835 449.318 9.82739 449.208 9.82739C448.541 9.82892 447.887 10.0044 447.313 10.3357C447.305 10.3357 447.305 10.3433 447.297 10.3433C446.887 10.5776 446.528 10.8897 446.243 11.2612C445.741 11.8863 445.469 12.6588 445.472 13.4536H437.609C437.318 13.4536 437.027 13.4612 436.736 13.4763C431.488 13.6517 426.496 15.7349 422.736 19.3185C418.977 22.902 416.721 27.7279 416.409 32.8517C416.386 33.2158 416.378 33.5723 416.378 33.9365Z" fill="#2F2E41"/>
                            <path d="M462.742 27.3105C470.458 27.3105 476.712 21.1968 476.712 13.6552C476.712 6.11366 470.458 0 462.742 0C455.027 0 448.772 6.11366 448.772 13.6552C448.772 21.1968 455.027 27.3105 462.742 27.3105Z" fill="#2F2E41"/>
                            <path d="M509.242 263.039C509.923 261.988 510.364 260.805 510.532 259.572C510.7 258.338 510.591 257.084 510.215 255.895C509.838 254.706 509.201 253.612 508.349 252.687C507.497 251.763 506.45 251.03 505.28 250.54L505.349 207.716L493.235 204.785L493.534 255.649C492.836 257.635 492.909 259.803 493.737 261.741C494.566 263.679 496.093 265.253 498.029 266.164C499.965 267.075 502.176 267.26 504.243 266.684C506.309 266.108 508.088 264.811 509.242 263.039V263.039Z" fill="#A0616A"/>
                            <path d="M449.255 105.73L468.105 93.2078C468.985 92.6236 469.979 92.2256 471.025 92.0394C472.072 91.8531 473.146 91.8828 474.18 92.1264C475.213 92.37 476.183 92.8221 477.028 93.4539C477.872 94.0856 478.572 94.8829 479.082 95.7947L511.491 153.682L511.615 238.4L491.381 237.16L483.075 167.217L449.255 105.73Z" fill={`${(signAs === 0) ? '#0D659F' : (signAs === 1) ? '#502369' : '#0D659F'}`}/>
                            <path d="M304.481 297.858H103.018C98.6365 297.858 94.434 299.56 91.3355 302.589C88.237 305.617 86.4963 309.725 86.4963 314.008C86.4963 318.291 88.237 322.399 91.3355 325.427C94.434 328.456 98.6365 330.158 103.018 330.158H304.481C308.863 330.158 313.065 328.456 316.164 325.427C319.262 322.399 321.003 318.291 321.003 314.008C321.003 309.725 319.262 305.617 316.164 302.589C313.065 299.56 308.863 297.858 304.481 297.858Z" fill="white"/>
                            <path d="M304.481 331.199H103.018C98.3538 331.199 93.8802 329.388 90.5818 326.164C87.2834 322.94 85.4304 318.567 85.4304 314.008C85.4304 309.448 87.2834 305.076 90.5818 301.852C93.8802 298.628 98.3538 296.816 103.018 296.816H304.481C309.146 296.816 313.619 298.628 316.918 301.852C320.216 305.076 322.069 309.448 322.069 314.008C322.069 318.567 320.216 322.94 316.918 326.164C313.619 329.388 309.146 331.199 304.481 331.199ZM103.018 298.9C98.9192 298.9 94.9879 300.492 92.0893 303.325C89.1907 306.158 87.5623 310.001 87.5623 314.008C87.5623 318.015 89.1907 321.857 92.0893 324.691C94.9879 327.524 98.9192 329.116 103.018 329.116H304.481C308.58 329.116 312.512 327.524 315.41 324.691C318.309 321.857 319.937 318.015 319.937 314.008C319.937 310.001 318.309 306.158 315.41 303.325C312.512 300.492 308.58 298.9 304.481 298.9H103.018Z" fill="#0D659F"/>
                            <path d="M316.361 368.336H227.454C226.208 368.336 225.013 367.852 224.132 366.991C223.251 366.129 222.756 364.961 222.756 363.743C222.756 362.525 223.251 361.357 224.132 360.496C225.013 359.634 226.208 359.15 227.454 359.15H316.361C317.607 359.15 318.802 359.634 319.683 360.496C320.564 361.357 321.059 362.525 321.059 363.743C321.059 364.961 320.564 366.129 319.683 366.991C318.802 367.852 317.607 368.336 316.361 368.336Z" fill="#0D659F"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_733_8642">
                                <rect width="526" height="501" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SignIn;