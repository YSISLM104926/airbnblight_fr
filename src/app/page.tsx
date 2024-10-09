'use client'
import Card from "@/Components/Card";
import IconBasedCard from "@/Components/IconBasedCard";
import { useGetPlacesQuery } from "@/redux/api/baseApi";
import Navbar from "@/Shared/Navbar";
import { Skeleton, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

type StateProps = {
  price: {
    price: string,
    priceTwo: string
  }
}

export default function Home() {
  const price = useSelector((state: StateProps) => state.price)
  const { data: getPlaces, isLoading: isGetPlacesLoading } = useGetPlacesQuery(price);
  if (isGetPlacesLoading) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
  }
  // console.log(getPlaces.data);
  console.log(price);
  return (
    <div>
      <Navbar />
      <div>
        <IconBasedCard />
      </div>
      <Skeleton isLoaded={!isGetPlacesLoading}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {
            getPlaces?.data.map((place: any, index: number) => <Card key={index} place={place} />)
          }
        </div>
      </Skeleton>
    </div>
  );
}
