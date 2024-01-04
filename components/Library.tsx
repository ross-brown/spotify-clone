"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";


interface LibraryProps {
  songs: Song[];
}

export default function Library({ songs }: LibraryProps) {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onPlay = useOnPlay(songs);

  function onClick() {
    if (!user) {
      authModal.onOpen();
      return;
    }

    // Check for subscription

    uploadModal.onOpen();
  }


  return (
    <div className="flex flex-col">
      <div
        className="
          flex
          item-center
          justify-between
          px-5
          pt-4
        ">
        <div
          className="
              inline-flex
              items-center
              gap-x-2
            ">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p
            className="
             text-neutral-400
              font-medium
              text-md
            "
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
      </div>
      <div className="
        flex
        flex-col
        gap-y-2
        mt-4
        px-3
      ">
        {songs.map(song => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={song.id}
            data={song} />
        ))}
      </div>
    </div>
  );
}
