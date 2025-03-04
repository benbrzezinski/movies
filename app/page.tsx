import Genres from "@/components/genres";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="max-w-[1600px] p-[50px] mx-auto">
      <Header />
      <Genres />
    </div>
  );
}
