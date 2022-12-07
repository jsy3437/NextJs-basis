import Seo from '../../component/Seo';

export default function Detail({ movie }) {
	return (
		<div className="container">
			<Seo title={movie.original_title} />
			<div className="movie">
				<h4>{movie.original_title}</h4>
				<p>{movie.tagline}</p>
				<div className="movie__card">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="movie poster image"
					/>
					<div>
						<ul>
							{movie.genres.map((genres) => (
								<li key={genres.id}>{genres.name}</li>
							))}
						</ul>
						<p>{movie.release_date}</p>
						<p>{movie.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ params: { params } }) {
	const id = Number(params[0]);
	const movie = await (
		await fetch(`http://localhost:3000/api/movies/${id}`)
	).json();

	return {
		props: { movie },
	};
}
