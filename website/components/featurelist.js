import React from "react";

export function FeatureList({ children }) {
  return (
    <>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </>
  );
}

export function Column({ title, children, size = 4 }) {
  return (
    <>
      <div className={`col col--${size}`}>
        <h3>{title}</h3>
        {children}
      </div>
    </>
  );
}

export function Feature({ image, title, subtitle, url }) {
  return (
    <>
      <h4> </h4>
      <a className="avatar" href={url}>
        <img
          className="avatar__photo"
          src={
            require(`@site/static/docs/assets/welcome-pages/${image}`).default
          }
        />
        <div className="avatar__intro">
          <div className="avatar__name">{title}</div>
          <small className="avatar__subtitle">{subtitle}</small>
        </div>
      </a>
    </>
  );
}

export function Contact({}) {
  return (
    <>
      <hr class="subsection" />
      <div className="container">
        <div className="row">
          <div className="col col--2">
            <div className="avatar">
              <img
                className="avatar__photo"
                src={
                  require("@site/static/docs/assets/home/twitter.png").default
                }
              />
              <div className="avatar__intro">
                <div className="avatar__name">Twitter</div>
                <small className="avatar__subtitle">
                  <a href="https://twitter.com/0xDripVerse">@0xDripVerse</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
