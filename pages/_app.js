import NavBar from '../component/NavBar';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
		</div>
	);
}
