import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../../lib/firebase";
import { useStateValue } from "../../../store/StateProvider";
import { actionTypes } from "../../../store/reducer";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Whatsapp'a Giriş Yap</h1>
        </div>
        <Button onClick={signIn}>Google İle Giriş Yap</Button>
      </div>
    </div>
  );
}
export default Login;
