import type { NextPage } from "next";
import Head from "next/head";
import PlaygroundPreviewCard from "../components/PlaygroundPreviewCard";

const playgrounds = [
  {
    title: "Animated Spotlight",
    description: "An animated Spotlight moving on scroll",
    path: "animated-spotlight",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CSS Playground</title>
        <meta
          name="description"
          content="Playground to test animation in an isolated space"
        />
      </Head>
      <main>
        {playgrounds.map((playground) => (
          <PlaygroundPreviewCard
            key={playground.title}
            playground={playground}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
