import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Soci = () => {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group" >
      <Button href="https://github.com/yoarajota" target="_blank"><GitHubIcon></GitHubIcon></Button>
      <Button href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-sberse-1b5a4021b/" target="_blank"><LinkedInIcon></LinkedInIcon></Button>
    </ButtonGroup>
  );
}

export default Soci;