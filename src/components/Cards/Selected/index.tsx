import {
  Flex, Avatar, Spinner, Heading, Stack, Text, VStack, HStack, Icon, Link as ChakraLink, useColorModeValue
} from '@chakra-ui/react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FaMapMarkerAlt, FaLink, FaTwitter, FaRegBuilding } from 'react-icons/fa'

export const Selected = () => {
  const { username } = useParams()

  const bgColor = useColorModeValue('gray.300', 'gray.700')

  async function getUser() {
    const { data } = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    return data
  }

  const { data, isLoading, refetch } = useQuery({ queryKey: ['user'], queryFn: () => getUser() })

  const formatedData = new Date(data?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  console.log(data)
  useEffect(() => {
    refetch()
  }, [username])
  return (
    <>
      {isLoading
        ? <Spinner alignSelf='center' />

        : (
          <VStack gap='2rem'>
            <Flex gap='1rem'>
              <Avatar size='lg' src={data?.avatar_url} name={data?.name} />
              <Stack>
                <Heading fontFamily='Space Mono' fontSize='md' >{data?.name}</Heading>
                <Text fontSize='sm' color='blue.500'>@{data?.login}</Text>
                <Text fontSize='sm'>Joined {formatedData}</Text>
              </Stack>
            </Flex>

            <Text alignSelf='start'>{data?.bio}</Text>

            <Flex bg={bgColor} gap='1rem' rounded='10px' p='1rem' >
              <VStack>
                <Text>Repos</Text>
                <Text fontWeight='bold'>{data?.public_repos}</Text>
              </VStack>

              <VStack>
                <Text>Followers</Text>
                <Text fontWeight='bold'>{data?.followers}</Text>
              </VStack>

              <VStack>
                <Text>Following</Text>
                <Text fontWeight='bold'>{data?.following}</Text>
              </VStack>
            </Flex>

            <VStack alignItems='start' alignSelf='start'>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>{data?.location}</Text>
              </HStack>

              <HStack>
                <Icon as={FaLink} />
                <ChakraLink
                  href={data?.html_url}
                  textDecoration='underline'
                  isExternal
                >
                  Github Link
                </ChakraLink>
              </HStack>

              <HStack>
                <Icon as={FaTwitter} />
                <ChakraLink
                  href={`https://twitter.com/${data?.twitter_username}`}
                  textDecoration='underline'
                  isExternal
                >
                  {data?.twitter_username}
                </ChakraLink>
              </HStack>

              <HStack>
                <Icon as={FaRegBuilding} />
                <Text>{data?.location}</Text>
              </HStack>
            </VStack>

          </VStack>
        )
      }
    </>
  )
}
