import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { booking } from "../redux/seatSlice";

function SeatItem() {
  const dispatch = useDispatch();
  const { seatList } = useSelector((state) => state.seatReducer);

  return (
    <div className="seatRow">
      {seatList?.map((item) => {
        return (
          <div className="row" key={item.hang}>
            <span className="hangGhe">{item.hang}</span>
            {item.danhSachGhe.map((seat) => {
              return (
                <button
                  disabled={seat.daDat}
                  key={`${item.hang}-${seat.soGhe}`}
                  className={
                    seat.daDat
                      ? "seat occupied"
                      : seat.selected
                      ? "seat selected"
                      : "seat"
                  }
                  onClick={() =>
                    dispatch(booking({ hang: item.hang, soGhe: seat.soGhe }))
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SeatItem;
