import React from "react";

export function Presentation({ title, url }) {
  return (
    <iframe
      src={url}
      title={title}
      frameBorder={0}
      width="100%"
      height={737}
      loading="lazy"
    ></iframe>
  );
}
