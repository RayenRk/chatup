import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import MagicButton from "../ui/MagicButton";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitch from "./theme-switch";
import { useConvexAuth } from "convex/react";
import UserListDialog from "./user-list-dialog";

const ChatPlaceHolder = () => {
  const { isAuthenticated } = useConvexAuth();

  return (
    <div className="sm:w-full md:w-full bg-gray-secondary flex flex-col items-center justify-center pt-0 pb-10">
      {/* Header 1 */}
      <div className="w-full sticky top-0 z-50 border-b-gray-500">
        <div className="flex sm:hidden md:hidden justify-between bg-gray-primary p-3 items-center">
          <UserButton />
          <div className="flex items-center gap-3">
            {isAuthenticated && <UserListDialog />}
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full justify-center py-10 gap-4">
        {/* <Image src={"/desktop-hero.png"} alt="Hero" width={320} height={188} /> */}
        <p className="text-3xl font-extralight mt-20 mb-2">
          Welcome to Chatup 😀
        </p>
        <p className="w-1/2 text-center text-gray-primary text-sm text-muted-foreground mb-4">
          Chat, send messages, send images and videos to your friends and family
          from your computer or phone.
        </p>

        <MagicButton />
      </div>

      <div className="w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Lock size={10} />
        <p className="text-nowrap">Your personal messages are end-to-end encrypted</p>
      </div>
    </div>
  );
};
export default ChatPlaceHolder;
