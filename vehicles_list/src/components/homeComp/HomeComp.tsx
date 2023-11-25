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

      {
        carsData.length !== 0 ? (
          isClient && isLoading ? (
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
          )
        ) : (
          <div className=" my-5">
            <p className="text-danger">Your search did not match any results. !</p>
            <p className="text-secondary">- Make sure to write your search words accurately.</p>
            </div>
        )
      }
     
    </div>
  );
};

export default HomeComp;
