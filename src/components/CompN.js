import * as React from 'react';
import './Comp.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompN = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='compcorpo'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>EXP em Processos Administrativos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Setor de COMPRAS - Conhecimento médio sobre processos de licitações de órgãos governamentais.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Cursos Menor Aprendiz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Módulo ATIVAmente 2021-7 / Módulo Ferramentas Digitais 01 / Módulo Ferramentas Digitais 02 / PTI - Projeto de Transformação Individual / 5º Encontro - 2021 / Módulo Empregabilidade / Empregabilidade 2 - Antecipação CH / Módulo Mentalidade de Crescimento / Tecnologias Digitais 2 / Tecnologias Digitais 1 / Módulo Integração - Aprendiz do Futuro / Semana Pedagógica 2021 - CONEXÃO COM O FUTURO / Metodologias Ativas na Aprendizagem / Fundação Sagres / Núcleo Específico
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: '#0e1d42', color: 'white'}}>
        <AccordionSummary   
          expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '100%' }}>Nivel Avançado Inglês</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'initial', fontFamily: 'Montserrat' }}>
          Nenhum certificado de cursos, apenas experiência adiquirida a partir dos anos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}


export default CompN;

