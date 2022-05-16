import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../components/css/Counter_up.css";
export default function Counter_up(props) {
  let check = 1;
  return (
    <div style={{ color: "white", zIndex: "2", position: "relative" }}>
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 5 }}>
        {({ isVisible }) => (
          <div className="count_up">
            {isVisible && check ? (
              <CountUp duration={1} end={props.end} suffix={""}>
                {" "}
                {(check = 0)}
              </CountUp>
            ) : (
              <div style={{color:'rgb(54, 8, 8)', fontSize:'1.5rem'}}>{props.end}</div>
            )}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}
