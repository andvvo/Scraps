import { useState } from "react";

type FoodIconProps = {
  defaultSrc: string;
  hoverSrc?: string;
  selectedSrc?: string;
  selected?: boolean;
  onToggle?: () => void;
  alt: string;
  className?: string;
};

export default function FoodIcon({
  defaultSrc,
  hoverSrc,
  selectedSrc,
  selected,
  onToggle,
  alt,
  className,
}: FoodIconProps) {
  const [hovered, setHovered] = useState(false);

  const src =
    hovered && hoverSrc
      ? hoverSrc
      : selected && selectedSrc
      ? selectedSrc
      : defaultSrc;

  return (
    <img
      src={src}
      alt={alt}
      className={`${className ?? ""} cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onToggle}
    />
  );
}
