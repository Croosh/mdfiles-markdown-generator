import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-100 to-pink-200 overflow-x-hidden max-md:justify-center max-md:items-center">
        <Header isHomepage={true} />
        <section className=" min-h-screen flex justify-center items-center flex-col gap-8">
          <h1 className="text-5xl font-['Ubuntu_Mono'] antialiased max-md:text-3xl max-md:text-center">
            # The best markdown generator.
          </h1>
          <div className="flex gap-4">
            <Link to={"./generator"}>
              <Button>Generator</Button>
            </Link>
            <Link to={"./cheatsheet"}>
              <Button className="border-2 border-slate-900" variant={"outline"}>
                Cheatsheet
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
