import { Flex, useColorModeValue } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import { NotSelected } from '@components/Cards/NotSelected'
import { Selected } from '@components/Cards/Selected'


export const Card = () => {
  const { pathname } = useLocation()

  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex w='full' px='2rem'>
      <Flex maxW='1120px' bg={bgColor} py='2rem' minH='24rem' px='1rem' w='full' rounded='20px' justifyContent='center' alignItems='center' my='2rem'>
        {pathname === '/'
          ? <NotSelected />

          : <Selected />
        }
      </Flex>
    </Flex>
  )
}
