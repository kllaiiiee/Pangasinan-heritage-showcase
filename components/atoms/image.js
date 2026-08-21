import Image from "next/image";

export default function HeritageImage({
  src,
  alt = "",
  width = 400,
  height = 250,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "8px",
      }}
    />
  );
}