import { TextReveal } from "@/components/magicui/text-reveal";
import { useSelector } from "react-redux";

export function TextRevealDemo() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      className={`z-10 flex min-h-64 items-center justify-center bg-white border`}
    >
      <TextReveal
        className="text-white"
        text="I think your big idea deserves a bold, beautiful digital presence."
      />
    </div>
  );
}
