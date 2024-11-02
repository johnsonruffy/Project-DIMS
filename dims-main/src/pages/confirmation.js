import { Link } from "react-router-dom";

function Confirmation () {
    return (
        <div className="w-[100%] h-[100vh] px-[3%] py-[2%] flex flex-col justify-between bg-[#0D659F]">
            <div className="w-[100%] h-[7%] items-center flex flex-row justify-between px-[3%]">
                <p className="font-[Montserrat] text-[2.9vw] font-bold min-[601px]:text-[2vw] min-[1280px]:text-[1.7vw] text-white">ITDIMS</p>
            </div>
            <div className="w-[100%] h-[90%] flex flex-col justify-start items-center pt-[10%]">
                <p className="text-[4.5vw] font-[Montserrat] font-medium text-white min-[601px]:text-[18px] min-[1280px]:text-[1.3vw] text-center">
                    A link to confirm your registration has been sent to your mail. Click on the button to proceed
                </p>
                <Link to="/signin" className="w-[10%] h-[8%] max-[1280px]:w-[130px] max-[1280px]:h-[7%] bg-[#FDF8FF] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex items-center justify-between max-[1280px]:justify-start max-[1280px]:gap-x-[3%] px-[2%] rounded-[7px] mt-[10%] cursor-pointer">
                    <div className="w-[25%] aspect-square">
                        <svg viewBox="0 0 25 24" fill="none">
                            <path d="M10.07 5.92993L4 11.9999L10.07 18.0699" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.9999 12H4.16992" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="font-[Montserrat] font-semibold text-[15px] text-[#502369] min-[460px]:text-[3vw] min-[601px]:text-[15px] min-[1280px]:text-[0.9vw]">Go Back</p>
                </Link>
            </div>
        </div>
    );
}

export default Confirmation;