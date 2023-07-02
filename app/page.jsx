
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Welcome to Promptopia
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source Ai prompting tool for modern worls to discover, create and share creative prompts
        </p>
        {/* Feed */}
        <Feed />
    </section>
  )
}

export default Home