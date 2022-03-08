import { Component } from 'solid-js';

const Test: Component = (props) => {
	const params = new URLSearchParams(window.location.search);
	const value = params.get('a');
	return <p>{value}</p>;
};

export default Test;
