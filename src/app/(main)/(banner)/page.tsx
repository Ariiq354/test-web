import Image from 'next/image';
import Card from './components/Card';
import BannerCard from './components/BannerCard';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-[url(/bannerbg.png)] bg-cover bg-center flex-col text-white p-4">
      <div className="flex w-full sm:w-auto sm:gap-[365px] py-3">
        <Image src="/logo.svg" width={114} height={21} alt="logo" />
        <div className="gap-16 sm:flex hidden">
          <div>채용</div>
          <p>해외 개발자 활용 서비스</p>
        </div>
        <div className="bg-white py-[6px] px-6 rounded-lg text-[#4A77FF] items-center sm:flex hidden">문의하기</div>
      </div>
      <div className=" grid sm:grid-cols-2 grid-cols-1 sm:mb-[108px] mb-[44px] sm:mt-[61px] mt-[36px] text-white">
        <div className="w-fit">
          <Image
            src="/chatbubble.png"
            width={150}
            height={48}
            alt="chatbubble"
            className="mb-4 mt-[39px] animate-fadeInDelay opacity- sm:block hidden"
          />
          <Image
            src="/chatbubblemobile.png"
            width={150}
            height={48}
            alt="chatbubble"
            className="mb-4 animate-fadeInDelay opacity-0 sm:hidden block"
          />
          <h1 className="sm:text-5xl text-4xl sm:leading-[62.4px] leading-[46.8px] mb-4 animate-fadeInUp">
            최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
          </h1>
          <h2 className="sm:text-2xl text-lg mb-6 animate-fadeInUp sm:opacity-100 opacity-80">
            법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로 채용해보세요.
          </h2>
          <h3 className="underline text-lg mb-[60px] animate-fadeInUp sm:block hidden">개발자가 필요하신가요?</h3>
          <div className="sm:flex hidden gap-12 animate-fadeInUp">
            <div className="flex flex-col gap-2">
              <hr className="w-32" />
              <p className="text-lg">평균 월 120만원</p>
              <p className="max-w-40 opacity-80">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="w-32" />
              <p className="text-lg">최대 3회 인력교체</p>
              <p className="max-w-40 opacity-80">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="w-32" />
              <p className="text-lg">평균 3일, 최대 10일</p>
              <p className="max-w-40 opacity-80">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
            </div>
          </div>
        </div>
        <div className="flex-col gap-6 items-center w-fit animate-fadeIn sm:flex hidden">
          <Image src={'/chatbubble2.png'} width={153} height={51} alt="chatbubble2" />
          <div className="flex items-center">
            <Image src={'/caret-right.svg'} width={32} height={32} alt="caret rigth" />
            <div className="flex relative">
              <BannerCard className="scale-90 origin-right opacity-95" />
              <BannerCard className="scale-90 origin-left" />
              <BannerCard className="absolute z-10 left-[50%] translate-x-[-50%]" />
            </div>
            <Image src={'/caret-right.svg'} width={32} height={32} alt="caret left" className="rotate-180" />
          </div>
        </div>
        <div className="animate-fadeIn sm:hidden block">
          <Image src={'/cardsmobile.png'} width={710} height={834} alt="cards mobile" />
        </div>
        <div className="col-span-2 mt-[60px] max-w-[1016px] overflow-hidden animate-fadeIn sm:block hidden">
          <div className="flex gap-[10px] flex-shrink-0 w-fit animate-stepScroll ">
            <Card icon="/icon-marketing.svg" title="해외 마케팅" />
            <Card icon="/icon-image.svg" title="퍼블리셔" />
            <Card icon="/icon-box.svg" title="캐드원(제도사)" />
            <Card icon="/icon-target.svg" title="해외 세일즈" />
            <Card icon="/icon-call.svg" title="해외 CS" />
            <Card icon="/icon-presentation.svg" title="해외 마케팅" />
            <Card icon="/icon-image.svg" title="퍼블리셔" />
            <Card icon="/icon-box.svg" title="캐드원(제도사)" />
          </div>
        </div>
        <div className="sm:hidden grid grid-cols-2 w-fit gap-2">
          <div className="flex gap-3">
            <Image src={'/checkbox.svg'} width={20} height={20} alt="checkbox" />
            한국어 능력
          </div>
          <div className="flex gap-3">
            <Image src={'/checkbox.svg'} width={20} height={20} alt="checkbox" />
            한국어 능력
          </div>
          <div className="flex gap-3">
            <Image src={'/checkbox.svg'} width={20} height={20} alt="checkbox" />
            한국어 능력
          </div>
          <div className="flex gap-3">
            <Image src={'/checkbox.svg'} width={20} height={20} alt="checkbox" />
            한국어 능력
          </div>
        </div>
        <div className="sm:hidden block text-[#FBFF23] mt-4 underline">개발자가 필요하신가요?</div>
      </div>
    </div>
  );
}
