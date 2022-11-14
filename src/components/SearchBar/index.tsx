import { Flex, FormControl, Icon, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete"

import { useEffect, useState } from "react"
import axios from 'axios'

interface UsersProps {
  login: string
}

export const SearchBar = () => {
  const [searchedUsers, setSearchedUsers] = useState<UsersProps[]>([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  async function getUsers() {
    const { data } = await axios.get(`https://api.github.com/search/users?q=${searchText}&per_page=5`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    setSearchedUsers(data.items)
    return data.items
  }

  useEffect(() => {
    if (searchText.length > 3) {
      getUsers()
    }
  }, [searchText])

  return (
    <Flex w="full" px='2rem'>
      <Flex maxW='1120px' bg='brand.500' p='1rem' w='full' rounded='20px' alignItems='center' gap='4'>
        <Icon as={FaSearch} w='1.25rem' h='1.25rem' />
        <FormControl>
          <AutoComplete openOnFocus>
            <AutoCompleteInput
              placeholder='Search Github username...'
              _placeholder={{ color: 'white', fontSize: '15px' }}
              w='100%'
              h='3rem'
              bg='none'
              variant="filled"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <AutoCompleteList
              zIndex='1000'
            >
              {searchedUsers && searchedUsers.map((user, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={user}
                >
                  <ChakraLink as={Link} to={`/${user?.login}`} bg='none' textAlign='start' justifyContent='center'>
                    {user?.login}
                  </ChakraLink>
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
        </FormControl>
      </Flex >
    </Flex >
  )
}