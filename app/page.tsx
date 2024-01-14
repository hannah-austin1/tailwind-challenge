import { Header } from "@/components/Atoms";
import { EditorForm, Level } from "@/components/Organisms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex h-screen w-full">
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-200 p-3">
          <Level />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-300 p-3">
          <EditorForm />
        </div>
      </div>
    </main>
  );
}
