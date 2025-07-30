import React,{useEffect,useState} from 'react'
import Service from '../../utils/http'
import { Avatar, Container, Stack } from '@mantine/core';

const service=new Service();
export default function Profile() {
    const [profiledata,setProfileData]=useState(null);
    async function getProfileData(){
        let data=await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect(()=>{
        getProfileData();
    },[])

  return (
    <Container size={"sm"}>
        <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg"
    >
        <Avatar variant="filled" radius="xl" size="lg" color="teal" src={profiledata?.data}></Avatar>
        <Text id="gg"><b>Name : </b>{profiledata?.name}</Text>

    </Stack>





    </Container>
  )
}
