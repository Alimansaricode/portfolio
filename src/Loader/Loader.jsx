import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-50">
      <ThreeDots height="80" width="80" color="#38bdf8" />
    </div>
  );
}
