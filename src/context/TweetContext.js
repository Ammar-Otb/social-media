import React from "react";
import React, { useState, createContext } from "react";
const TweetContext = createContext();
const TweetProvider = ({ children }) => {
	return <div>TweetContext</div>;
};

export default TweetContext;
