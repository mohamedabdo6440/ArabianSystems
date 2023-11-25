'use client'
import React, { FC, useEffect, useState } from "react";
import CardUse from "../CardUse/CardUse";

interface Props {
  carsData: any;
}

const HomeComp: FC<Props> = ({ carsData }) => {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  const highestBids = carsData.reduce((prev: any, current: any) =>
    prev.Bids > current.Bids ? prev : current
  );

  const lowestBids = carsData.reduce((prev: any, current: any) =>
    prev.Bids < current.Bids ? prev : current
  );

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {isClient && carsData?.map((CarDetail: any) => (
        <CardUse
          {...CarDetail}
          highestBids={highestBids?.Bids}
          lowestBids={lowestBids?.Bids}
          key={CarDetail.Lot}
        />
      ))}
    </div>
  );
};

export default HomeComp;
