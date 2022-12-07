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
			<style jsx>
				{`
					.movie h4 {
						font-size: 30px;
						text-align: center;
						margin-bottom: 0;
					}
					.movie p {
						font-size: 19px;
						text-align: center;
						color: rgb(41, 41, 41);
					}
					.movie__card {
						width: 100%;
						display: grid;
						grid-template-columns: 1fr 1fr;
						margin: auto;
						gap: 20px;
					}
					.movie__card img {
						width: 100%;
						margin: 0 0 0 auto;
						padding-left: 5px;
					}
					ul {
						display: flex;
						margin: 0;
					}
					li {
						font-size: 14px;
						margin-right: 7px;
					}
					.movie__card p {
						font-size: 17px;
						text-align: start;
					}
					@media screen and (max-width: 500px) {
						.movie__card {
							grid-template-columns: 1fr;
							padding: 10px;
						}
						.movie__card img {
							padding-left: 0;
						}
					}
				`}
			</style>
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
