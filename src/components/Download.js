import React, { useState } from "react";
import SlideButton from "react-slide-button";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "react-toastify/dist/ReactToastify.css";

function Download(props) {
    function notify(x) {
    toast("Download Started!");
    window.open(x, "_blank", "noreferrer");
    setTimeout(() => {
      setReset((counter) => counter + 1);
    }, 1000);
  }

  const [reset, setReset] = useState(0);
  return (
    <><div className="container mb-1">
      <div className="mb-5 pb-5 mt-5">
        <SlideButton
          mainText="Slide to Download"
          overlayText="Download Starting..."
          width="200"
          overlayClassList="myclass"
          classList="mainText"
          caretClassList="mycaret"
          reset={reset}
          caret={<Button endIcon={<SendIcon />}></Button>}
          onSlideDone={()=>{notify(props.x)}}
        />

        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div></div>
      </div>
    </>
  );
}

export default Download;
