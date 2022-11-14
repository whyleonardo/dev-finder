import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: 'Space Mono',
      bg: mode('white', 'gray.800')(props),
      color: mode('gray.800', 'white')(props),
      lineHeight: 'base'
    }
  })
}

export const theme = extendTheme({ config, styles })
