export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden max-w-sm md:max-w-2xl">
        <div className="flex flex-col gap-3 justify-center p-10 bg-white md:col-span-2">
          <h1 className="text-cyan-500 font-karla text-3xl font-bold">Join our community</h1>
          <h2 className="font-karla text-[#c0d75a] text-xl mt-4">30-day, hassle-free money back guarantee</h2>
          <p className="font-karla text-[17px] text-gray-400">Gain access to our full library of tutorials along with expert
            code reviews. Perfect for any developers who are serious about honing their
            skills. </p>
        </div>
        <div className="flex flex-col gap-5 p-10 bg-[#2bb3b1] ">
          <h2 className="font-karla text-xl text-white font-semibold">Monthly Subscription</h2>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h3 className="font-karla text-white font-bold text-4xl">$29</h3>
              <p className="font-karla text-[#78e4e6]">per month</p>
            </div>
            <h4 className="font-karla text-white text-md font-light">Full access for less than $1 a day</h4>
          </div>
          <button className="mt-4 shadow-lg bg-[#bfdf32] px-20 py-3 font-karla text-white text-lg font-semibold rounded-md hover:opacity-80">Sign Up</button>
        </div>
        <div className="bg-[#4abebd] flex flex-col gap-4 p-10">
          <h2 className="font-karla text-white text-xl">Why us?</h2>
          <ul>
            <li className="text-white font-karla text-md opacity-70">Tutorials by industry experts</li>
            <li className="text-white font-karla text-md opacity-70">Peer & expert code review</li>
            <li className="text-white font-karla text-md opacity-70">Coding exercises</li>
            <li className="text-white font-karla text-md opacity-70">Access to our GitHub repos</li>
            <li className="text-white font-karla text-md opacity-70">Community forum</li>
            <li className="text-white font-karla text-md opacity-70">Flashcard decks</li>
            <li className="text-white font-karla text-md opacity-70">New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
