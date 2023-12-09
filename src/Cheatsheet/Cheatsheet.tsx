import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Cheatsheet() {
  const navigate = useNavigate();
  return (
    <>
      <Header isCheatsheet={true} />
      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className=" font-bold font-['Inter'] text-6xl max-md:text-3xl">
            Coming Soon.
          </h1>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </>
  );
}
