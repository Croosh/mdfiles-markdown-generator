import Editor from "@/Editor/Editor";
import Header from "@/components/Header";
export default function Generator() {
  return (
    <>
      <div className=" overflow-x-hidden bg-gradient-to-br from-teal-100 to-pink-200">
        <Header isGenerator={true} isCheatsheet={false} />
        <div className="min-h-screen mx-8 my-8  ">
          <h1 className="font-['Inter'] font-bold text-5xl mb-4 text-center">
            Generator
          </h1>
          <p className=" font-medium text-center text-lg mb-8">
            Start writing in the left panel and the markdown will show in the
            right panel.
          </p>
          <Editor />
        </div>
      </div>
    </>
  );
}
