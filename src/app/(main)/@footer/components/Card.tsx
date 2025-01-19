import Image from 'next/image';

export default function Card({ icon, title }: { title: string; icon: string }) {
  return (
    <div className="sm:w-[12.063rem] bg-white w-40 h-[8.875rem] p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <Image src={`${icon}`} width={40} height={40} alt="Card Icon" />
        <p className="text-sm">{title}</p>
      </div>
      <div className="flex gap-1 items-center">
        <p className="text-[#5E626F] text-sm">바로가기</p>
        <Image src="/ArrowRightSquare.svg" width={20} height={20} alt="ArrowRightSquare" />
      </div>
    </div>
  );
}
