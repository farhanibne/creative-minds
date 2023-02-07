import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <center>
    <hr/>
    <div className=" mt-48 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Sign In</h2>
      <div className="py-4">

        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 w-50% font-medium rounded-lg flex align-middle p-4 gap-2"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
      <div>
        <p className="text-xsm " style={{color:"#ccc"}}>
            Anyone can join without any document or payment. <br/> Just click on the button above and you are good to go.
        </p>
      </div>
    </div>
    </center>
  );
}