import { GoogleLogout } from '@leecheuk/react-google-login';
const clientId = "112383829383-puhoirnfaatkvtps1k44pc7ec42ojgit.apps.googleusercontent.com";
function Logout() {

    const onSuccess = () => {
        console.log("Log out successfull!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;

