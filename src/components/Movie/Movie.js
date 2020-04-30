import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movie.css';
import Poster from '../../imgs/posters/myneighbortotoro.jpg';

function Movie({ films, match }) {
	let movie = films.find(({ title }) => title === match.params.title);

	return (
		<Container>
			<div className='movieContainer'>
				<Row>
					<div className='col-md-8'>
						<img className='img-fluid' src={Poster} alt='movie poster' />
					</div>
					{movie ? (
						<Col>
							<div key={movie.id} className='descriptionContainer col-md-4'>
								<h1 className='movieTitle'>{movie.title}</h1>
								<h3 className='releaseDate'>{movie.release_date}</h3>
								<h3 className='director'>{movie.director}</h3>
								<p className='movieDescription'>{movie.description}</p>
								<h6 className='rtScore'>
									Rotten Tomatoes Score: {movie.rt_score}
								</h6>
							</div>
						</Col>
					) : (
						<p>Loading</p>
					)}
				</Row>
			</div>
		</Container>
	);
}

export default Movie;
