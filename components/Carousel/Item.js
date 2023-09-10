import Image from "next/image";

export const Item = ({img, text, customer}) => {
    return(
        <div className=" w-full my-20 mx-auto">
            <div className="shadow-sm rounded md:shadow w-full md:w-4/6 mx-auto flex flex-col md:flex-row md:items-center">
               
                    {/* <img src={img} alt="" className="w-full" /> */}
                    <Image
                    src={img}
                    height={350}
                    width={350}
                    alt=""
                    />
                
                <div className="px-20 py-20 w-full md:w-2/3">
                    <span className="text-red-600 text-3xl">
                        <i className="bi bi-quote"></i>  
                    </span>
                    <p className="text-xl text-gray-900 tracking-wide mb-10">{text}</p>
                
                    <span className="font-semibold text-xl text-gray-900 capitalize">{customer}</span>
                </div>
            </div>
        </div>
    )
}