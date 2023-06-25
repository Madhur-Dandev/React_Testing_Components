import { useMemo, useRef, useState } from "react";
import "./ProfileImageCrop.css";

const ProfileImageCrop = () => {
  //   let initWidth = 0;
  //   let initHeight = 0;
  //   let translateX = 0;
  //   let translateY = 0;
  // let initMousePosX = 0;
  // let initMousePosY = 0;
  //   let zoomVal = 0;
  //   let posX = 0,
  //     posY = 0;

  const imageCropContainer = useRef();
  const imageCropPreview = useRef();
  const imageZoomRange = useRef();

  const [zoomRangeVal, setZoomRangeVal] = useState(0);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [initWidth, setInitWidth] = useState(0);
  const [initHeight, setInitHeight] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [initMousePosX, setInitMousePosX] = useState(0);
  const [initMousePosY, setInitMousePosY] = useState(0);

  useMemo(() => {}, [zoomRangeVal]);

  return (
    <div className="image-crop-outer">
      <div className="image-crop-container">
        <div className="action-btn">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="cancel icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="done icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </div>
        <div
          className="img-crop"
          ref={imageCropContainer}
          onMouseDown={(e) => {
            setInitMousePosX(e.clientX);
            setInitMousePosY(e.clientY);
          }}
          onMouseUp={() => {
            setInitMousePosX(0);
            setInitMousePosY(0);
          }}
          onMouseMove={(e) => {
            if ((initMousePosX, initMousePosY)) {
              const x = Math.round((initMousePosX - e.clientX) / 20);
              const y = Math.round((initMousePosY - e.clientY) / 20);

              if (
                posX - x >= translateX - Math.round(zoomRangeVal / 2) &&
                posX - x <= -translateX + Math.round(zoomRangeVal / 2)
              ) {
                setPosX(posX - x);
              }

              if (
                posY - y >= translateY - Math.round(zoomRangeVal / 2) &&
                posY - y <= -translateY + Math.round(zoomRangeVal / 2)
              ) {
                setPosY(posY - y);
              }

              imageCropPreview.current.style.transform = `translate3d(${
                translateX + posX - Math.round(zoomRangeVal / 2)
              }px, ${translateY + posY - Math.round(zoomRangeVal / 2)}px, 0)`;
            }
          }}
        >
          <div className="extra-circle"></div>
          <img
            alt="image"
            className="img"
            draggable="false"
            ref={imageCropPreview}
            src="/images/bg2.jpg"
            onLoad={(e) => {
              if (
                imageCropPreview.current.width > imageCropPreview.current.height
              ) {
                setInitHeight(imageCropContainer.current.clientHeight);
                imageCropPreview.current.style.height = `${imageCropContainer.current.clientHeight}px`;
                imageCropPreview.current.style.transform = `translate3d(${
                  (imageCropPreview.current.width -
                    imageCropContainer.current.clientWidth) /
                  -2
                }px, ${
                  (imageCropPreview.current.height -
                    imageCropContainer.current.clientHeight) /
                  -2
                }px, 0)`;
                setTranslateX(
                  (imageCropPreview.current.width -
                    imageCropContainer.current.clientWidth) /
                    -2
                );
                setTranslateY(
                  (imageCropPreview.current.height -
                    imageCropContainer.current.clientHeight) /
                    -2
                );
              } else {
                setInitWidth(imageCropContainer.current.clientWidth);
                imageCropPreview.current.style.width = `${imageCropContainer.current.clientWidth}px`;
                imageCropPreview.current.style.transform = `translate3d(${
                  (imageCropPreview.current.width -
                    imageCropContainer.current.clientWidth) /
                  -2
                }px, ${
                  (imageCropPreview.current.height -
                    imageCropContainer.current.clientHeight) /
                  -2
                }px, 0)`;
                setTranslateX(
                  (imageCropPreview.current.width -
                    imageCropContainer.current.clientWidth) /
                    -2
                ),
                  setTranslateY(
                    (imageCropPreview.current.height -
                      imageCropContainer.current.clientHeight) /
                      -2
                  );
              }
            }}
          />
        </div>
        <div className="controls">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
            ></path>
          </svg>
          <input
            type="range"
            name="zoom"
            id="zoom"
            step="1"
            max="100"
            value={zoomRangeVal}
            ref={imageZoomRange}
            onInput={(e) => {
              setZoomRangeVal(parseInt(e.target.value));
              if (zoomRangeVal > parseInt(e.target.value)) {
                if (posX - (zoomRangeVal - parseInt(e.target.value)) >= 0) {
                  setPosX(posX - (zoomRangeVal - parseInt(e.target.value)));
                } else if (
                  posX + (zoomRangeVal - parseInt(e.target.value)) <=
                  0
                ) {
                  setPosX(posX + (zoomRangeVal - parseInt(e.target.value)));
                } else {
                  setPosX(0);
                }

                if (posY - (zoomRangeVal - parseInt(e.target.value)) >= 0) {
                  setPosY(posY - (zoomRangeVal - parseInt(e.target.value)));
                } else if (
                  posY + (zoomRangeVal - parseInt(e.target.value)) <=
                  0
                ) {
                  setPosY(posY + (zoomRangeVal - parseInt(e.target.value)));
                } else {
                  setPosY(0);
                }
              }

              if (initWidth) {
                imageCropPreview.current.style.width = `${
                  initWidth + zoomRangeVal
                }px`;
              } else {
                imageCropPreview.current.style.height = `${
                  initHeight + zoomRangeVal
                }px`;
              }

              imageCropPreview.current.style.transform = `translate3d(${
                translateX + posX - Math.round(zoomRangeVal / 2)
              }px, ${translateY + posY - Math.round(zoomRangeVal / 2)}px, 0`;
              e.target.value = `${zoomRangeVal}`;
            }}
          />
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            ></path>
          </svg>
        </div>
      </div>
      <input
        type="file"
        name="img"
        id="img"
        style={{
          display: "block",
        }}
        onChange={(e) => {
          imageCropPreview.current.src = (URL || webkitURL).createObjectURL(
            e.target.files[0]
          );
        }}
      />
    </div>
  );
};

export default ProfileImageCrop;
