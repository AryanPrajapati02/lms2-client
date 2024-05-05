import Navbar from "../components/Navbar"
import { useAuth } from "../store/auth"

export const Services =() =>{
    const {service} = useAuth();
    return (
        <>
        <Navbar />
       <div className="grid mr-10  grid-cols-3">
       {service.map((elem ,index)=>{
        return(
            <div  className="shadow-xl mt-10  min-h-[60vh] p-3 m-3 w-[30vw] rounded-xl hover:border-b-[#8270F0] hover:scale-105 border-[3px] hover:transition-all delay-100 translate-x-7  ">
            <img src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?t=st=1714898658~exp=1714902258~hmac=0ad054b1b7c39a27d40d304988d0b709b074e5ecd371a9d3560d204152eeec6e&w=740" className="h-[40vh] w-[40vw] rounded-xl" alt="" />
            <div className="flex justify-between p-2 mt-2">
               <p>{elem.providerName}</p>
               <p>{elem.price}</p>
            </div>
            <h1 className="p-2 mt-2 font-mera font-bold text-xl">
            
             {elem.serviceName}
            </h1>
            <h1 className="p-2 text-zinc-500">
            {elem.description}
            </h1>
           </div>
    )
   })}
       </div>
        </>
    )

}