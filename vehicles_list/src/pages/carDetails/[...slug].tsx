import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "../../components/CardUse/CardUse.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import { CiCamera, CiHeart } from "react-icons/ci";
import { ImHammer2 } from "react-icons/im";
import { MdAlarm } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import { json } from "stream/consumers";
const index = () => {
  const router = useRouter();
  const { query } = router;
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const image: any = query?.MainImage;
  const width: number = 300;
  const height: number = 200;
  const formattedImageUrl = image
    ?.replace("[w]", width.toString())
    .replace("[h]", height.toString());


  return (
    <div className="container my-4">
      <div className="card mb-3 W-75" style={{ width: "100%;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {imageLoaded ? (
              <div
                className=""
                style={{
                  width: "22rem",
                  height: "250px",
                  backgroundImage: `url(${formattedImageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "relative",
                }}
                onError={handleImageError}
              >
                <p className={`${style.topDetail}`}>
                  <span className={`${style.lot}`}>Lot# {query?.Lot}</span>
                </p>
                <div className={`${style.buttDetail}`}></div>
              </div>
            ) : (
              <div>Image failed to load :('</div>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{query?.Title}</h5>
              <div className="w-100 d-flex align-items-center justify-content-center">
                <p className="text-secondary fs-6 fw-bold mb-2">
                  {query?.Currency}
                </p>
                <p className="mb-0 ms-1 fw-bold fs-6">
                  {query?.CurrentPriceStr}
                </p>
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
                  <span>{query?.EndDateStr}</span>
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
                    <span>{query?.Bids}</span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div>
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laudantium vero odit error, ipsum nisi repudiandae itaque accusamus optio eum sequi ullam praesentium debitis, adipisci sit. Veniam iusto deserunt numquam?
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
