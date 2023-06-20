import React from "react";
import getUser from "@/lib/getUser";
import Profile from "@/app/components/profile/Profile";
import Nav from "@/app/components/nav/Nav";
import Selector from "@/app/components/selector/Selector";
import Album from "@/app/components/album/Album";
import getAllPhotos from "@/lib/getAllPhotos";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
type Params = {
  params: {
    userId: string;
  };
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  const photosData: Promise<Photo[]> = getAllPhotos();
  const photos = await photosData;

  return (
    <div style={{ padding: "0 30px" }}>
      <Nav />
      <Profile
        id={user.id}
        name={user.name}
        email={user.email}
        city={user.address.city}
        web={user.website}
      />
      <Selector />
      <Album photos={photos} />
    </div>
  );
}
