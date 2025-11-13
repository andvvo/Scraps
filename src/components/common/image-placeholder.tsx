interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
}

export default function ImagePlaceholder({
  width = 300,
  height = 200,
}: ImagePlaceholderProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#757575",
      }}
    >
      {width} × {height}
    </div>
  );
}
