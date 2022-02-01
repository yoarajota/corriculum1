import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import CSS from '../../img/css.png';

const Boxcss = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Image m='5px 0 0 0' src={CSS} w='60%' />
        <Heading color='color.light' m='5px' fontSize='clamp(1em, 2vw, 3em)'>CSS</Heading>
        <Text color='color.light' fontSize='clamp(0.8em, 2vw, 2em)'> Nível Júnior</Text>
        <QuestionOutlineIcon onClick={onOpen} m='10% 0 0 0' boxSize='20%' color='#D8D4E7' />

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>CSS</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>CURSO CSS - RBTech </Text>
                    <Box h='1px' w='100%' bg='black'></Box>
                    <Text>Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>


)
}

export default Boxcss;