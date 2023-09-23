import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import Image from "next/image";

function Userdetails({ user }: { user: any }) {
  return (
    <div className="w-full p-5 bg-white md:rounded-full rounded-md flex flex-row gap-5 items-center h-full">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="md:w-1/6 w-1/2 rounded-full"
      />
      <div className="h-full w-full flex flex-col items-start gap-2">
        {" "}
        <div className="md:text-3xl font-semibold">{user.name}</div>
        <div className="border-t-2 border-gray-100 py-2 w-3/4 flex flex-row items-baseline gap-2">
          <span className="md:text-6xl text-blue-500 font-bold">
            <BsBookmarkStarFill />
          </span>
          <div className="md:text-6xl text-blue-500 font-bold">
            {user.public_repos}
          </div>
        </div>
        <div className="w-full text-green-400 font-semibold md:text-xl">
          {user.bio}
        </div>
      </div>{" "}
    </div>
  );
}

export default Userdetails;
