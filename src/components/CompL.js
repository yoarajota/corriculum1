import * as React from 'react';
import './Comp.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompL = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='compcorpo'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Conhecimento Nível Júnior - HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Curso: CURSO HTML - RBTech / Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Conhecimento Nível Júnior - CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Curso: CURSO CSS - RBTech / Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Conhecimento Nível Júnior - JAVASCRIPT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Curso: Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Conhecimento Nível Júnior - REACT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Noção Básica - Flutter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
  
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}


export default CompL;

