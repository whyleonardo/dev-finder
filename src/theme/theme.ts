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
      bg: mode('white', 'brand.800')(props),
      lineHeight: 'base'
    }
  })
}

const colors = {
  brand: {
    100: '#f6f8ff',
    200: '#fefefe',
    500: '#4b6a9b',
    800: '#2b3442'
  }
}

export const theme = extendTheme({ config, colors, styles })
