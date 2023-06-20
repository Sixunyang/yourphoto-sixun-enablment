import React from "react";
import "./Album.css";
import Image from "next/image";
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export default function Album({ photos }: any) {
  return (
    <div className="photos">
      {photos.map((photo: Photo) => (
        <div key={photo.id}>
          <Image src={photo.url} alt="my photo" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
