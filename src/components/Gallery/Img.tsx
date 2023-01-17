import Image from "next/image";

const Img: React.FC<{ src: string; className?: string }> = ({
  src,
  className,
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image src={src} style={{ objectFit: "cover" }} fill alt="" />
    </div>
  );
};

export default Img;
