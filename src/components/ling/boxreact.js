import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import React from '../../img/react.png';

const Boxreact = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Image m='5px 0 0 0' src={React} w='60%' />
            <Heading color='color.light' m='5px' fontSize='clamp(1em, 2vw, 3em)'>REACT</Heading>
            <Text color='color.light' fontSize='clamp(0.8em, 2vw, 2em)'> Nível Júnior</Text>
            <QuestionOutlineIcon onClick={onOpen} m='10% 0 0 0' boxSize='20%' color='#D8D4E7' />


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>React</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Curso de React - CFBCursos
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>


    )
}

export default Boxreact;