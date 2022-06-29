import React from "react";
import { useState, useEffect } from "react";
import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
	Box,
	Flex,
	Text,
} from "@chakra-ui/react";

const PostBody = () => {
	const [tweetList, setTweetList] = useState([]);
	const request = async () => {
		const response = await fetch("http://localhost:8080/api/v1/tweet");
		const tweetList = await response.json();
		setTweetList(tweetList);
	};
	useEffect(() => {
		request();
	}, [tweetList]);
	return (
		<>
			<ul className="list-group">
				{tweetList.map((tweet) => {
					return (
						<li key={tweet.id} className="list-group-item text-light">
							{tweet.body}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default PostBody;
