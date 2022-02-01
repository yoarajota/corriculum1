import { Heading, Box, Text, Center, Image, Divider, Tooltip, SimpleGrid } from '@chakra-ui/react';

const Pag2 = () => {
    return (
        <Center>
                <SimpleGrid columns={2} minChildWidth='320px' m='4% 0 0 0' w='100%' >
                    <Box align='center'>
                        <Heading m='4px 0 0 0' fontSize='clamp(1.4em, 1.5vw, 1.8em)' color='color.light'>Competências</Heading>
                            <Tooltip aria-label='A tooltip' label="Módulo ATIVAmente 2021-7 / Módulo Ferramentas Digitais 01 / Módulo Ferramentas Digitais 02 / PTI - Projeto de Transformação Individual / 5º Encontro - 2021 / Módulo Empregabilidade / Empregabilidade 2 - Antecipação CH / Módulo Mentalidade de Crescimento / Tecnologias Digitais 2 / Tecnologias Digitais 1 / Módulo Integração - Aprendiz do Futuro / Semana Pedagógica 2021 - CONEXÃO COM O FUTURO / Metodologias Ativas na Aprendizagem / Fundação Sagres / Núcleo Específico"><Text decoration='underline' color='color.light' fontSize='clamp(1em, 1.4vw, 1.4em)'> Cursos Menor Aprendiz </Text></ Tooltip>
                            <Text fontSize='clamp(1em, 1.4vw, 1.4em)' color='color.light'>Nivel Avançado Inglês</Text>
                            <Text fontSize='clamp(1em, 1.4vw, 1.4em)' color='color.light'>Experiência em Processos Administrativos (SPS)</Text>
                            <Text fontSize='clamp(1em, 1.4vw, 1.4em)' color='color.light'>Conhecimento médio sobre processos de licitações de órgãos governamentais.</Text>
                            <Text fontSize='clamp(1em, 1.4vw, 1.4em)' color='color.light'>Cursos de Lógica da Programação</Text>
                            <Text fontSize='clamp(1em, 1.4vw, 1.4em)' color='color.light' m='0 0 4% 0'>Cursos de Linguagens de Programação</Text>
                    </Box>
                    <Box align='center' minWidth='320px' maxW='720px'>
                        <Heading m='4px 0 0 0' color='color.light' fontSize='clamp(1.4em, 1.5vw, 1.8em)'>Experiência Profissional</Heading>
                        <Box>
                            <Box>
                                <Text m='5px 0 0 0' color='color.light' fontSize='clamp(1em, 1.4vw, 1.4em)'>EMBRAPA UVA E VINHO</Text>
                                <Text color='color.light' fontSize='clamp(1em, 1.4vw, 1.4em)'>Setor de Compras (SPS)</Text>
                                <Text m='0 0 5px 0' color='color.light' opacity='0.6' fontSize='clamp(1em, 1.4vw, 1.4em)'>JAN 2020 - DEC 2021</Text>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
        </Center>
    )
}

export default Pag2;