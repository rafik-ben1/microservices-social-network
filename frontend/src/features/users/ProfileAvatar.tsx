import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { UserProfile } from "./user.types";
import { useUpdateAvatar } from "./UserService";
import { BASE_URL } from "@/common/constants";

interface ProfileAvatarProps {
  user: UserProfile;
}

export default function ProfileAvatar({
  user: { username, avatar },
}: ProfileAvatarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate } = useUpdateAvatar();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      let data = new FormData();
      data.append("image", file);
      mutate(data);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative inline-block">
      <Avatar className="h-20 w-20 md:h-24 md:w-24 relative">
        <AvatarImage className=" object-cover" src={BASE_URL + avatar} alt={`${username}}'s avatar`} />
        <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <Button
        size="icon"
        variant="secondary"
        className="absolute bottom-0 right-0 rounded-full shadow-lg"
        onClick={handleButtonClick}
      >
        <Pen className="h-4 w-4" />
        <span className="sr-only">Change avatar</span>
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
        aria-label="Upload profile picture"
      />
    </div>
  );
}
