import React, { useState } from "react";
import {
	Button,
	Flex,
	HStack,
	Image,
	Input,
	Link as ChakraLink,
	Text,
	VStack,
	Box,
	Center,
	Textarea,
	ButtonGroup,
	Stack,
	Spacer,
	Heading,
} from "@chakra-ui/react";
const TweetBox = () => {
	const [body, setTweetBody] = useState("");
	const onChange = (e) => {
		setTweetBody(e.target.value);
	};

	const onClick = async () => {
		if (body.trim() === "" || body.length > 240) {
			return;
		}
		const request = await fetch("http://localhost:8080/api/v1/tweet", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ body }),
		});
		const data = await request.json();
		if (data.code === 201) {
			await setTweetBody("");
			console.log(body);
		}
	};

	return (
		<>
			<Box>
				<Textarea
					value={body}
					onChange={onChange}
					mt={15}
					bg="#04031a"
					w="50vw"
					h="15vh"
					placeholder="What's Happening?"
					resize="none"
					color="white"
				/>
				<Flex minWidth="max-content" alignItems="center" gap="2">
					<Spacer />
					<Button
						onClick={onClick}
						mr={4}
						w="80px"
						color="white"
						bg="#1D9BF0"
						borderRadius="3rem"
						p={5}>
						Tweet
					</Button>
				</Flex>
			</Box>
		</>
	);
};

export default TweetBox;
