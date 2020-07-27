import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import Certificate from '~/components/Certificate';
import MoreCertificates from './MoreCertificates';
import ShowMore from './ShowMore';

interface IProps {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Certificates = ({ showMore, setShowMore }: IProps) => (
	<div id="certificates">
		<Reveal animation={Animation.FadeInUp}>
			<h1
				className="text-center text-dark underline"
				style={{ marginTop: 100, marginBottom: 94 }}
			>
				<AnimatedTitle animation={Animation.FadeIn}>
					Certificados
				</AnimatedTitle>
			</h1>
		</Reveal>

		<div className="d-flex justify-content-center flex-wrap">
			<Certificate
				title="HTTP - Fundamentos"
				subTitle="Alura 09/2019"
				url="https://cursos.alura.com.br/certificate/1cf36134-cecd-4386-8f48-b3c7eb725bd6"
			>
				HTTP - Entendendo a Web por baixo dos panos.
			</Certificate>

			<Certificate
				title="Docker - Fundamentos"
				subTitle="TreinaWeb 08/2019"
				url="https://drive.google.com/file/d/1eXYWOLmlC1SaO8HScpmMCAI4PaNhUeEC/view?usp=sharing"
			>
				Curso dos fundamentos do Docker feito na TreinaWeb.
			</Certificate>

			<Certificate
				title="JavaScript Avançado"
				subTitle="TreinaWeb 10/2018"
				url="https://drive.google.com/file/d/1MdGWb8yFg2saHjUn4Y0pBwTcdGmGiABF/view?usp=sharing"
			>
				Entendendo mais a fundo o JavaScript ES5.
			</Certificate>

			{showMore && <MoreCertificates />}
		</div>

		<ShowMore showMore={showMore} setShowMore={setShowMore} />
	</div>
);

export default Certificates;
