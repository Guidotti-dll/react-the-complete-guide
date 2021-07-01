import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const { token } = useContext(AuthContext);
  const { replace } = useHistory();
  const newPasswordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      " https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDlNIQSS_DNQHXUtvhkDk9dvb666lwFveo",
      {
        method: "POST",
        body: JSON.stringify({
          password: enteredNewPassword,
          idToken: token,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      alert("Password changed successfully!");
      replace("/");
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
