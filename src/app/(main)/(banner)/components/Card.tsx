import Image from 'next/image';

export default function Card({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="w-[332px] bg-white bg-opacity-20 h-[88px] rounded-lg p-4 flex gap-6 items-center">
      <div className="w-14 h-14 rounded-lg bg-white bg-opacity-40  p-3">
        <Image src={`${icon}`} width={32} height={32} alt="Card Icon" />
      </div>
      <p className="text-2xl">{title}</p>
    </div>
  );
}
