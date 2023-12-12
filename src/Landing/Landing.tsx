import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Sparkles, Cog, BookText } from "lucide-react";

function Landing() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Best Markdown Generator - mdfiles</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-teal-100 to-pink-200 overflow-x-hidden max-md:justify-center max-md:items-center">
        <Header isHomepage={true} />
        <section className=" min-h-screen flex justify-center items-center flex-col gap-8">
          <h1 className="text-5xl font-['Ubuntu_Mono'] antialiased max-md:text-3xl max-md:text-center">
            # The best markdown generator.
          </h1>
          <div className="flex gap-4">
            <Link to={"./generator"}>
              <Button className=" flex justify-between group ">
                Generator
                <Cog
                  strokeWidth={"2"}
                  size={"24"}
                  className=" opacity-0 -mx-3 group-hover:opacity-100 transition-all group-hover:mx-1 group-hover:rotate-[270deg]"
                />
              </Button>
            </Link>
            <Link to={"./cheatsheet"}>
              <Button
                className="border-2 border-slate-900 flex justify-between group"
                variant={"outline"}
              >
                Cheatsheet
                <BookText className=" opacity-0 -mx-3  group-hover:opacity-100 transition-all group-hover:mx-1" />
              </Button>
            </Link>
          </div>
        </section>
        <div className="absolute flex w-screen justify-center items-center bottom-4">
          <Link
            className=" font-['Ubuntu_Mono']  underline font-semibold flex gap-3 hover:scale-105 antialiased transition-all"
            target="_blank"
            to={"https://github.com/croosh"}
          >
            <Sparkles />
            by Umar A.
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
