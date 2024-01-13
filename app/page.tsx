import HomePageButton from "@/components/HomePageButton";

export default function Home() {
  return (
    <div className="px-8 h-screen bg-zinc-900">
      <div className="navbar">
        <a className="btn btn-ghost text-xl">Web Dev Sabbatical</a>
      </div>
      <p className="mt-8 mb-4 text-lg">Materials: </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <HomePageButton link="day1" text="Day 1" />
        <HomePageButton link="day2" text="Day 2" />
        <HomePageButton link="day3" text="Day 3" />
        <HomePageButton link="day5" text="Day 5" />
      </div>
    </div>
  );
}
