import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_MSG } from "../../constants/actionTypes";

const Notify = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const status = useSelector((state) => state.auth.message?.status);

  useEffect(() => {
    (status === 404 || status === 400 || status === 500) &&
      toast.error(message);

    status === 200 && toast.success(message);

    status === 0 && toast.error("Network Error");

    dispatch({ type: CLIENT_MSG, message: { info: null, status: null } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return <ToastContainer />;
};

export default Notify;
