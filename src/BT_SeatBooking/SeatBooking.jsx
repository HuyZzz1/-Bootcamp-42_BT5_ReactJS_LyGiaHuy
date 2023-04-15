import React from "react";
import "./styles.scss";
import SeatItem from "./SeatItem";
import Bill from "./Bill";

function SeatBooking() {
  return (
    <div>
      <div className="row gx-5">
        <div className="col-12">
          <h1 className="text-center">Đặt vé xem phim</h1>
          <div className="showcaseContainer mt-3">
            <ul className="showcase">
              <li>
                <span className="seat" /> <small>Ghế còn trống</small>
              </li>
              <li>
                <span className="seat selected" /> <small>Ghế đang chọn</small>
              </li>
              <li>
                <span className="seat occupied" /> <small>Ghế đã đặt</small>
              </li>
            </ul>
          </div>

          <div className="cinema">
            <div className="screen"></div>
            <SeatItem />
          </div>
        </div>
        <div className="col-12" style={{ marginTop: 10 }}>
          <h3 className="text-center">Danh sách ghế bạn đã chọn</h3>
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
