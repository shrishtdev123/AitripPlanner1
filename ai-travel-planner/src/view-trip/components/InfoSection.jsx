import { Button } from "@/components/ui/button";
import { GetPlacesDetails } from "/src/service/GlobalApi.jsx";
import { useEffect } from "react";
import { FaShare } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const InfoSection = ({trip}) => {
      console.log(trip);

       useEffect(()=>{
        trip&&GetplacesPhots();
       },[trip])

      const GetplacesPhots=async()=>{

           const data={
                  'textQuery':trip?.place
           }
           const result=await GetPlacesDetails(data);
            console.log(result.data);
            
      }
      
  return (
    <div>
      <img src="/img3.avif" alt="dvdddvd" className="h-[340px] w-full object-cover rounded-xl"/>
      <div className="flex justify-between items-center">
      <div className="my-5 flex flex-col gap-2">
         <h2 className="font-bold text-2xl">{trip?.place}</h2>
         <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-md">
            📆{trip.userSelection?.noOfdays} days</h2>
                  
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500
                  text-xs md:text-md
            ">
            💰{trip.userSelection?.buget} buget</h2>

            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-md">
            🍾No. of Traveral:
            {trip.userSelection?.traveler}</h2>
         </div>
      </div>
         <Button> 
         <FaShare />
         </Button>
      </div>
    </div>
  )
}
