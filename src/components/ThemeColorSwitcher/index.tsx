import { useColorMode, Button } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const ThemeColorSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  const isDark = colorMode === 'dark'
  return (
    <Button
      onClick={toggleColorMode}
      bg='none'
      rightIcon={isDark ? <FaSun /> : <FaMoon />}
      textTransform='uppercase'
      letterSpacing='widest'
    >
      {isDark ? 'dark' : 'light'}
    </Button >
  )
}