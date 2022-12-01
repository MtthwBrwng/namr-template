import {Center, Container, Input, Loader, Stack, Title} from "@mantine/core";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {useDebouncedValue} from "@mantine/hooks";

interface HelloResp {
    name: string
}

export default function Home() {
    const [search, setSearch] = useState('John Doe');
    const [debouncedSearch] = useDebouncedValue(search, 500);
    const {data, isLoading} = useQuery<HelloResp>(["hello", debouncedSearch], () => (
        fetch(`/api/hello?name=${debouncedSearch}`).then((res) => res.json().then((data) => data))
    ))

    return (
        <Container mx={"auto"} py={50}>
            <Stack>
                <Stack sx={{minHeight: 50}}>
                    {!isLoading ? (
                        <Title align={"center"}>{data?.name}</Title>
                    ) : (
                        <Center>
                            <Loader variant={"dots"}/>
                        </Center>
                    )}
                </Stack>
                <Input value={search} placeholder={"Search name..."} onChange={(e) => setSearch(e.target.value)}></Input>
            </Stack>
        </Container>
    )
}
