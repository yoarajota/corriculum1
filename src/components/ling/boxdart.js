import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import Dart from '../../img/dart.png';

const Boxdart = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Image m='5px 0 0 0' src={Dart} w='70%'/>
        <Heading color='color.light' m='5px'>Dart</Heading>
        <Text color='color.light' fontSize='21px'> Básico</Text>
        <QuestionOutlineIcon onClick={onOpen} m='24px 0 0 0' boxSize='30px' color='#D8D4E7' />


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Dart</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Conhecimento básico na biblioteca FLUTTER</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>


)
}

export default Boxdart;