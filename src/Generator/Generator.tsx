import Editor from "@/Editor/Editor";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

export default function Generator() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Markdown Generator - mdfiles</title>
      </Helmet>
      <div className=" overflow-x-hidden bg-gradient-to-br from-teal-100 to-pink-200">
        <Header isGenerator={true} isCheatsheet={false} />
        <div className="min-h-screen mx-8 my-8 max-md:mx-6 ">
          <h1 className="font-['Inter'] font-bold text-5xl mb-4 text-center max-md:text-3xl">
            Generator
          </h1>
          <p className=" font-medium text-center text-lg mb-8 max-md:text-sm">
            Start writing in the left panel and the markdown will show in the
            right panel.
          </p>
          <Editor />
        </div>
      </div>
    </>
  );
}
