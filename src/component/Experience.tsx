import { Box, Typography, styled } from "@mui/material";
import { projects } from "../file/project";
import Project from "./Project";
import { icons } from "../file/icon";
import Icon from "./Icon";

const Experience = () => {
  const StackBox = styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));
  return (
    <Box sx={{ maxWidth: "1300px", my: 8, mx: "auto" }}>
      <Box>
        <Typography
          sx={{ textAlign: "center", color: "white", my: 5 }}
          variant="h4"
        >
          About
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
          I can help you with this following
          <span style={{ color: "rgba(0,199,255,255)" }}> skills</span> I've
          learned
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
          <StackBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                borderBottom: "1px solid #7B89A8",
              }}
            >
              {icons.map((i) => {
                return <Icon key={i.id} id={i.id} name={i.name} src={i.src} />;
              })}
            </Box>
          </StackBox>
        </Box>
      </Box>
      <Box id="project">
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
          }}
          variant="h4"
          id="text"
        >
          Projects
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "white", mt: 5 }}
        >
          Let's take a look at what I have {""}
          <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 5,
          }}
        >
          {projects.map((p) => {
            return (
              <Project
                key={p.id}
                title={p.title}
                tags={p.tags}
                description={p.description}
                image={p.image}
                source={p.source}
                liveVersion={p.liveVersion}
                id={p.id}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
