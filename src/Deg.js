import React, { useCallback, useEffect, useState } from 'react';

import { Box, Center, Button } from "@chakra-ui/react"

const Deg = () => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval
        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [start])

    const deg = useCallback(() => {
        return ((1260 - time) / 7)
    }, [start])

    return (
        <>
            <Center py={10}>
                <Box bg='black' height='500px' width='10px' transform={`rotate(${time / 7}deg)`}></Box>
            </Center>
            <Button onClick={() => setStart(true)}>start</Button>
            <Button onClick={() => setStart(false)}>stop</Button>
            <h1>誤差：{deg()}度</h1>

        </>
    );
}

export default Deg