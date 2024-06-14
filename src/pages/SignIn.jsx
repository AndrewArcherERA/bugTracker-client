import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../api/firebase-config";
import { signIn } from "../store/user";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.user);

    function handleSignIn() {
        dispatch(signIn(auth));
    }
    useEffect(() => {
        if (data) navigate("/projects");
    }, [data]);

    return (
        <Box
            p={2}
            bgcolor={"secondary.main"}
            borderRadius={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Button variant='contained' onClick={handleSignIn}>
                Sign In with google
            </Button>
        </Box>
    );
}

export default SignIn;
