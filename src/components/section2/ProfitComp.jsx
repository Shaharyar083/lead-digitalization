import React from "react";
import { ImPower } from "react-icons/im";
import { BiPound } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi";

const ProfitComp = () => {
  return (
    <>
      <div className="inner">
        <div className="card">
          <div className="icons">
            <ImPower size={60} />
          </div>

          <div className="title">
            More Power
            <div className="line"></div>
          </div>

          <div className="subtitle">
            Comprehensive smart factory solutions for your customers as a
            plannable & secure service.
          </div>
        </div>

        <div className="card">
          <div className="icons">
            <BiPound size={60} />
          </div>

          <div className="title">
            Profit
            <div className="line"></div>
          </div>

          <div className="subtitle">
            Through efficient wear parts management for your customers.
          </div>
        </div>

        <div className="card">
          <div className="icons">
            {" "}
            <HiOutlineClock size={60} color="white" />
          </div>

          <div className="title">
            No expenses
            <div className="line"></div>
          </div>

          <div className="subtitle">
            Structured on-time integration, training and follow-up efforts are
            taken care of by us.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfitComp;
