import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
import * as React from "react"
import Auth from "./Components/Auth"
import HistoricalData from "./Components/HistoricalData"


const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container textAlign="center" fontSize="xl" my={4}>
      {/* <ColorModeSwitcher /> */}

      <Auth />
      <HistoricalData />

    </Container>
  </ChakraProvider>
)
