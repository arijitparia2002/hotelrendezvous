import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner bg-dark text-white text-center p-5">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content">
        <h1 className="font-weight-bold display-4">
          Welcome to <span className="">Hotel Rendezvous</span>
        </h1>
        <h4 className="mt-4">Experience the Best Hospitality in Town</h4>
      </div>
    </header>
  );
};

export default MainHeader;