"use client";

export const CardImage = ({
  imageSrc,
  name,
}: {
  imageSrc: string;
  name: string;
}) => {
  return (
    <img
      src={imageSrc || "https://placehold.co/800x450?text=No\nImage"}
      alt={name}
      className="w-full h-full object-cover aspect-video"
      onError={(e) => {
        const target = e.currentTarget;
        target.src = "https://placehold.co/800x450?text=Image\nBroken";
      }}
    />
  );
};
