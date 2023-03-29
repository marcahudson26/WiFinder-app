import { useState, useEffect } from "react";

import styles from "./styles/PullOutTray.module.css";
import freeWifi from "../assets/png/wifi_bnw_logo.png";

const PullOutTray = () => {
  return (
    <>
      {/* slide out main bottom */}
      <section className={`${styles.bottom} pb-6`}>
        {/* colour section */}
        <div className={`${styles.bottom} pb-4 items-center justify-center`}>
          {/* content card */}
          <div
            className={`${styles.card} shadow-md p-4 pb-2 flex justify-center
            text-center mx-auto`}
          >
            <div className={`${styles.grabWifiInline} flex items-center`}>
              <h4
                className={`${styles.grabText} text-sm font-medium text-white 
              animate-fadeIn delay-500`}
              >
                Grab Some
              </h4>
              <img
                className="mx-auto mb-2"
                src={freeWifi}
                alt="wifi stamp icon"
                width="100px"
              />
              <h4
                className={`${styles.grabText} 
                text-sm font-medium  text-white animate-fadeIn delay-500`}
              >
                right NOW!
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PullOutTray;
