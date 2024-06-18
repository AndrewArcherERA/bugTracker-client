import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs, addBug, removeBug, resolveBug } from "../store/bugs";
import { Box, Button, Grid, Input, Typography } from "@mui/material";

function BugList() {
    const { bugs, loading, uid } = useSelector((state) => state.bugs);
    const { currentProject } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    function handleDelete(e) {
        const id = e.target.value;
        dispatch(removeBug(id));
    }

    function handleResolve(e) {
        const obj = { id: e.target.id, resolved: e.target.value };
        dispatch(resolveBug(obj));
    }

    useEffect(() => {
        dispatch(getBugs(currentProject));
    }, []);
    return (
        <>
            <Box display={"flex"} flexDirection={"column"} minWidth={"100%"} maxHeight={"300px"} sx={{overflowY: "scroll"}}>
                <Box
                    width={"100%"}
                    py={1}
                    bgcolor={"primary.main"}
                    color={"black"}
                >
                    <Grid container >
                        <Grid item xs={2} justifyContent={"flex-start"}>
                            <Typography>Created By</Typography>
                        </Grid>
                        <Grid item xs={4} justifyContent={"flex-start"}>
                            <Typography>Description</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Status</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>Actions</Typography>
                        </Grid>
                    </Grid>
                </Box>

                {!loading ? (
                    bugs.map((bug) => {
                        return (
                            <Box
                                key={bug.id}
                                width={"100%"}
                                borderBottom={2}
                                borderColor={"#808080"}
                            >
                                <Grid container alignItems={"center"}>
                                    <Grid
                                        item
                                        xs={2}
                                        justifyContent={"flex-start"}
                                    >
                                        <Typography minHeight={"100%"}>
                                            {bug.createdBy.displayName}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        borderLeft={1}
                                        borderColor={"#808080"}
                                    >
                                        <Typography>
                                            {bug.description}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        borderLeft={1}
                                        borderColor={"#808080"}
                                    >
                                        <Typography>
                                            {bug.resolved ? "Resolved" : "Open"}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        borderLeft={1}
                                        borderColor={"#808080"}
                                    >
                                        <Box>
                                            <Button
                                                onClick={handleResolve}
                                                value={bug.resolved}
                                                id={bug.id}
                                            >
                                                {!bug.resolved
                                                    ? "Resolve"
                                                    : "Reopen"}
                                            </Button>
                                            <Button
                                                onClick={handleDelete}
                                                value={bug.id}
                                            >
                                                X
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={2}
                                ></Box>
                            </Box>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </Box>
        </>
    );
}

export default BugList;
