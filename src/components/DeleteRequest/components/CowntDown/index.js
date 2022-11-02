import { Button, Form, Input } from "antd";
import { Col, Row, Statistic } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { Maybe } from "../../../Maybe";
import "./style.css";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60; // Moment is also OK
export const CownDown = () => {
  const [resetCownt, setResentCownt] = useState(true);
  const [time, setTime] = useState(deadline);
  const onFinish = () => {
    setResentCownt(false);
  };

  const handleReset = () => {
    setResentCownt(true);
  };
  useEffect(() => {
    const deadline = Date.now() + 1000 * 60; // Moment is also OK
    setTime(deadline);
  }, [resetCownt]);
  return (
    <>
      <Maybe condition={resetCownt}>
        <Button type="button" className="timer-btn">
          <Countdown value={time} onFinish={onFinish} format="mm:ss" />
        </Button>
      </Maybe>
      <Maybe condition={!resetCownt}>
        <Button onClick={handleReset} className="timer-btn">
          تلاش مجدد
        </Button>
      </Maybe>
    </>
  );
};
