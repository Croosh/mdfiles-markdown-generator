import { useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  darkDefaultTheme,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function App() {
  const [markdown, setMarkdown] = useState<string>("");
  const { toast } = useToast();

  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        const markdown: string = await editor.blocksToMarkdownLossy(
          editor.topLevelBlocks
        );
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();
    },
  });

  return (
    <>
      <div className="flex min-h-screen items-stretch max-md:flex-col max-md:items-center max-md:grow-">
        <div className=" w-1/2 bg-[#1f1f1f] opacity-90 py-4 rounded-l-xl max-md:w-full max-md:min-h-screen max-md:rounded-t-xl max-md:rounded-b-none">
          <div className="px-4 py-1 max-md:px-1 max-md:py-0">
            <h2 className=" text-zinc-200 px-6 font-semibold text-2xl max-md:text-xl max-sm:text-lg">
              Add content
            </h2>
          </div>
          <Separator className="my-4" />
          <BlockNoteView editor={editor} theme={darkDefaultTheme} />
        </div>
        <div className=" w-1/2 bg-[#1f1f1f] py-4 rounded-r-xl max-md:w-full max-md:min-h-screen max-md:rounded-b-xl max-md:rounded-t-none">
          <div className="px-6 flex justify-between items-center max-md:px-2 max-md:py-0">
            <h2 className=" text-zinc-200 px-6 font-semibold text-2xl max-md:px-2 max-md:text-xl max-sm:text-lg">
              Markdown
            </h2>
            <Button
              className=" bg-zinc-200 text-zinc-950 hover:bg-zinc-200/70"
              onClick={() => {
                navigator.clipboard.writeText(markdown);
                toast({
                  variant: "success",
                  description: "Markdown has been copied to your clipboard.",
                });
                console.log("Copied");
              }}
            >
              Copy
              <ClipboardCopy className="w-4 ml-2" />
            </Button>
          </div>
          <Separator className="my-4" />
          <pre className="text-green-400 px-4 font-['Ubuntu_Mono'] font-bold tracking-wider">
            {markdown}
          </pre>
        </div>
      </div>
    </>
  );
}
