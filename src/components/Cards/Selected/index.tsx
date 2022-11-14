import { Flex, Avatar, Spinner } from '@chakra-ui/react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Selected = () => {
  const { username } = useParams()

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

  useEffect(() => {
    refetch()
  }, [username])
  return (
    <>
      {isLoading
        ? <Spinner w='200px' />


        : <Flex>
          <Avatar src={data?.avatar_url} name={data?.name} />
        </Flex>
      }
    </>
  )
}
