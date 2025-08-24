import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <section className="h-[50vh] flex flex-col justify-center bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">Build smarter, faster, and better with us.</p>
        <div className="py-3 bg-transparent flex justify-center items-center"> 
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
