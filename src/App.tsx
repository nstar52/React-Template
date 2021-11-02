import React from 'react';
import styled from 'styled-components'

const Intro = styled.h1`
	font-size: 1.5em;
	color: green;
`;

interface AppProps {
	name: string
	age: number
}

const App: React.FC<AppProps> = ({name, age}) => {
  return (
      <Intro>Hello World, from {name}! I'm {age} years old!</Intro>
  );
};

export default App;
