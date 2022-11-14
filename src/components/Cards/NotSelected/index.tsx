import { VStack, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa'

export const NotSelected = () => {

  const iconColor = useColorModeValue('gray.500', 'gray.400')
  return (
    <VStack gap='2' color={iconColor}>
      <Icon as={FaGithub} w='5rem' h='5rem' />
      <Text fontWeight='bold'>Search for an user</Text>
    </VStack>
  )
}
