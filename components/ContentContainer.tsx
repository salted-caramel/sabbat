import React, { MutableRefObject } from "react";

interface Props {
  title: string;
}

const ContentContainer = ({ title }: Props) => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar">
        <a className="text-xl">{title}</a>
      </div>
    </div>
  );
};

export default ContentContainer;
