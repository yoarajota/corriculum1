import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import Js from '../../img/js.png';

const Boxjs = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Image m='5px 0 0 0' src={Js} w='90px' />
        <Heading color='color.light' m='5px'>JS</Heading>
        <Text color='color.light' fontSize='21px'> Nível Júnior</Text>
        <QuestionOutlineIcon onClick={onOpen} m='24px 0 0 0' boxSize='30px' color='#D8D4E7' />


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>CSS</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>


)
}

export default Boxjs;