"use client";
import react from "react";
import { FaArrowUp } from "react-icons/fa";
import api from "./lib/axios";
import Loader from "./components/loader";

export default function Home() {
  const [link, setLink] = react.useState("");
  const [summary, setSummary] = react.useState("");

  const [loading, setLoading] = react.useState(false);
  async function fetchSummary(e) {
    e.preventDefault();

    if (!link) return;

    setLoading(true);

    try {
      const response = await api.get("/summary", {
        params: {
          url: link.trim(),
        },
      });

      console.log(response.data);
      setSummary(response.data.summary);
    } catch (error) {
      if (error.response?.status === 502) {
        setSummary("Invalid URL");
      } else {
        setSummary("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <div className=" flex flex-col  w-fit min-w-xl min-h-96 max-w-full max-h-full h-fit items-center justify-start p-20 border-2 border-black/5 rounded-2xl bg-white/5">
        <h1 className="text-4xl mb-10 font-bold text-white ">YT Summarizer</h1>
        <form
          onSubmit={fetchSummary}
          className="w-full flex flex-row justify-center items-center gap-2"
        >
          <input
            type="text"
            className="bg-black p-2 rounded-xl text-2xl text-white placeholder:text-white w-full max-w-md outline-none"
            placeholder="Enter youtube video link."
            onChange={(e) => setLink(e.target.value.trim())}
            value={link}
          ></input>
          <button
            disabled = {loading || !link}
            type="submit"
            className="bg-white disabled:bg-gray-400 disabled:cursor-default w-10 h-10 flex items-center justify-center rounded-full p-2 cursor-pointer"
          >
            <FaArrowUp size={23} />
          </button>
        </form>

        {(summary && !loading) && (
          <div className="text-white whitespace-pre-line leading-relaxed max-w-2xl max-h-150 bg-black rounded-2xl p-5 overflow-y-auto no-scrollbar mt-10 font-medium ">
            {summary}
          </div>
        )}

        {loading && ( <div className="text-white whitespace-pre-line leading-relaxed max-w-2xl max-h-150 bg-black rounded-2xl p-5 overflow-y-auto no-scrollbar mt-10 font-medium ">
           <Loader size={150} /> 
          </div>)}
      </div>
    </main>
  );
}
