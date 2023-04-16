import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone141Button from "./components/IPhone141Button";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-1-button)">
          <IPhone141Button {...iPhone141ButtonData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const button2Data = {
    children: "ابدأ",
};

const iPhone141ButtonData = {
    navbarBrand: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c22bc18a727f7c0ccc704/img/navbar-brand.png",
    about: "About",
    features: "Features",
    pricing: "Pricing",
    getStarted: "GET STARTED",
    group4: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c22bc18a727f7c0ccc704/img/group-4@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-7@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-8@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-9@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-10@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-11@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-12@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-13@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-14@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-15@2x.png",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-16@2x.png",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-17@2x.png",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-18@2x.png",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-19@2x.png",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-20@2x.png",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-21@2x.png",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-22@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-23@2x.png",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-24@2x.png",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-25@2x.png",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-26@2x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-27@2x.png",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-28@2x.png",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-29@2x.png",
    x1: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c22bc18a727f7c0ccc704/img/------1@2x.png",
    text3: "صاحبك في رمضان, يلازمك في رحلة التلاوة لترتقي لأعلى درجات الهدى والنور, ويرشدك لأدعية مناسبة لمشاعرك اللحظية.",
    button2Props: button2Data,
};

