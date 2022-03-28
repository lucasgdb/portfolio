import Certificate from './Certificate';

type MoreCertificatesProps = {
  showMore: boolean;
};

const MoreCertificates = ({ showMore }: MoreCertificatesProps) => {
  if (!showMore) {
    return null;
  }

  return (
    <>
      <Certificate
        title="React Conf - Participação"
        subTitle="React Conf 11/2020"
        url="https://drive.google.com/file/d/1t7qi6oUSvV2huw1QJ2kUzv5eNqRDG8CN/view?usp=sharing"
      >
        Participação no evento da React Conf 2020
      </Certificate>

      <Certificate
        title="JavaScript ES6"
        subTitle="TreinaWeb 01/2019"
        url="https://drive.google.com/file/d/1nbWhwygwMXWRorjpKqb7H7ov28SxCxoA/view?usp=sharing"
      >
        Novidades do EcmaScript 2015 (ES6) do JavaScript.
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
        url="https://drive.google.com/file/d/1_SWQS_Yqyv-vWQaH6brIFqNbeO_61HpN/view?usp=sharing"
      >
        Curso de HTML5 e CSS3 Avançado.
      </Certificate>

      <Certificate
        title="HTML5 e CSS3"
        subTitle="TreinaWeb 08/2018"
        url="https://drive.google.com/file/d/1_7aj48Ho_7ZEcgyCicNGc5fvy9RSpScc/view?usp=sharing"
      >
        Curso de HTML5 e CSS3 Básico.
      </Certificate>

      <Certificate
        title="Começando com Angular"
        subTitle="balta.io 06/2020"
        url="https://certificates.balta.io/NWVlODMyZTU2NjY2NTgxYmRjYjYwNzkzLDVjNmIyY2MyZTcxNzlhMjdlYjYyYmFlMA=="
      >
        Começando com o básico do Angular.
      </Certificate>

      <Certificate
        title="Gestão de Dados"
        subTitle="FATEC 09/2019"
        url="https://certificates.balta.io/NWVlODMyZTU2NjY2NTgxYmRjYjYwNzkzLDVjNmIyY2MyZTcxNzlhMjdlYjYyYmFlMA=="
      >
        Mini Curso de Gestão de Dados feito na Fatec Guaratinguetá - SETI 2019
      </Certificate>

      <Certificate
        title="PHP Básico"
        subTitle="Curso em Vídeo 03/2019"
        url="https://drive.google.com/file/d/1Fbo22zHbdynKY1FlUiuIEs7rXddm_8Qu/view?usp=sharing"
      >
        Curso básico de PHP do Curso em Vídeo (Gustavo Guanabara)
      </Certificate>

      <Certificate
        title="Bootstrap 4 - Básico"
        subTitle="Curso em Vídeo 01/2019"
        url="https://drive.google.com/file/d/1inYX3NMaOSq_CJj6c54-I8ZJ5ypAqz6C/view?usp=sharing"
      >
        Curso básico de Bootstrap 4 do Curso em Vídeo (Gustavo Guanabara)
      </Certificate>

      <Certificate
        title="Algoritmos - Parte 1"
        subTitle="TreinaWeb 10/2018"
        url="https://drive.google.com/file/d/1inYX3NMaOSq_CJj6c54-I8ZJ5ypAqz6C/view?usp=sharing"
      >
        Parte 1 do Curso de Algoritmos da TreinaWeb.
      </Certificate>

      <Certificate
        title="Indústria 4.0"
        subTitle="ISA 10/2018"
        url="https://drive.google.com/file/d/1d-LiznJXUzrkR7D-QqnE0gx-nmnZ5d-e/view?usp=sharing"
      >
        Curso de Indústria 4.0 da Expo ISA Vale Section (International Society of Automatio)
      </Certificate>

      <Certificate
        title="PWA - SETI 2018"
        subTitle="ETEC 10/2018"
        url="https://drive.google.com/file/d/1KORp6jQBUU-_LHgh8f1hyYpRuJvZ7rvU/view?usp=sharing"
      >
        Curso de PWA (Progressive Web Apps) feito na SETI 2018 da ETEC.
      </Certificate>

      <Certificate
        title="Layout de Sistemas"
        subTitle="ETEC 10/2018"
        url="https://drive.google.com/file/d/15iZjeAkV-0MY0wf9VjqBhw-QGSUPGBUV/view?usp=sharing"
      >
        Palestra Layout de Sistemas: Conceito de Design para Programadores feito na SETI 2018 da ETEC.
      </Certificate>

      <Certificate
        title="POO"
        subTitle="Curso em Vídeo 03/2018"
        url="https://drive.google.com/file/d/1nZ9erMyiQ9u1hutbrbJA2ANKQz-hdybX/view?usp=sharing"
      >
        Programação Orientada a Objetos utilizando Java como linguagem.
      </Certificate>

      <Certificate
        title="Algoritmo"
        subTitle="Curso em Vídeo 02/2018"
        url="https://drive.google.com/file/d/18BbaQ4iQy1I7vfBJkk2li7-P1oBjfd-i/view?usp=sharing"
      >
        Curso de Algoritmo do Curso em Vídeo utilizando Java como linguagem.
      </Certificate>

      <Certificate
        title="Java Básico"
        subTitle="Curso em Vídeo 02/2018"
        url="https://drive.google.com/file/d/1nJPjVwJeFNLt0pg6BsgE7Aa1EyZQYmQW/view?usp=sharing"
      >
        Curso de Java Básico do Curso em Vídeo.
      </Certificate>

      <Certificate
        title="Python Básico"
        subTitle="Curso em Vídeo 02/2018"
        url="https://drive.google.com/file/d/14BvP5xmjSVLi814kXf9aEAy69K2-jqWc/view?usp=sharing"
      >
        Curso de Python Básico do Curso em Vídeo.
      </Certificate>
    </>
  );
};

export default MoreCertificates;
