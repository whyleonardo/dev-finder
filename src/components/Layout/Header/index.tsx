import { Flex, Heading, Stack } from "@chakra-ui/react"
import { ThemeColorSwitcher } from "@components/ThemeColorSwitcher"

export const Header = () => {
  return (
    <Flex as='header' my='2rem' w='full' px='2rem'>
      <Flex maxW='1120px' w='full' alignItems='center' justifyContent='space-between'>
        <Heading fontFamily='Space Mono'>devfinder</Heading>
        <ThemeColorSwitcher />
      </Flex>
    </Flex>
  )
}
