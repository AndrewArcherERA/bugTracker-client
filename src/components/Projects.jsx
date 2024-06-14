import React, { useEffect } from "react";
import { addProject, getProjects, SELECT_PROJECT } from "../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Input, Typography } from "@mui/material";

function Projects() {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.projects);
    const { data } = useSelector((state) => state.user);

    function handleCurrentProject(e) {
        let id = e.target.id;
        console.log(id);
        dispatch(SELECT_PROJECT({ p_id: id }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value;
        const obj = {
            name: name,
        };
        dispatch(addProject(obj));
    }

    useEffect(() => {
        dispatch(getProjects());
    }, []);
    return (
        <Box
            minWidth={"70vw"}
            minHeight={"50vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={7}
            bgcolor={"secondary.main"}
            border={2}
            borderRadius={5}
            borderColor={"#808080"}
            py={3}
        >
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"100%"}
                borderBottom={2}
                borderColor={"primary.main"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px={2}
                    pb={2}
                    width={"100%"}
                >
                    <Typography variant='h3'>
                        {" "}
                        Welcome, {data.displayName}
                    </Typography>
                    <Box
                        border={1}
                        p={1}
                        borderColor={"primary.main"}
                        borderRadius={3}
                    >
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                gap: "24px",
                            }}
                        >
                            <Input
                                type='text'
                                placeholder='project name'
                                sx={{ color: "white", width: "350px" }}
                            />
                            <Button variant='contained' type='submit'>
                                Create Project
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>

            <Box
                display={"flex"}
                gap={5}
                flexWrap={"wrap"}
                justifyContent={"center"}
            >
                {list.map((project) => {
                    return (
                        <Link key={project.id} to={"/projectDashboard"}>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={3}
                                minWidth={"250px"}
                                border={2}
                                borderColor={"primary.main"}
                                p={3}
                                borderRadius={5}
                            >
                                <Typography
                                    variant='h3'
                                    sx={{ color: "white" }}
                                >
                                    {project.name}
                                </Typography>
                                <Button
                                    variant='contained'
                                    onClick={handleCurrentProject}
                                    id={project.id}
                                >
                                    View Project
                                </Button>
                            </Box>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
}

export default Projects;
