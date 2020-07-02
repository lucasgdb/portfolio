import React, { useState } from 'react';
import BackToTop from 'react-back-to-top-button';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Certificates from './Certificates';
import Contact from './Contact';
import MainScreen from './Introduction';
import MyTimeLine from './MyTimeLine';
import ShowMore from './ShowMore';
import Technologies from './Technologies';

export default function Landing() {
	const [showMore, setShowMore] = useState(false);

	return (
		<>
			<Header />

			<MainScreen />

			<Certificates showMore={showMore} />
			<ShowMore showMore={showMore} setShowMore={setShowMore} />

			<MyTimeLine />

			<Technologies />

			{/* <Projects /> */}

			<Contact />

			<Footer />

			<BackToTop showAt={100} speed={1000} easing="easeInOutQuint">
				<svg
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-arrow-up-circle-fill text-danger border-0"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
					/>
				</svg>
			</BackToTop>
		</>
	);
}
