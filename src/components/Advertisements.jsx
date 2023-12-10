import React from "react";
import { adsList } from "../constants";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Advertisements = (props) => {
  return (
    <div className="advertisement bg-gray-300 flex flex-col min-h-[100%] h-fit pb-4 max-w-[200px]">
      <div className="text-center pt-4">友情赞助</div>
      {adsList.map((ad, index) => (
        <div key={`ad-${index}`}>
          <AdvertisementSection ad={ad} />
        </div>
      ))}
    </div>
  );
};

const AdvertisementSection = ({ ad }) => {
  const { img, content } = ad;
  return (
    <Popup
      modal
      nested
      trigger={
        <button>
          <img className="w-full h-auto pt-4" src={img} />
        </button>
      }
      contentStyle={{
        width: "80%",
        height: "80%",
        maxWidth: "800px",
        maxHeight: "600px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full flex flex-col justify-around items-center">
          {content.map((section, index) => {
            if (section[0] == "text")
              return (
                <p key={`footer-p-${index}`} className="text-lg p-2">
                  {section[1]}
                </p>
              );
            if (section[0] == "img")
              return (
                <img
                  key={`footer-p-${index}`}
                  className="w-[75%] h-auto"
                  src={section[1]}
                />
              );
          })}
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  );
};

export default Advertisements;
