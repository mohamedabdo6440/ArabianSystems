import React, { FC, useEffect, useState } from "react";
import style from "./CardUse.module.scss";
import { CiHeart, CiCamera } from "react-icons/ci";
import { AiOutlineEllipsis } from "react-icons/ai";
import { RiPushpinFill } from "react-icons/ri";
import { IoMdSpeedometer } from "react-icons/io";
import { SlSpeedometer } from "react-icons/sl";
import { MdAlarm } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";
import Image from "next/image";

interface CarDetails {
  Id: number;
  MainImage: string;
  Lot: string;
  Title: string;
  AllowToBid: boolean;
  IsExclusive: boolean;
  HasNotification: boolean;
  EndDateStr: string;
  Bids: number;
  Tags: any;
  Currency: string;
  CurrentPriceStr: string;
}

interface AdditionalProps {
  highestBids?: number;
  lowestBids?: number;
}

type Props = CarDetails & AdditionalProps;

const CardDetails: FC<Props> = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    Id,
    MainImage,
    Lot,
    Title,
    AllowToBid,
    IsExclusive,
    HasNotification,
    EndDateStr,
    Bids,
    Tags,
    Currency,
    CurrentPriceStr,
    highestBids,
    lowestBids,
  } = props;

  const [imageLoaded, setImageLoaded] = useState(true);


  const handleImageError = () => {
    setImageLoaded(false);
  };

  const width: number = 300;
  const height: number = 200;
  const formattedImageUrl = MainImage.replace("[w]", width.toString()).replace(
    "[h]",
    height.toString()
  );

  return (
    <div key={Id}>
      {isClient && (
        <div className="card m-2" style={{ width: "16rem" }}>
          {isClient && imageLoaded ? (
            <div
              className=""
              style={{
                width: "16rem",
                height: "150px",
                backgroundImage: `url(${formattedImageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
              onError={handleImageError}
            >
              <p className={`${style.topDetail}`}>
              {
                Bids === highestBids ? (
                  <span className={`${style.pinTop}`} style={{backgroundColor:"#e21836"}}>
                  <RiPushpinFill size={20} />
                </span>
                ) : (
                  <span className={`${style.pinTop}`}></span>
                )
              }
                <span className={`${style.lot}`}>Lot# {Lot}</span>
              </p>
              <div className={`${style.buttDetail}`}>
                {(Bids === highestBids || Bids === lowestBids) && (
                  <p
                    className={`${
                      Bids === highestBids
                        ? "bg-success text-light"
                        : "bg-danger text-light"
                    }`}
                  >
                    {Bids === highestBids ? "Highest Bidder" : "outbidded"}
                  </p>
                )}

                <span>
                  <CiCamera size={24} />
                </span>
                <span>
                  <CiHeart size={24} />
                </span>
                <span>
                  <AiOutlineEllipsis size={24} />
                </span>
              </div>
            </div>
          ) : (
            <div>Image failed to load :('</div>
          )}

          <div className="card-body">
            <p className="card-title mt-2 fw-bold" style={{ fontSize: "14px" }}>
              {Title}
            </p>
            <div className="km d-flex justify-content-around w-100">
              {Tags &&
                Tags?.map((tag: any , i:number) => (
                  <div
                  key={i}
                    className="d-flex"
                    style={{
                      backgroundColor: `${tag.BGColor}`,
                      padding: "5px",
                      borderRadius: "3px",
                      fontSize: "13px",
                      color: `${tag.TextColor}`,
                    }}
                  >
                    {imageLoaded && (
                      <Image
                        src={tag.Image}
                        alt="Tag "
                        width={15}
                        height={15}
                      />
                    )}

                    <span className="ms-1">{tag.Title}</span>
                  </div>
                ))}
              <span
                className="text-success"
                style={{
                  backgroundColor: "#00000019",
                  padding: "5px",
                  borderRadius: "3px",
                  fontSize: "13px",
                }}
              >
                <SlSpeedometer /> {"Low Mileage"}
              </span>
            </div>
            <div
              style={{
                borderTop: "1px solid #00000019",
                borderBottom: "1px solid #00000019",
                height: "35px",
                fontSize: "13px",
              }}
              className="my-2 d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <MdAlarm size={20} color="#00000069" />
                </span>
                <span>{EndDateStr}</span>
              </div>
              <div
                style={{
                  borderLeft: "1px solid #00000019",
                  paddingLeft: "3px",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <ImHammer2 color="#00000069" />
                  </span>
                  <span>{Bids}</span>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <p className="text-secondary fs-6 fw-bold mb-2">{Currency}</p>
              <p className="mb-0 ms-1 fw-bold fs-6">{CurrentPriceStr}</p>
            </div>
            <div className="text-center w-100">
              {
                Bids === highestBids ? (
                  <button className="btn btn bg-dark text-light w-75">
                  <ImHammer2/> Bid Now
                 </button>
                ) : (
                      <button className="btn btn bg-danger text-light w-75">
                      <ImHammer2/> Bid Now
                     </button>
                )
              }
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;

