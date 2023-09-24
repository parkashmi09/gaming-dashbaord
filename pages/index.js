import { Sidebar } from "@/components/Sidebar";
import MainContianer from "@/components/MainContianer";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <MainContianer>
      <div className="p-4 flex">
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </MainContianer>
  );
}
