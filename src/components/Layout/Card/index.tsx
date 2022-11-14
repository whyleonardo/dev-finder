import { Flex } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import { NotSelected } from '@components/Cards/NotSelected'
import { Selected } from '@components/Cards/Selected'


export const Card = () => {
  const { pathname } = useLocation()

  return (
    <Flex w='full' px='2rem'>
      <Flex maxW='1120px' bg='brand.500' p='2rem' w='full' rounded='20px' alignItems='center' my='2rem'>
        {pathname === '/'
          ? <NotSelected />

          : <Selected />
        }
      </Flex>
    </Flex>
  )
}
