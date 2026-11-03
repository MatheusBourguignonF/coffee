"use client";

import { useLayoutEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    SplitText.create(".title", {
      type: "words, chars",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });

    SplitText.create(".paragraph", {
      type: "lines, words, chars",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: {
            amount: 0.5,
            from: "start",
          },
        });
      },
    });


  gsap.utils.toArray<HTMLElement>(".secondParagraph").forEach((element) => {
  SplitText.create(element, {
    type: "lines",
    mask: "lines",
    autoSplit: true,

    onSplit(self) {
      return gsap.from(self.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.1,

        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      });
    },
  });
});

    return () => {
      gsap.killTweensOf(".title");
      gsap.killTweensOf(".paragraph");
    };
  }, []);
  return (
    <div>
      <Header></Header>

      <main className="flex flex-col items-center">
        <section id="information" className="flex flex-col gap-10 items-center w-full">
          <div className="bg-[url('/images/parallax-imagem1.png')] min-h-87.5 bg-cover bg-center bg-scroll sm:min-h-112.5 lg:min-h-150 sm:bg-fixed flex justify-center w-full items-center">
            <h1 className="title text-white font-merriweather text-3xl sm:text-4xl lg:text-5xl text-center">
              MANHATTAN - COFFEE HOUSE
            </h1>
          </div>

          <div className="text-center flex flex-col gap-4 w-3/5">
            <h2 className="paragraph text-secondary font-bold text-xl font-oswald">
              EXPERIMENTE O MELHOR CAFÉ DA CIDADE!
            </h2>

            <p className="paragraph font-lato">
              O café não é uma simples bebida que foi preparada por alguém. O
              café é momento e nós mostraremos isso. Frases como “Que tal
              tomarmos um café?” ou até então “Vamos fazer um café?” são
              demonstrações de que um dos momentos que mais reforçam os laços
              para com o próximo está finalmente por acontecer. Fraco ou forte?
              Com ou sem açúcar? Você deseja açúcar ou adoçante? Estas são
              frases que ouvimos em vários lugares. Em quase todos os locais
              onde há pessoas há também café. Parecemos intrínsecos ao café.
              Aqui na Manhattan serviremos para você com muito carinho o nosso
              querido e amado Amaro’s Coffe diretamente do nosso cafezal em
              Minas Gerais. Para todos nós, café é coisa séria e merece todo o
              cuidado.
            </p>
          </div>
          <div className="bg-[url('/images/parallax-imagem2.jpg')] bg-cover bg-center bg-fixed w-full min-h-80 flex justify-center items-center">
            <h3 className="text-white rounded-sm font-merriweather bg-primary px-4 py-2  text-base sm:text-xl">
              Um bom café é motivo de alegria!
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center w-3/5 gap-4">
            <h2 className="secondParagraph text-secondary text-xl font-bold font-oswald">
              O QUE É O CAFÉ MANHATTAN?
            </h2>
            <p className="secondParagraph font-lato">
              Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty
              Coffee Association), usada no mundo todo, um café especial é todo
              aquele que atinge, no mínimo, 80 pontos na escala de pontuação da
              metodologia (que vai até 100). O Café Manhattan destaca-se nos
              atributos fragrância, corpo, harmonia, doçura e sabor, nesse caso,
              possuindo sabores e aromas que podem ser frutados, herbais, doces
              como caramelo e chocolate. Podemos fazer uma analogia com o vinho,
              pois o café Manhattan também pode ser apreciado por suas
              características sensoriais e não apenas pela cafeína. Através do
              excelente padrão de cultivo, cuidado pós-colheita e da torra, você
              poderá experimentar diferentes e deliciosos tipos de café.
            </p>
          </div>
          <div className="bg-[url('/images/parallax-imagem3.jpg')] w-full min-h-80 bg-cover bg-center bg-fixed flex justify-center items-center">
            <h3 className="text-white text-base sm:text-xl bg-primary rounded-sm font-merriweather px-4 py-2">
              A vida só começa depois do café!
            </h3>
          </div>
          <div className="flex flex-col text-center items-center w-3/5 justify-center gap-4 mb-10">
            <h2 className="secondParagraph text-secondary font-oswald font-bold text-xl">
              CONHEÇA O CAFÉ GOURMET MANHATTAN
            </h2>
            <p className="secondParagraph font-lato">
              As características desse tipo do café gourmet da Manhattan são
              muito marcantes. O seu corpo vai depender da variedade do blend:
              quanto mais “pesado” ele for na boca, maior o corpo. Quanto menor
              a sua pesagem, menor o corpo. O nosso café gourmet é o mais bem
              avaliado no processo de produção, para que ele não venha com
              nenhum tipo de defeito. O aroma é bem perceptível e o consumidor
              consegue sentir nitidamente, sendo que ele pode variar entre 4
              aromas: florado, cítrico, achocolatado, frutado. Essas variações
              são consequências dos grãos do tipo Arábica. Tudo isso vai
              depender da torra, quanto mais clara ela for, maior será a acidez.
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="bg-[url('/images/parallax-imagem4.png')]  min-h-200 justify-evenly bg-fixed bg-cover bg-center w-full flex flex-col items-center "
        >
          <h2 className="text-white bg-primary px-4 py-2 rounded-sm w-fit font-merriweather text-xl">
            Contatos & Endereço
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.8643000046077!2d-42.57349682373519!3d-19.504473225201068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa555231e7e7b21%3A0xb3f749c9eb3d2c60!2sDelis%20Cafeteria!5e0!3m2!1spt-BR!2sbr!4v1792597428683!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-75 h-100 sm:w-180 lg:w-240 xl:w-300"
          ></iframe>
          <div className="bg-primary text-white text-center p-6 rounded-md m-2 font-oswald text-shadow-lg">
            <p>Telefone & Whatsapp: (21) 99999-5555</p>
            <p>E-mail: contato@manhattan.com.br</p>
            <p>
              Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
            </p>
          </div>
        </section>
        <section
          id="hourly"
          className="bg-[url('/images/cafeteria.jpg')] w-full bg-cover bg-center bg-fixed flex justify-evenly items-center min-h-150 flex-col"
        >
          <h2 className="text-white text-base sm:text-xl font-oswald">
            HORÁRIOS DE FUNCIONAMENTO
          </h2>
          <ul className="flex flex-col gap-3 font-bold text-white w-72 font-lato text-sm">
            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-10">
              <h3>SEGUNDA</h3>
              <div className="h-px w-full bg-amber-100 " />
              <p className="text-secondary">FECHADO</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>TERÇA</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>09:00 - 22:00</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>QUARTA</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>09:00 - 22:00</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>QUINTA</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>09:00 - 22:00</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>SEXTA</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>09:00 - 22:00</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>SÁBADO</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>09:00 - 22:00</p>
            </li>

            <li className="grid grid-cols-[100px_1fr_auto] items-center gap-x-8">
              <h3>DOMINGO</h3>
              <div className="h-px w-full bg-amber-100" />
              <p>12:00 - 22:00</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
