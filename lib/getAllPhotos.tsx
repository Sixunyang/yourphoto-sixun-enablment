import React from "react";

export default async function getAllPhotos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
