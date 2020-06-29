import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import Certificate from '~/components/Certificate';
import MoreCertificates from './MoreCertificates';

interface IProps {
	showMore: boolean;
}

const Certificates = ({ showMore }: IProps) => (
	<div id="certificates">
		<Reveal animation={Animation.FadeInUp}>
			<h1
				className="text-center"
				style={{ marginTop: 100, marginBottom: 94 }}
			>
				<AnimatedTitle animation={Animation.FadeInUp}>
					Certificados
				</AnimatedTitle>
			</h1>
		</Reveal>

		<div className="d-flex justify-content-center align-items-stretch flex-wrap">
			<Certificate
				title="HTTP"
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
				title="JavaScript ES6"
				subTitle="TreinaWeb 01/2019"
				url="https://drive.google.com/file/d/1nbWhwygwMXWRorjpKqb7H7ov28SxCxoA/view?usp=sharing"
			>
				Novidades do EcmaScript 2015 (ES6) do JavaScript.
			</Certificate>

			<Certificate
				title="JavaScript Avançado"
				subTitle="TreinaWeb 10/2018"
				url="https://drive.google.com/file/d/1MdGWb8yFg2saHjUn4Y0pBwTcdGmGiABF/view?usp=sharing"
			>
				Entendendo mais a fundo o JavaScript ES5.
			</Certificate>

			<Certificate
				title="JavaScript Intermediário"
				subTitle="TreinaWeb 09/2018"
				url="https://drive.google.com/file/d/1NZkuNnOxn8YUagqlel1TfuspOEmgib0O/view?usp=sharing"
			>
				Entendendo melhor o JavaScript ES5.
			</Certificate>

			<Certificate
				title="JavaScript Básico"
				subTitle="TreinaWeb 08/2018"
				url="https://drive.google.com/file/d/11nR3Nu1REhJ5_oLVfGo12YBQ_KuopCdr/view?usp=sharing"
			>
				Começando a entender o JavaScript ES5.
			</Certificate>

			<Certificate
				title="HTML5 e CSS3"
				subTitle="TreinaWeb 08/2018"
				url="https://drive.google.com/file/d/1_7aj48Ho_7ZEcgyCicNGc5fvy9RSpScc/view?usp=sharing"
			>
				Curso de HTML5 e CSS3 Básico.
			</Certificate>

			<Certificate
				title="HTML5 e CSS3"
				subTitle="TreinaWeb 08/2018"
				url="https://drive.google.com/file/d/1_SWQS_Yqyv-vWQaH6brIFqNbeO_61HpN/view?usp=sharing"
			>
				Curso de HTML5 e CSS3 Avançado.
			</Certificate>

			{showMore && <MoreCertificates />}
		</div>
	</div>
);

export default Certificates;
