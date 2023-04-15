import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../redux/seatSlice";

function Bill() {
  const dispatch = useDispatch();

  const { seatSelected } = useSelector((state) => state.seatReducer);

  return (
    <table className="table text-white" style={{ fontSize: "17px" }}>
      <thead>
        <tr>
          <th>Số ghế</th>
          <th>Giá</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {seatSelected.map((item) => {
          return (
            <tr key={item.soGhe}>
              <td>{item.soGhe}</td>
              <td>{item.gia.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger btn-order"
                  onClick={() =>
                    dispatch(
                      cancelBooking({
                        indexHang: item.indexHang,
                        soGhe: item.soGhe,
                      })
                    )
                  }
                >
                  Hủy
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <strong>Tổng tiền</strong>
          </td>
          <td>
            <strong>
              {seatSelected
                .reduce((total, item) => {
                  return (total += item.gia);
                }, 0)
                .toLocaleString()}
            </strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Bill;
