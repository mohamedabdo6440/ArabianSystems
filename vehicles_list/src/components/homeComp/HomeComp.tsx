"use client";
import React, { FC, useEffect, useState } from "react";
import CardUse from "../CardUse/CardUse";
import CardLoading from "../CardUse/CardLoading";

interface Props {
  carsData: any;
  isLoading: boolean;
}

const HomeComp: FC<Props> = ({ carsData, isLoading }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const highestBids =
    carsData?.length &&
    carsData?.reduce((prev: any, current: any) =>
      prev.Bids > current.Bids ? prev : current
    );

  const lowestBids =
    carsData?.length &&
    carsData?.reduce((prev: any, current: any) =>
      prev.Bids < current.Bids ? prev : current
    );

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {isClient && isLoading ? (
        carsData?.map((CarDetail: any) => (
          <CardUse
            {...CarDetail}
            highestBids={highestBids?.Bids}
            lowestBids={lowestBids?.Bids}
            key={CarDetail.Lot}
          />
        ))
      ) : (
       <>
        <CardLoading buttColor={"danger"}/>
        <CardLoading buttColor={"danger"}/>
        <CardLoading buttColor={"dark"}/>
        <CardLoading buttColor={"danger"}/>
       </>
      )}
    </div>
  );
};

export default HomeComp;
