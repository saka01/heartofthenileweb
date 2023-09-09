import Image from "next/image";
import Link from "next/link";
import { Logo } from "../Logo";

const Footer = () => {
    return (
        <footer className="bg-[#1F1B2D] pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-24">
                <div>
                    <h4 className="text-gray-100 text-lg font-semibold mb-20">About us</h4>
                    <div className="flex items-start">
                        <Logo />
                    </div>
                   <p className="w-full md:w-5/6 text-sm text-gray-100 tracking-wide mb-16">Heart Of The Nile is a unique and beautiful collection of Sudanese Foods right from Nile.</p>
                   
                    <div className="flex flex-col">
                        <Link href={"/"}> 
                        <span className="text-gray-100 text-sm mb-5 cursor-pointer hover:font-semibold hover:text-[#CE2829]">Home</span></Link>
                        <Link href={"about"} >
                            <span className="text-gray-100 text-sm mb-5 cursor-pointer hover:font-semibold hover:text-[#CE2829]">About</span></Link>
                        <Link href={"menu"} >
                            <span className="text-gray-100 text-sm mb-5 cursor-pointer hover:font-semibold hover:text-[#CE2829]">Menu</span>
                        </Link>
                        <Link href={"#"}>
                            <span className="text-gray-100 text-sm mb-5 cursor-pointer hover:font-semibold hover:text-[#CE2829]">Our Community</span>
                        </Link>
                    </div>
                </div>
                <ul>
                <h4 className="text-gray-100 text-lg font-semibold mb-20">Get in Touch</h4>
                    <li className="flex items-center mb-24">
                       <span className="flex items-center justify-center rounded-full w-10 h-10 bg-[#262137] text-[#CE2829] mr-3">
                            <i className="bi bi-telephone-fill"></i>
                        </span> 
                        <a href="tel:(519) 915-1292" className="text-gray-300 hover:font-semibold">(519) 915-1292</a>
                    </li>
                    <li className="flex items-start">
                       <span className="flex items-center justify-center rounded-full w-10 h-10 bg-[#262137] text-[#CE2829] mr-3">
                            <i className="bi bi-geo-alt-fill"></i>
                        </span> 
                        <address className="text-gray-300">1256 Howard Avenue<br/> Windsor, Ontario</address>
                    </li>
                    <li className="flex items-start">
                       <span className="flex items-center justify-center rounded-full w-10 h-10 bg-[#262137] text-[#CE2829] mr-3">
                            <i className="bi bi-calendar3"></i>
                        </span> 
                        <div className="text-gray-300">
                            <h4 className="text-gray-300 font-semibold text-sm">Weekdays:</h4>
                            <time>11:00 AM - 9:00 PM</time>
                            <h4 className="text-gray-300 font-semibold text-sm">Weekends:</h4>
                            <time>1:00 PM - 9:00 PM</time>
                        </div>
                    </li>
                </ul>  
                <div className="w-full  flex justify-start md:justify-end">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.6547754454746!2d-83.0225748!3d42.3072312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cf0ff8140e5%3A0xc79f24eea7af6519!2s1256%20Howard%20Ave%20%231%2C%20Windsor%2C%20ON%20N9A%204C5%2C%20Canada!5e0!3m2!1sen!2sng!4v1694215960790!5m2!1sen!2sng" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>      
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-t-slate-600 py-10 mt-10 px-24">
               <p className="text-gray-300 text-sm tracking-wide">© Copyright {new Date().getFullYear()} 
               <a href="#" className="text-[#CE2829] px-2">Heart Of The Nile</a>{" "}
                All Rights Reserved.
                </p>
               
                <div className="flex items-center mt-10 md:mt-0">
                    <a href="#" className="text-gray-300">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="ml-10 text-gray-300">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="ml-10 text-gray-300">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="ml-10 text-gray-300">
                        <i className="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
        
        // <>
        //     <div className="footer">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        //                     <div className="copyright">
        //                         <p>
        //                             © Copyright {new Date().getFullYear()} <a href="#">Heart Of The Nile</a>{" "}
        //                             All Rights Reserved.
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        //                     <div className="footer-social">
        //                         <ul>
        //                             <li>
        //                                 <a href="#">
        //                                     <i className="bi bi-facebook"></i>
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a href="#">
        //                                     <i className="bi bi-twitter"></i>
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a href="#">
        //                                     <i className="bi bi-linkedin"></i>
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a href="#">
        //                                     <i className="bi bi-youtube"></i>
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default Footer;