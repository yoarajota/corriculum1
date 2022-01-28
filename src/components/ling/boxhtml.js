import { Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import Html from '../../img/html.png';

const Boxhtml = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Image m='5px 0 0 0' src={Html} w='90px' />
            <Heading color='color.light' m='5px'>HTML</Heading>
            <Text color='color.light' fontSize='21px'> Nível Júnior</Text>
            <QuestionOutlineIcon onClick={onOpen} m='24px 0 0 0' boxSize='30px' color='#D8D4E7' />


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>HTML</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>CURSO HTML - RBTech </Text>
                        <Box h='1px' w='100%' bg='black'></Box>
                        <Text>Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default Boxhtml;