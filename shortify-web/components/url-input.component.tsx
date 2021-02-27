import React, { useState } from "react";

export const UrlInput: React.FC = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [shortUrl, setShortUrl] = useState("");
  const [hasCopied, setHasCopied] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
      .then((res) => {
        
        return  res.json();
      })
      .then((data) => {
        console.log(data)
        if (data.ok) {
          setShortUrl(data.result.full_short_link);
          setError("");
        } else if (data.error_code === 10) {
          setError("This link is not allowed");
        } 
      })
      .catch(err => {
        console.log("Ok");
        console.log(Object.keys(err))
        console.log(err.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(
      () => {
        setHasCopied(true);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const handleShortifyAgain = (e: any) => {
    e.preventDefault();
    setShortUrl("");
    setHasCopied(false);
    setValue("");
  };

  return (
    <div
      style={{
        backgroundImage: "url(images/bg-shorten-desktop.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="p-8 w-full rounded-lg flex justify-between items-start bg-black"
    >
      {shortUrl ? (
        <>
          <p className="w-full px-4 py-2 rounded-md focus:outline-none bg-gray-200 text-gray-500 h-10">
            {shortUrl}
            <a
              href="#"
              className="float-right font-bold text-blue-400 hover:underline h-10"
              onClick={handleShortifyAgain}
            >
              Shortify again!
            </a>
          </p>

          <button
            className="px-4 py-2 text-white bg-cyan focus:outline-none rounded-md ml-5 w-40 transition-opacity duration-300 hover:opacity-75"
            onClick={handleCopy}
          >
            {hasCopied ? "Copied!" : "Copy"}
          </button>
        </>
      ) : (
        <>
          <div className="w-full">
          <input
            type="text"
            placeholder="Shorten a link here"
            className={`w-full px-4 py-2 rounded-md h-10 focus:outline-none border-2 border-transparent ${error && "border-solid border-red-500"}`}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>
          </div>

          <button
            className="px-4 py-2 text-white bg-cyan focus:outline-none rounded-md ml-5 w-40 h-10 transition-opacity duration-300 hover:opacity-75"
            onClick={handleSubmit}
          >
            {isLoading ? "loading.." : "Shorten it!"}
          </button>
        </>
      )}
    </div>
  );
};
