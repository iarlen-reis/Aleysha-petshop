import { PawPrintIcon } from 'lucide-react'
import { CardHome } from '@/components/app/Home/CardHome'
import ManWithDogImage from '/public/images/home/man-dog.png'
import GirlWithCatImage from '/public/images/home/woman-cat-one.png'
import CoupleWithCatAndDogImage from '/public/images/home/couple.png'
import GirlWithCatImageTwo from '/public/images/home/woman-cat-two.png'

export default function Home() {
  return (
    <div className="flex flex-col gap-14 pb-16">
      <CardHome.Root>
        <CardHome.TextContainer>
          <CardHome.Title text="Aleysha Petshop" />
          <CardHome.Paragraph
            aditionalStyles="lg:max-w-[500px]"
            text="Onde amor e cuidado se encontram com patinhas felizes. Bem-vindo 
            ao nosso PetShop! 🐾"
          />
          <CardHome.Button
            text="Criar uma conta"
            link="/login"
            icon={PawPrintIcon}
          />
        </CardHome.TextContainer>
        <CardHome.Image
          src={GirlWithCatImage}
          alt="Uma mulher de camisa branca e cabelos longos escuros segurando um 
          gato grafite com listras pretas."
        >
          <CardHome.ImageBackground adicionalStyles="right-0 w-[65%]" />
        </CardHome.Image>
      </CardHome.Root>

      <CardHome.Root>
        <CardHome.Image
          src={ManWithDogImage}
          alt="Um homem com cabelo curto e colorido segurando um cachorro grafite 
          com manchas marrom."
        >
          <CardHome.ImageBackground adicionalStyles="left-0 w-[57%]" />
        </CardHome.Image>
        <CardHome.TextContainer aditionalStyles="sm:items-center lg:items-end">
          <CardHome.Paragraph
            aditionalStyles="sm:text-center lg:text-right"
            text="Produtos de qualidade e confortáveis para o dia a dia do seu fiel amigo, 
            para momentos de diversão e até mesmo para cuidar da saúde!"
          />
          <CardHome.Button
            text="Conferir seção de caẽs"
            link="/produtos?page=1&category=cachorros"
            icon={PawPrintIcon}
          />
        </CardHome.TextContainer>
      </CardHome.Root>

      <CardHome.Root aditionalStyles="lg:flex-row-reverse">
        <CardHome.Image
          src={GirlWithCatImageTwo}
          alt="Uma mulher de cabelo curto e colorido segurando um gato cinza com 
          manchas rosadas."
        >
          <CardHome.ImageBackground adicionalStyles="right-0 w-[57%]" />
        </CardHome.Image>
        <CardHome.TextContainer aditionalStyles="sm:items-center lg:items-start">
          <CardHome.Paragraph
            aditionalStyles="sm:text-center lg:text-left"
            text="Ofereça a seus adoráveis gatos produtos de qualidade e conforto para cada dia, para horas de diversão e para cuidar do bem-estar de seus peludos!"
          />
          <CardHome.Button
            text="Conferir seção de gatos"
            link="/produtos?page=1&category=gatos"
            icon={PawPrintIcon}
          />
        </CardHome.TextContainer>
      </CardHome.Root>

      <CardHome.Root>
        <CardHome.Image
          src={CoupleWithCatAndDogImage}
          alt="Um casal, o homem de camisa branca com cabelo e barba escuras segurando um gato de cor preta, uma mulher com camisa tom pastel e cabelo grande enrolado de cor castanha com um gato de cor preta no colo e abraçando um cachorro de cor amarela da raça golden."
        >
          <CardHome.ImageBackground adicionalStyles="left-0 w-full" />
        </CardHome.Image>
        <CardHome.TextContainer aditionalStyles="sm:items-center lg:items-end">
          <CardHome.Paragraph
            aditionalStyles="sm:text-center lg:text-right"
            text="Oferecemos produtos de qualidade e conforto para atender às necessidades diárias dos seus fiéis cães e adoráveis gatos."
          />
          <CardHome.Button
            text="Conferir todas seções"
            link="/produtos?page=1"
            icon={PawPrintIcon}
          />
        </CardHome.TextContainer>
      </CardHome.Root>
    </div>
  )
}
