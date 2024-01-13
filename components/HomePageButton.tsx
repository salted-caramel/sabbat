import React from "react";

interface Props {
  link: string;
  text: String;
}

const HomePageButton = ({ link, text }: Props) => {
  return (
    <a
      className="btn btn-ghost text-xl h-36 border-2  border-slate-400 rounded-xl"
      href={`/${link}`}
    >
      {text}
    </a>
  );
};

export default HomePageButton;
