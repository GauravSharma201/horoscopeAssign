import React from "react";

function Footer() {
  return (
    <div className="footer-cont flex header-cont text-center justify-content-evenly min-h-4rem bg-pink-400 text-white">
      <div className="col">
        <h3 className="text-purple-800 text-2xl font-medium">About Us</h3>
        <p className="">
          Hey!, I am Gaurav. I have created this React application as an
          assignment for interview round. A little about my self, I am a B.tech
          graduate and a coding enthusiast. I like to learn new technologies,
          and get my hands on the new features and concepts. If you like my work
          please contact me.
        </p>
      </div>
      <div className="col">
        <ul className="list-none">
          <h3 className="text-purple-800 text-2xl font-medium">Languages</h3>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C/C++</li>
        </ul>
      </div>
      <div className="col">
        <ul className="list-none">
          <h3 className="text-purple-800 text-2xl font-medium">Framework</h3>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Redux</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
