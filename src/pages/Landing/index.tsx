import React, { useState } from 'react';
import BackToTop from 'react-back-to-top-button';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { ArrowUp } from '~/components/Image';
import Certificates from './Certificates';
import MainScreen from './MainScreen';
import MyHistory from './MyHistory';
import ShowMore from './ShowMore';

export default function Landing() {
	const [showMore, setShowMore] = useState(false);

	return (
		<>
			<Header />

			<MainScreen />

			<Certificates showMore={showMore} />

			<ShowMore showMore={showMore} setShowMore={setShowMore} />

			<div className="container" style={{ marginTop: 100 }}>
				<hr />
			</div>

			<MyHistory />

			<Footer />

			<BackToTop showAt={100} speed={1000} easing="easeInOutQuint">
				<ArrowUp />
			</BackToTop>
		</>
	);
}
