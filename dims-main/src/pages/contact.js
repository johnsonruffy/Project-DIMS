function Contact() {
    return (
        <section className="w-[100%] pl-[5%] pr-[3%] aspect-[1/0.75] flex flex-col items-center justify-between py-[4%] max-[1280px]:pt-[10%] max-[1280px]:pb-[20%] max-[1280px]:aspect-[1/1.8] max-[460px]:aspect-[1/2.5]">
            <div className="flex flex-col w-[100%] h-[15%] justify-between items-center max-[1280px]:h-[13%]">
                <p className="text-[4.5vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[4.5vw] min-[1280px]:text-[2.2vw]">Contact the department</p>
                <p className="text-[3.4vw] font-[Montserrat] text-center font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.3vw]">Reach out to us for enquiries about the school and department. You can as well<br/>get in contact with our team for anything.</p>
            </div>
            <div className="flex w-[100%] h-[80%] max-[1280px]:justify-center max-[1280px]:items-center">
                <div className="w-[30%] h-[full] flex flex-col items-start pt-[3%] bg-[#F9FAFB] px-[3%] max-[1280px]:hidden">
                    <p className="text-[2.8vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[2.2vw] min-[1280px]:text-[1.5vw] mb-[3%]">Get in touch</p>
                    <p className="text-[2.2vw] font-[Montserrat] text-left font-medium min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw] mb-[4%]">We’ love to hear from you. Our friendly team is always here to chat.</p>
                    <div className="flex w-[100%] justify-between h-[23%]">
                        <div className="w-[10%] aspect-square">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                            <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Chat with Us</p>
                            <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">Our friendly team is here to help.</p>
                            <a href="/" className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[601px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">IFT.com</a>
                        </div>
                    </div>
                    <div className="flex w-[100%] justify-between h-[23%]">
                        <div className="w-[10%] aspect-square">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                            <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Office</p>
                            <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">SOC building, FUTA</p>
                            <a href="/" className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[601px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">100 Smith Street<br/>Collingwood VIC 3066 AU</a>
                        </div>
                    </div>
                    <div className="flex w-[100%] justify-between h-[23%]">
                        <div className="w-[10%] aspect-square">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                            <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[601px]:text-[2vw] min-[1280px]:text-[1.2vw]">Phone</p>
                            <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[601px]:text-[1.5vw] min-[1280px]:text-[1vw]">Mon-Fri from 8am to 5pm.</p>
                            <a href="/" className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[601px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">+1 (555) 000-0000</a>
                        </div>
                    </div>
                    <div className="flex justify-start w-[100%] gap-x-[10%]">
                        <div className="w-[10%] aspect-square cursor-pointer">
                            <svg viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1797_1757)">
                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#502369"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1797_1757">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-[10%] aspect-square cursor-pointer">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2468 21.5583 7.74192C21.5583 7.53098 21.5536 7.31536 21.5442 7.10442C22.5079 6.40752 23.3395 5.54432 24 4.55536C23.1025 4.95466 22.1496 5.21544 21.1739 5.3288C22.2013 4.71297 22.9705 3.74553 23.3391 2.60583C22.3726 3.17862 21.3156 3.58267 20.2134 3.80067C19.4708 3.01162 18.489 2.48918 17.4197 2.31411C16.3504 2.13905 15.2532 2.32111 14.2977 2.83216C13.3423 3.3432 12.5818 4.15477 12.1338 5.14137C11.6859 6.12798 11.5754 7.23468 11.8195 8.29036C9.86249 8.19215 7.94794 7.68377 6.19998 6.79816C4.45203 5.91255 2.90969 4.6695 1.67297 3.14958C1.0444 4.2333 0.852057 5.51571 1.13503 6.73615C1.418 7.9566 2.15506 9.02351 3.19641 9.72005C2.41463 9.69523 1.64998 9.48474 0.965625 9.10598V9.16692C0.964925 10.3042 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1932 3.43198 14.2221 2.69484 14.0794C3.00945 15.0575 3.62157 15.913 4.44577 16.5264C5.26997 17.1398 6.26512 17.4807 7.29234 17.5013C5.54842 18.8712 3.39417 19.6142 1.17656 19.6107C0.783287 19.6101 0.390399 19.586 0 19.5385C2.25286 20.9838 4.87353 21.7514 7.55016 21.75Z" fill="#502369"/>
                            </svg>
                        </div>
                        <div className="w-[10%] aspect-square cursor-pointer">
                            <svg viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1797_1761)">
                                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#502369"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1797_1761">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <form className="w-[70%] h-[full] flex flex-col justify-center items-center gap-y-[3%] max-[1280px]:h-[95%] max-[1280px]:w-[100%]">
                    <div className="max-[1280px]:flex hidden flex-col w-[60%] items-start h-[13%] justify-between max-[1280px]:w-[90%]">
                        <p className="text-[3.5vw] font-[Montserrat] text-left font-semibold min-[460px]:text-[3vw] min-[601px]:text-[2.7vw]">Level up your brand</p>
                        <div className="">
                            <p className="text-[3.2vw] font-[Montserrat] text-left font-normal min-[460px]:text-[2.7vw] min-[601px]:text-[2vw]">You can reach us anytime via<br/><a href="/" className="font-medium text-blue-800">IFT@mail.com</a></p>
                        </div>
                    </div>
                    <div className="w-[60%] h-[10%] flex justify-between max-[1280px]:flex-col max-[1280px]:h-[23%] max-[1280px]:w-[90%]">
                        <div className="w-[48%] h-[100%] flex flex-col justify-between max-[1280px]:h-[45%] max-[1280px]:w-[100%]">
                            <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1vw]" for="firstname">First Name</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[6%] max-[1280px]:pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[2vw] min-[1280px]:placeholder:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="text" id="firstname" name="firstname" placeholder="First Name"/>
                        </div>
                        <div className="w-[48%] h-[100%] flex flex-col justify-between max-[1280px]:h-[45%] max-[1280px]:w-[100%]">
                            <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1vw]" for="lastname">Last Name</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[6%] max-[1280px]:pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[2vw] min-[1280px]:placeholder:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="text" id="lastname" name="lastname" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="w-[60%] h-[10%] flex max-[1280px]:w-[90%]">
                        <div className="w-[100%] h-[100%] flex flex-col justify-between">
                            <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1vw]" for="email">Email</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[2vw] min-[1280px]:placeholder:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="email" id="email" name="email" placeholder="You@company.com"/>
                        </div>
                    </div>
                    <div className="w-[60%] h-[10%] flex max-[1280px]:w-[90%]">
                        <div className="w-[100%] h-[100%] flex flex-col justify-between">
                            <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1vw]" for="phone">Phone</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[2vw] min-[1280px]:placeholder:text-[0.95vw] focus:outline-none focus:border focus:border-black" type="text" id="phone" name="phone" placeholder="+234    000-0000"/>
                        </div>
                    </div>
                    <div className="w-[60%] h-[27%] flex max-[1280px]:w-[90%]">
                        <div className="w-[100%] h-[100%] flex flex-col justify-between">
                            <label className="text-[3.2vw] font-[Montserrat] font-medium min-[460px]:text-[2.5vw] min-[601px]:text-[2.2vw] min-[1280px]:text-[1vw]" for="message">Message</label>
                            <textarea className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[87%] pl-[3%] pr-[2%] py-[1%] placeholder:font-[Montserrat] placeholder:text-[3vw] min-[460px]:placeholder:text-[2.5vw] min-[601px]:placeholder:text-[2vw] min-[1280px]:placeholder:text-[0.95vw] focus:outline-none focus:border focus:border-black" rows="2" col="40" id="message" name="message"></textarea>
                        </div>
                    </div>
                    <div className="w-[60%] h-[7%] flex max-[1280px]:w-[90%]">
                        <div className="w-[100%] h-[100%] flex flex-col justify-between">
                            <input className="border rounded-[5px] w-[100%] h-[100%] pl-[3%] bg-[#502369] font-[Montserrat] text-white text-[3.2vw] min-[460px]:text-[2.5vw] min-[601px]:text-[2vw] min-[1280px]:text-[1vw]" type="submit" value="Send message" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;