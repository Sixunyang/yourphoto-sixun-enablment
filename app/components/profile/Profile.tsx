"use client";
import React, { useState } from "react";
import "./Profile.css";
import Image from "next/image";
import Link from "next/link";
type ProfileProps = {
  id: number;
  name: string;
  email: string;
  city: string;
  web: string;
};
export default function Profile({ id, name, email, city, web }: ProfileProps) {
  const [isFollowing, setisFollowing] = useState(false);
  const handleFollow = () => {
    console.log(isFollowing);
    setisFollowing(!isFollowing);
  };
  return (
    <div className="profile">
      <div className="profile-inside">
        <div className="avater">
          <Image
            src="/placeholder-img.jpg"
            alt="My photo"
            width={150}
            height={150}
          />
        </div>
        <div className="personal-info">
          <h2>{name}</h2>
          <div className="email">{email}</div>
          <div className="city">
            <i className="bi bi-geo-alt"></i>
            {city}
          </div>
          <Link href={web} className="web">
            <i className="bi bi-link-45deg"></i>
            {web}
          </Link>
          <div className="follow-info">
            <div>
              <span style={{ fontWeight: "600" }}>1.5M</span> Followers
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>673M</span> Following
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>24</span> Liked
            </div>
          </div>
        </div>
        <div
          className={isFollowing ? "following" : "follow"}
          onClick={handleFollow}
        >
          {isFollowing ? "Following" : "Follow"}
        </div>
      </div>
    </div>
  );
}
