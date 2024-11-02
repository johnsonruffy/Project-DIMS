import { useState, useRef, useReducer, useEffect } from "react";
import { innovators, reps } from "./str";
import { Slide1, Slide2 } from "./Home";

function Dept() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    return (
        <section className="w-[100%] pl-[5%] pr-[3%] aspect-[1/3.1] gap-y-[10vh] flex flex-col items-center justify-start py-[4%] max-[1280px]:aspect-[1/6] max-[1280px]:gap-y-[1vh] max-[1280px]:pr-[5%] max-[1280px]:pl-[5%]">
            <p className="text-[4.5vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[4.5vw] min-[1280px]:text-[2.2vw]">Know the Department</p>
            <section className="flex flex-row justify-between items-start w-[100%] h-[11%] max-[1280px]:h-[8.7%]">
                <div className="flex justify-start items-start w-[53%] h-[100%] pt-[3%] px-[2%] max-[1280px]:pt-[0%] max-[1280px]:px-[0%] max-[1280px]:pr-[3%]">
                    <p className="text-[2.2vw] text-[#292d32] font-[Montserrat] font-normal min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw] break-words text-justify max-[1280px]:leading-tight">The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.</p>
                </div>
                <div className="w-[47%] h-[100%] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat max-[1280px]:h-[92%]"></div>
            </section>
            <div className="flex justify-start items-start w-[100%] h-[11%]">
                <p className="text-[2.2vw] text-[#292d32] font-[Montserrat] font-normal min-[601px]:text-[1.8vw] min-[1280px]:text-[1.2vw] break-words text-justify">
                    The areas of research in the department are the following: Networked and Embedded Systems, Intelligent Systems, Human Computer Interaction, Mobile Computing, Wireless Technology, Computer Networks, IT Project Development and Management, Software Development, IT Infrastructure Maintenance, Cloud Computing, Data Analysis, Computing and Communications, Computer Systems Architecture, Fast and efficient Algorithms, Parallel Computing Systems, Web Engineering, Internet of Things, Ubiquitous Computing.
                    <br/> <br/>
                    The department currently shares three computer laboratories furnished with over five hundred computer systems connected to the internet with the Department of Computer Science. The hardware studies laboratory consists of HP Logic lab, HP logic analyzer, HP digital oscilloscope, HP pulse generator, pen plotter among others.
                    <br/> <br/>
                    The department also shares a library/research laboratory which accommodates both e-library and physical books with the Department of Computer Science. The library/research laboratory is connected to the internet. Academic and technology staff offices are internet compliant and most offices are provided with inverter power system.
                </p>
            </div>
            <div className="relative flex justify-start items-start w-[100%] h-[13.5%] max-[1280px]:h-[8%]">
                <div className="absolute top-[18%] z-10 flex flex-row w-[80%] h-[80%] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] px-[1%] rounded-[7px] bg-white">
                    <div className="flex flex-col justify-between item-start w-[58%] h-[65%] pt-[3%] px-[3%] max-[601px]:h-[80%] max-[601px]:pt-[5%] max-[1280px]:h-[70%]">
                        <p className="font-bold text-[2.5vw] text-[#502369] min-[601px]:text-[2.6vw] min-[1280px]:text-[2.1vw]">Mission</p>
                        <p className="font-normal text-[1.7vw] text-justify font-[Montserrat] min-[601px]:text-[1.6vw] min-[1280px]:text-[1.2vw] max-[1280px]:leading-tight">
                            The Department of <span className="text-[#502369] font-medium">Information Technology</span> aims to create and disseminate knowledge through research and education in the theory and application of Information Technology (IT) geared towards global needs and production of self-reliance high-level IT professionals, products and services.
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-[40%] aspect-[1/1] relative">
                        <svg viewBox="0 0 100 77">
                            <line x1="0" y1="0" x2="50" y2="0" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="0" y1="0" x2="0" y2="38.5" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="100" y1="77" x2="50" y2="77" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="100" y1="77" x2="100" y2="38.5" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                        </svg>
                        <div className="absolute w-[95%] h-[80%] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat max-[1280px]:h-[65%]"></div>
                    </div>
                </div>
                <div className="left-[20%] absolute flex flex-row w-[80%] h-[80%] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] px-[1%] rounded-[7px] bg-white">
                    <div className="flex flex-col justify-between item-start w-[58%] h-[65%] pt-[3%] px-[3%] max-[1280px]:h-[80%] max-[601px]:pt-[5%] max-[1280px]:h-[70%]">
                        <p className="font-bold text-[2.5vw] text-[#502369] min-[601px]:text-[2.6vw] min-[1280px]:text-[2.1vw]">Vision</p>
                        <p className="font-normal text-[1.7vw] text-justify font-[Montserrat] min-[601px]:text-[1.6vw] min-[1280px]:text-[1.2vw] max-[1280px]:leading-tight">
                            The Department of <span className="text-[#502369] font-medium">Information Technology</span> aims to create and disseminate knowledge through research and education in the theory and application of Information Technology (IT) geared towards global needs and production of self-reliance high-level IT professionals, products and services.
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-[40%] aspect-[1/1] relative">
                        <svg viewBox="0 0 100 77">
                            <line x1="0" y1="0" x2="50" y2="0" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="0" y1="0" x2="0" y2="38.5" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="100" y1="77" x2="50" y2="77" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                            <line x1="100" y1="77" x2="100" y2="38.5" fill="none" stroke="#0D659F" strokeWidth="1px"/>
                        </svg>
                        <div className="absolute w-[95%] h-[80%] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat max-[1280px]:h-[65%]"></div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[9%] flex flex-col justify-between items-center max-[1280px]:h-[15%]">
                {screenWidth > 1280 ?
                    <p className="font-[Montserrat] font-semibold min-[1280px]:text-[2vw] text-[#502369]">Meet The Department Reps</p>
                :
                    <p className="text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] text-[#502369]">Meet The Dept Reps</p>
                }
                <div className="flex flex-row w-[100%] h-[75%] justify-between max-[1280px]:h-[85%] max-[1280px]:flex-col">
                    <div className="flex flex-row justify-between w-[49%] h-[100%] bg-white px-[1%] py-[1%] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px] max-[1280px]:w-[100%] max-[1280px]:h-[48%]">
                        <div className="flex flex-col w-[59%] h-[75%] pr-[2%] pt-[2%] justify-between max-[460px]:h-[75%] max-[1280px]:h-[65%]">
                            <p className="text-[2.4vw] font-[Montserrat] font-semibold min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Authorize B.Tech on Certificates</p>
                            <p className="text-[2.1vw] font-[Montserrat] font-normal text-justify min-[601px]:text-[2vw] min-[1280px]:text-[1.1vw]">
                                Class ‘23 will officially be the first graduating sets in the IFT to get a Bachelor of Technology on their certificates instead of Bachelor of Science.
                            </p>
                        </div>
                        <div className="w-[39%] h-[98%] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat rounded-[7px] max-[1280px]:w-[32%]"></div>
                    </div>
                    <div className="flex flex-row justify-between w-[49%] h-[100%] bg-white px-[1%] py-[1%] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px] max-[1280px]:w-[100%] max-[1280px]:h-[48%]">
                        <div className="flex flex-col w-[59%] h-[75%] pr-[2%] pt-[2%] justify-between max-[460px]:h-[75%] max-[1280px]:h-[65%]">
                            <p className="text-[2.4vw] font-[Montserrat] font-semibold min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Authorize B.Tech on Certificates</p>
                            <p className="text-[2.1vw] font-[Montserrat] font-normal text-justify min-[601px]:text-[2vw] min-[1280px]:text-[1.1vw]">
                                Class ‘23 will officially be the first graduating sets in the IFT to get a Bachelor of Technology on their certificates instead of Bachelor of Science.
                            </p>
                        </div>
                        <div className="w-[39%] h-[98%] bg-[url('/public/images/image1.png')] bg-cover bg-no-repeat rounded-[7px] max-[1280px]:w-[32%]"></div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[17%] flex flex-col justify-between items-center max-[1280px]:hidden">
                <p className="text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw] text-[#502369]">Innovators within the department</p>
                <div className="w-[100%] h-[90%] flex flex-row justify-between">
                    {innovators.map((innovator)=>(
                        <div className="relative w-[22.9%] h-[98%] flex flex-col justify-end">
                            <div style={{ background: `url(${innovator.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                            <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                <div className="absolute w-[90%] h-[33%] bottom-[3%] flex flex-col justify-between items-center">
                                    <p className="text-[1.2vw] font-[Montserrat] font-bold text-[#01669f]">{innovator.Name} (<span>{innovator.aka})</span></p>
                                    <p className="text-[1vw] font-[Montserrat] font-bold text-[#502369]">{innovator.position} <span>{innovator.company}</span></p>
                                    <p className="text-[0.9vw] font-[Montserrat] font-medium">{innovator.orgInfo}</p>
                                    <div className="flex flex-row w-[100%] h-[23%] justify-around">
                                        <a href={innovator.fb} className="w-[10%] aspect-square flex justify-center items-center">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_733_8969)">
                                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#502369"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_733_8969">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href={innovator.twt} className="w-[10%] aspect-square flex justify-center items-center">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="#502369"/>
                                            </svg>
                                        </a>
                                        <a href={innovator.ln} className="w-[10%] aspect-square flex justify-center items-center">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_733_8971)">
                                                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#502369"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_733_8971">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href={innovator.in} className="w-[10%] aspect-square flex justify-center items-center">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_733_8972)">
                                                    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#502369"/>
                                                    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#502369"/>
                                                    <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="#502369"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_733_8972">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href={innovator.sn} className="w-[10%] aspect-square flex justify-center items-center">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_928_16417)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="#502369"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_928_16417">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Slide5 css="w-[100%] h-[14%] flex-col justify-between items-center hidden max-[1280px]:flex" headColor="text-[#502369]"/>
            <Slide1 css="w-[100%] h-[12%] flex flex-col justify-around items-center" headColor="text-[#502369]"/>
            <Slide2 css="w-[100%] h-[12%] flex flex-col justify-around items-center" headColor="text-[#502369]"/>
            <Slide4 css="w-[100%] h-[12%] flex flex-col justify-around items-center" headColor="text-[#502369]"/>
        </section>
    );
}

function Slide4(props) {
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
            <p className={`text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw] ${props.headColor}`}>Reputable School Staffs</p>
            <div className="w-[100%] h-[90%] flex flex-col flex-wrap gap-x-[2.6%] gap-y-[2.8vw] justify-between content-center overflow-hidden max-[1280px]:gap-x-[3%]">
                {content.map((rep, idx)=> (
                    (screenWidth > 1280) ?
                    <div className={`${(start === idx) ? 'decrease w-[22.9%]' : (end === idx) ? 'increase w-[0%]' : 'w-[22.9%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[7px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[1.2vw] font-[Montserrat] font-bold text-[#01669f]">{rep.Name}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.position}</p>
                                <p className="text-[1vw] font-[Montserrat] font-bold text-[#01669f]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`${(start === idx) ? 'decreaseMobile w-[48%]' : (end === idx) ? 'increaseMobile w-[0%]' : 'w-[48%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${rep.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[55%] absolute left-[5%] bottom-[35%] rounded-[7px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                            <div className="absolute w-[80%] h-[20%] bottom-[8%] flex flex-col justify-between items-center">
                                <p className="text-[3.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.2vw]">{rep.Name}</p>
                                <p className="text-[2.2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2vw] min-[1280px]:text-[1vw]">{rep.position}</p>
                                <p className="text-[2vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">{rep.lvl} Level</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-around px-[0.6%] w-[6%] h-[5%] rounded-[7px] bg-[#edc8ff] max-[1280px]:w-[10%]">
                {Array.from({ length: 4 }, (_, i) => i).map((index)=> (
                    <button onClick={()=> nxt(index)} className={`${(clr === index) ? 'bg-[#4d2165]' : 'bg-white'} w-[20%] rounded-[49%] aspect-square max-[1280px]:w-[17%]`}></button>
                ))}
            </div>
        </section>
    );
}

function Slide5(props) {
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

    const [content, dispatch] = useReducer(reducer, innovators);

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
            <p className={`text-[4vw] font-[Montserrat] font-semibold min-[601px]:text-[3vw] min-[1280px]:text-[2vw] ${props.headColor}`}>Innovators in the department</p>
            <div className="w-[100%] h-[90%] flex flex-col flex-wrap gap-x-[2.6%] gap-y-[2.8vw] justify-between content-center overflow-hidden max-[1280px]:gap-x-[3%]">
                {innovators.map((innovator, idx)=> (
                    <div className={`${(start === idx) ? 'decreaseMobile w-[48%]' : (end === idx) ? 'increaseMobile w-[0%]' : 'w-[48%]'} relative h-[98%] flex flex-col justify-end`}>
                        <div style={{ background: `url(${innovator.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[47%] absolute left-[5%] bottom-[42%] rounded-[7px]"></div>
                        <div className="w-[100%] h-[70%] flex flex-col justify-end items-center shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                            <div className="absolute w-[90%] h-[35%] bottom-[3%] flex flex-col justify-between items-center">
                                <p className="text-[2.5vw] font-[Montserrat] font-bold text-[#01669f] min-[601px]:text-[2.2vw]">{innovator.Name} (<span>{innovator.aka})</span></p>
                                <p className="text-[2.2vw] font-[Montserrat] font-bold text-[#502369] min-[601px]:text-[2vw]">{innovator.position} <span>{innovator.company}</span></p>
                                <p className="text-[2vw] font-[Montserrat] font-medium min-[601px]:text-[1.8vw]">{innovator.orgInfo}</p>
                                <div className="flex flex-row w-[100%] h-[23%] justify-around">
                                    <a href={innovator.fb} className="w-[10%] aspect-square flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_733_8969)">
                                                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#502369"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_733_8969">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href={innovator.ln} className="w-[10%] aspect-square flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="#502369"/>
                                        </svg>
                                    </a>
                                    <a href={innovator.twt} className="w-[10%] aspect-square flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_733_8971)">
                                                <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#502369"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_733_8971">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href={innovator.in} className="w-[10%] aspect-square flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_733_8972)">
                                                <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#502369"/>
                                                <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#502369"/>
                                                <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="#502369"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_733_8972">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href={innovator.sn} className="w-[10%] aspect-square flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_928_16417)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="#502369"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_928_16417">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-around px-[0.6%] w-[6%] h-[5%] rounded-[7px] bg-[#edc8ff] max-[1280px]:w-[10%]">
                {Array.from({ length: 4 }, (_, i) => i).map((index)=> (
                    <button onClick={()=> nxt(index)} className={`${(clr === index) ? 'bg-[#4d2165]' : 'bg-white'} w-[20%] rounded-[49%] aspect-square max-[1280px]:w-[17%]`}></button>
                ))}
            </div>
        </section>
    );
}
export default Dept;