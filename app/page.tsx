import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#daccaf]">
        <Image src="/img/csf.png" alt="I came, I saw, I fell in love" width={839} height={628} />
        <div className="max-w-[839px] p-2">
          <div className=" flex flex-col justify-center bg-[#e595a5] border-[1px] border-black p-4">

            <h1 className="text-2xl text-center font-bold mb-4">Feliz dia dos namorados!</h1>

            <div className="text-center mt-4">
              <p>&quot;Você, meu amor</p>
              <p>é um soneto raro</p>
              <p>sem nenhuma leitura sequer</p>
              <p>você, por si só, minha princesa</p>
              <p>é mais poesia</p>
              <p>do que mulher&quot;</p>
            </div>

            <div className="text-justify mt-6">
              <p>Porque o meu amor por ti é maior que qualquer palavra, decidi me calar, pois em silêncio se guarda o que o coração não consegue dizer.</p>
            </div>

            <p className="text-center mt-6 font-bold">Te amo, Julia</p>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="border-[1px] border-black">
            <Image src="/img/cards.png" alt="Cards" width={839} height={628}/>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="border-[1px] border-black bg-[#e595a5] py-4">
            <p className="text-center">Feito com &hearts; pelo seu amor Mauricio</p>
          </div>
        </div>
        
    </div>
  );
}