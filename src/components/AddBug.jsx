import { addBug } from "../store/bugs";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Input } from "@mui/material";

function AddBug() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.user);
    const { currentProject } = useSelector((state) => state.projects);
    function handleSubmit(e) {
        e.preventDefault();
        let desc = e.target[0].value;
        const obj = {
            desc: desc,
            uid: data.uid,
            p_id: currentProject,
            displayName: data.displayName,
        };
        dispatch(addBug(obj));
        e.target[0].value = "";
    }
    return (
        <Box border={1} p={1} borderColor={"primary.main"} borderRadius={3}>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    gap: "24px",
                }}
            >
                <Input
                    type='text'
                    placeholder='Bug Description'
                    name='description'
                    sx={{ color: "white", width: "350px" }}
                />
                <Button variant='contained' type='submit'>
                    Add Bug
                </Button>
            </form>
        </Box>
    );
}

export default AddBug;
