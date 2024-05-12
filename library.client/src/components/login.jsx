import { GoogleLogin } from '@leecheuk/react-google-login';

const clientId = "112383829383-puhoirnfaatkvtps1k44pc7ec42ojgit.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileobj);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookie Policy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;