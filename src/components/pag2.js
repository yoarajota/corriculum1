import { Heading, Box, Text, Center, Image, Divider, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';

const Pag2 = () => {
    return (
        <Center display='block' w='100%'>
            <Box w='100%' align='center'>
                <Box w='100%' m='20px 0 0 0' h='1px' opacity='0.5' bg='color.light'></Box>
                <Box w='100%' h='1px' opacity='0.5' bg='color.light'></Box>
            </Box>
            <Box align='center' m='5% 0 0 0' >
                <Box display='flex' w='70%'>
                    <Box borderRadius='12px' m='0 10% 0 0' w='45%' borderTop='4px solid #E1E3EF' borderBottom='4px solid #E1E3EF'>
                        <Box m='2% 0 0 0'>
                            <Heading m='4px 0 0 0' color='color.light'>Competências</Heading>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Tooltip aria-label='A tooltip' label="Módulo ATIVAmente 2021-7 / Módulo Ferramentas Digitais 01 / Módulo Ferramentas Digitais 02 / PTI - Projeto de Transformação Individual / 5º Encontro - 2021 / Módulo Empregabilidade / Empregabilidade 2 - Antecipação CH / Módulo Mentalidade de Crescimento / Tecnologias Digitais 2 / Tecnologias Digitais 1 / Módulo Integração - Aprendiz do Futuro / Semana Pedagógica 2021 - CONEXÃO COM O FUTURO / Metodologias Ativas na Aprendizagem / Fundação Sagres / Núcleo Específico"><Text decoration='underline' color='color.light'> Cursos Menor Aprendiz </Text></ Tooltip>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Text m='5px 0 5px 0' color='color.light'>Nivel Avançado Inglês</Text>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Text m='5px 0 5px 0' color='color.light'>Experiência em Processos Administrativos (SPS)</Text>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Text m='5px 0 5px 0' color='color.light'>Conhecimento médio sobre processos de licitações de órgãos governamentais.</Text>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Text m='5px 0 5px 0' color='color.light'>Cursos de Lógica da Programação</Text>
                        </Box>
                        <Box m='0 0 45px 0'>
                            <Text m='5px 0 5px 0' color='color.light'>Cursos de Linguagens de Programação</Text>
                        </ Box>
                    </Box>
                    <Box borderRadius='12px' w='45%' borderTop='4px solid #E1E3EF' borderBottom='4px solid #E1E3EF'>
                        <Box m='2% 0 0 0'>
                            <Heading m='4px 0 0 0' color='color.light'>Experiência Profissional</Heading>
                        </Box>
                        <Box m='15px 0 15px 0'>
                            <Text m='5px 0 0 0' color='color.light'>EMBRAPA UVA E VINHO</Text>
                            <Text color='color.light'>Setor de Compras (SPS)</Text>
                            <Text m='0 0 5px 0' color='color.light' opacity='0.6'>JAN 2020 - DEC 2021</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Center>
    )
}

export default Pag2;