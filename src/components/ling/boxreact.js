import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import React from '../../img/react.png';

const Boxreact = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Image m='5px 0 0 0' src={React} w='70%' />
            <Heading color='color.light' m='5px'>React</Heading>
            <Text color='color.light' fontSize='21px'> Nível Júnior</Text>
            <QuestionOutlineIcon onClick={onOpen} m='24px 0 0 0' boxSize='30px' color='#D8D4E7' />


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