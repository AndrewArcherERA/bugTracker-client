import { Box, Typography } from "@mui/material";
import BugList from "../components/BugList";
import { useSelector } from "react-redux";
import AddBug from "../components/AddBug";

function ProjectDashboard() {
    const { currentProject, list } = useSelector((state) => state.projects);

    const projectName = list.filter((proj) => proj.id === currentProject);

    return (
        <Box
            width={"70vw"}
            minHeight={"50vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            bgcolor={"secondary.main"}
            py={3}
            border={2}
            borderColor={"#808080"}
            borderRadius={5}
        >
            <Box width={"100%"} borderBottom={2} borderColor={"primary.main"}>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px={2}
                    pb={2}
                >
                    <Typography variant='h3' color={"primary.main"}>
                        {projectName[0].name} Bug's
                    </Typography>
                    <AddBug />
                </Box>
            </Box>
            <BugList />
        </Box>
    );
}

export default ProjectDashboard;
