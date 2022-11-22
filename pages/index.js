import { useEffect, useState } from 'react';
import Seo from '../component/Seo';

const API_KEY = '7384e6d100f7fbc482c7d9945d06b2b3';

export default function Home() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		(async () => {
			const { results } = await (
				await fetch(
					`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
				)
			).json();
			setMovies(results);
		})();
	}, []);
	console.log(movies);
	return (
		<div>
			<Seo title="Home" />
			{!movies && <h4>Loading...</h4>}
			{movies?.map((movie) => (
				<div key={movie.id}>
					<h4>{movie.original_title}</h4>
				</div>
			))}
		</div>
	);
}
