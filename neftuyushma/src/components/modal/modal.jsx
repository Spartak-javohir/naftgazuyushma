import "./modal.css";
import { useState } from "react";
import Login from "../login/login";

const stopProp = (e) => {
  e.stopPropagation();
};

const LoginOverlay = ({ removeOverlay }) => {
  return (
    <div className="overlay_background" onClick={(e) => removeOverlay()}>
      <div className="overlay_card" onClick={(e) => stopProp(e)}>
        <div
          className="modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            removeOverlay();
          }}
        >
          <div className="form_submit">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

const NoAuthWebsite = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="flex_column">
      <div className={overlay ? "overlay_shown" : "overlay_hidden"}>
        <LoginOverlay removeOverlay={() => setOverlay(false)} />
      </div>

      <div className="login_button" onClick={() => setOverlay(true)}>
        Sing in
      </div>
    </div>
  );
};

export default NoAuthWebsite;
