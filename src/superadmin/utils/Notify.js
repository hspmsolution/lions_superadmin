import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_MSG } from "../../constants/actionTypes";

const Notify = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const status = useSelector((state) => state.auth.message?.status);
  const errorStatusCodes = [
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
    415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 426, 428, 429, 431, 451,
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
  ];

  useEffect(() => {
    if (errorStatusCodes.includes(status)) {
      message ? toast.error(message) : toast.error(`Request Failed with status code ${status}`);
    } else if (status === 201 || status === 200) {
      toast.success(message);
    } else if (status === 0) {
      toast.error("Network Error");
    }

    dispatch({ type: CLIENT_MSG, message: { info: null, status: null } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, status]);

  return <ToastContainer />;
};

export default Notify;
