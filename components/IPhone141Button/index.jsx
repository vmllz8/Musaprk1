import React from "react";
import Notification from "../Notification";
import Button2 from "../Button2";
import "./IPhone141Button.css";

function IPhone141Button(props) {
  const {
    navbarBrand,
    about,
    features,
    pricing,
    getStarted,
    group4,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
    vector18,
    vector19,
    vector20,
    vector21,
    vector22,
    vector23,
    vector24,
    x1,
    text3,
    button2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-1-button screen" name="form1" action="form1" method="post">
        <div className="navbar-logo-left">
          <div className="navbar-container">
            <div className="navbar-content">
              <img className="navbar-brand" src={navbarBrand} alt="Navbar Brand" />
              <div className="navbar-menu">
                <div className="navbar-link">
                  <div className="about inter-normal-black-14px">{about}</div>
                </div>
                <div className="navbar-link">
                  <div className="features inter-normal-black-14px">{features}</div>
                </div>
                <div className="navbar-link">
                  <div className="pricing inter-normal-black-14px">{pricing}</div>
                </div>
                <div className="navbar-button">
                  <div className="get-started">{getStarted}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Notification />
        <div className="overlap-group1">
          <div className="view">
            <div className="undraw_digital_currency_qpak-1">
              <div className="overlap-group">
                <img className="group-4" src={group4} alt="Group 4" />
                <img
                  className="vector"
                  src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-6@2x.png"
                  alt="Vector"
                />
                <img className="vector-1" src={vector2} alt="Vector" />
                <img className="vector-2" src={vector3} alt="Vector" />
                <img className="vector-3" src={vector4} alt="Vector" />
                <img className="vector-4" src={vector5} alt="Vector" />
                <img className="vector-5" src={vector6} alt="Vector" />
                <img className="vector-6" src={vector7} alt="Vector" />
                <img className="vector-7" src={vector8} alt="Vector" />
                <img className="vector-8" src={vector9} alt="Vector" />
                <img className="vector-9" src={vector10} alt="Vector" />
                <img className="vector-10" src={vector11} alt="Vector" />
                <img className="vector-11" src={vector12} alt="Vector" />
                <img className="vector-12" src={vector13} alt="Vector" />
                <img className="vector-13" src={vector14} alt="Vector" />
                <img className="vector-14" src={vector15} alt="Vector" />
                <img className="vector-15" src={vector16} alt="Vector" />
                <img className="vector-16" src={vector17} alt="Vector" />
                <img className="vector-17" src={vector18} alt="Vector" />
                <img className="vector-18" src={vector19} alt="Vector" />
                <img className="vector-19" src={vector20} alt="Vector" />
                <img className="vector-20" src={vector21} alt="Vector" />
                <img className="vector-21" src={vector22} alt="Vector" />
              </div>
              <img className="vector-22" src={vector23} alt="Vector" />
              <img className="vector-23" src={vector24} alt="Vector" />
            </div>
          </div>
          <img className="x1" src={x1} alt="1" />
          <p className="text-3">{text3}</p>
        </div>
        <Button2>{button2Props.children}</Button2>
      </form>
    </div>
  );
}

export default IPhone141Button;
