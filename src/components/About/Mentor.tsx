import Image from "next/image";

interface Props {
  img: string;
  name: string;
  desc: string;
  className?: string;
}

const Mentor: React.FC<Props> = ({ img, name, desc, className }) => {
  return (
    <div className={`md:w-min ${className}`}>
      <div className="b-linear-blue relative aspect-square w-full overflow-hidden rounded-full !border-2 md:w-[184px] md:flex-shrink-0">
        <Image fill src={img} alt={name} className="object-cover" />
      </div>
      <h2 className="mt-4 mb-1 font-clash text-2xl font-medium">{name}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Mentor;
