import { Search } from "react-huge-icons/outline";
import Teamcard, { TeamcardProps } from "./TeamCard";

export default function Main() {
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <h1 className="text-2xl font-bold">Experts</h1>

        <div className="relative md:grid w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Search Team Members"
            className="border border-gray-300 rounded-3xl p-2 w-full text-sm"
          />
          <Search className="absolute top-3 right-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {dummy.map((dummy) => (
          <Teamcard key={dummy.name} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: TeamcardProps[] = [
  {
    img: "/img/person.jpeg",
    name: "John Doe",
    role: "developer",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    twitter: "www.twitter.com",
  },
  {
    img: "/img/person.jpeg",
    name: "John Doe",
    role: "developer",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    twitter: "www.twitter.com",
  },
  {
    img: "/img/person.jpeg",
    name: "John Doe",
    role: "developer",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    twitter: "www.twitter.com",
  },
  {
    img: "/img/person.jpeg",
    name: "John Doe",
    role: "developer",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    twitter: "www.twitter.com",
  },
];
