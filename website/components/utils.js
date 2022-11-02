import React from "react";

export function Presentation({ url }) {
  return (
    <iframe
      src={url}
      frameBorder="0"
      width="1280"
      height="720"
      allowFullScreen={true}
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  );
}
