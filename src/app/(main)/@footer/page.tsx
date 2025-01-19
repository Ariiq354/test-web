import Image from 'next/image';
import Card from './components/Card';

export default function Footer() {
  return (
    <>
      <div className="bg-[#FBFBFB] flex justify-center px-4">
        <div className="sm:py-20 py-16 grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-[6.125rem] gap-y-4 items-center justify-center text-[#343741] ">
          <div className="flex flex-col">
            <Image src="/logoFooter.svg" width={187} height={34} alt="footer logo" className="mb-4" />
            <p className="text-sm mb-[1.125rem]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매 <br />
              칭해드립니다.
            </p>
            <p className="mb-2 text-[#5E626F] text-ms ">010-0000-0000</p>
            <p className="text-[#5E626F] text-ms ">aaaaa@naver.com</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card title="해외 개발자 원격 채용" icon="/CardIcon1.svg" />
            <Card title="외국인 원격 채용 (비개발)" icon="/CardIcon2.svg" />
            <Card title="한국어 가능 외국인 채용" icon="/CardIcon3.svg" />
            <Card title="해외 개발자 활용 서비스" icon="/CardIcon4.svg" />
          </div>
          <div className="flex gap-3 mt-[2.875rem]">
            <div className="flex flex-col">
              <p className="text-xs">상호명</p>
              <p className="text-[#5E626F] text-ms">하이퍼하이어</p>
              <p className="text-[#5E626F] text-ms">Hyperhire India Private Limited</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">대표 CEO</p>
              <p className="text-[#5E626F] text-ms">김주현</p>
              <p className="text-[#5E626F] text-ms">Juhyun Kim</p>
            </div>
          </div>
          <div className="flex w-full gap-[2.625rem] mt-[2.875rem]">
            <div className="flex flex-col">
              <p className="text-xs">사업자등록번호 CIN</p>
              <p className="text-[#5E626F] text-ms">427-86-01187</p>
              <p className="text-[#5E626F] text-ms">U74110DL2016PTC290812</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">주소 ADDRESS</p>
              <p className="text-[#5E626F] text-ms">서울특별시 강남대로 479, 지하 1층 238호</p>
              <p className="text-[#5E626F] text-ms">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br /> 110053 India
              </p>
            </div>
          </div>
          <p className="text-[#5E626F] text-ms mt-7">ⓒ 2023 Hyperhire</p>
        </div>
      </div>
    </>
  );
}
