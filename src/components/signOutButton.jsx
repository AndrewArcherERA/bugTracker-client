import { signOut } from "../store/user";
import { Button } from "@mui/material";

function handleSignOut() {
    dispatch(signOut(auth));
}

function signOutButton() {
    return <Button onClick={handleSignOut}>Sign Out</Button>;
}

export default signOutButton;
