import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";

export default function Home() {
  return (
    <main className="m-2">
      <div className="flex overflow-y-hidden h-[calc(100vh-16px)] max-w-[1700px] mx-auto bg-left-panel">
        <LeftPanel />
        <RightPanel />
      </div>
    </main>
  );
}
