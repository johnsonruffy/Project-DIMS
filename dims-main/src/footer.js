import { Link } from "react-router-dom"

function Footer () {
    const navigation = [
        {name: 'Home', to: '/'},
        {name: 'Dept.info', to: 'dept'},
        {name: 'News', to: 'news'},
        {name: 'Contact Us', to: 'contact'}
    ]

    const about = [
        {name: 'Origin', to: '/'},
        {name: 'FUTA', to: '/'},
        {name: 'Press', to: '/'}
    ]

    const support = [
        {name: 'FAQ', to: '/'},
        {name: 'Info', to: '/'}
    ]

    const contact = [
        {name: '+12-234-345', to: '/'},
        {name: '+23-567-678', to: '/'},
        {name: 'hello@diamas.com', to: '/'}
    ]

    return (
        <section className="flex flex-col justify-between items-center w-[100%] aspect-[1/0.3] bg-[#41005f] pt-[4%] pb-[2%] max-[860px]:aspect-[1/1] max-[1280px]:items-start">
            <p className="font-[Montserrat] text-[3.7vw] font-normal text-[#cce0ec] hidden max-[1280px]:inline pl-[5%] min-[601px]:text-[22px] min-[860px]:text-[1.7vw] min-[1280px]:text-[1.2vw]">ITDIMS</p>
            <section className="flex flex-row justify-between items-top w-[100%] h-[75%] px-[5%] max-[860px]:flex-wrap max-[860px]:mt-[5%]">
                <p className="font-[Montserrat] text-[1.7vw] font-normal text-[#cce0ec] max-[1280px]:hidden">ITDIMS</p>
                <div className="flex flex-col gap-y-[8%] w-[20%] h-[100%] pt-[0.3%] max-[860px]:w-[50%] max-[860px]:h-[45%]">
                    <p className="font-[Montserrat] text-[3vw] font-bold text-white min-[601px]:text-[20px] min-[860px]:text-[1.7vw] min-[1280px]:text-[1.2vw]">Navigation</p>
                    {navigation.map((nav)=>(
                        <Link className="font-[Montserrat] text-[2.5vw] font-semibold text-white min-[601px]:text-[17px] min-[860px]:text-[1.2vw] min-[1280px]:text-[0.9vw]" to={nav.to}>{nav.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col gap-y-[8%] w-[20%] h-[100%] pt-[0.3%] max-[860px]:w-[50%] max-[860px]:h-[45%]">
                    <p className="font-[Montserrat] text-[3vw] font-bold text-white min-[601px]:text-[20px] min-[860px]:text-[1.7vw] min-[1280px]:text-[1.2vw]">About us</p>
                    {about.map((abt)=>(
                        <Link className="font-[Montserrat] text-[2.5vw] font-semibold text-white min-[601px]:text-[17px] min-[860px]:text-[1.2vw] min-[1280px]:text-[0.9vw]" to={abt.to}>{abt.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col gap-y-[8%] w-[20%] h-[100%] pt-[0.3%] max-[860px]:w-[50%] max-[860px]:h-[45%]">
                    <p className="font-[Montserrat] text-[3vw] font-bold text-white min-[601px]:text-[21px] min-[860px]:text-[1.7vw] min-[1280px]:text-[1.2vw]">Support</p>
                    {support.map((spt)=>(
                        <Link className="font-[Montserrat] text-[2.5vw] font-semibold text-white min-[601px]:text-[17px] min-[860px]:text-[1.2vw] min-[1280px]:text-[0.9vw]" to={spt.to}>{spt.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col gap-y-[8%] w-[20%] h-[100%] pt-[0.3%] max-[860px]:w-[50%] max-[860px]:h-[45%]">
                    <p className="font-[Montserrat] text-[3vw] font-bold text-white min-[601px]:text-[20px] min-[860px]:text-[1.7vw] min-[1280px]:text-[1.2vw]">Contact us</p>
                    {contact.map((cct)=>(
                        <Link className="font-[Montserrat] text-[2.5vw] font-semibold text-white min-[601px]:text-[17px] min-[860px]:text-[1.2vw] min-[1280px]:text-[0.9vw]" to={cct.to}>{cct.name}</Link>
                    ))}
                </div>
            </section>
            <div className="flex justify-center items-center w-[100%] h-[15%] bg-[#00659f] min-[601px]:h-[10%]">
                <p className="font-[Montserrat] text-[3.4vw] font-semibold text-white min-[601px]:text-[20px] min-[860px]:text-[1.5vw] min-[1280px]:text-[1.2vw]">ITDIMS 2024,inc, All rights reserved.</p>
            </div>
        </section>
    );
}

export default Footer;