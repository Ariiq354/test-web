import Image from 'next/image';

function SmallCard({ text }: { text: string }) {
  return <div className="border-[#C1C5CF] border rounded-md py-1 px-3 text-[#5E626F] w-fit flex-shrink-0">{text}</div>;
}

export default function BannerCard({ className }: { className?: string }) {
  return (
    <div className={`bg-white drop-shadow-card rounded-xl w-[292px] h-[408px] p-9 flex flex-col gap-9 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <Image src={'/personPhoto.png'} width={120} height={120} alt="person photo" />
        <div className="flex flex-col text-center">
          <p className="text-2xl text-black">Abhishek Gupta</p>
          <p className="text-[#4A77FF]">마케팅 · 2y+</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-1 ">
        <SmallCard text={'마케팅 콘텐츠 제작'} />
        <SmallCard text={'인스타그램 관리'} />
        <div className="flex gap-[1px]">
          <SmallCard text={'트위터 관리'} />
          <SmallCard text={'블로그 글 작성'} />
        </div>
      </div>
    </div>
  );
}
