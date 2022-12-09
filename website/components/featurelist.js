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
      <hr />
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

export function ReleaseHeader() {
  return (
    <>
      <p>
        All notable changes to this project will be documented in this file.
        <br />
        The format is based on{" "}
        <a
          href="https://keepachangelog.com/en/1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keep a Changelog
        </a>
        , and this project adheres to{" "}
        <a
          href="https://keepachangelog.com/en/1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Semantic Versioning
        </a>
        .
      </p>
    </>
  );
}

export const MintVideo = () => {
  return (
    <video
      className="quickstart__video"
      loop
      autoPlay
      muted
      src="https://assets.dripverse.org/videos/mint.mp4"
    />
  );
};

export const AddUtilityVideo = () => {
  return (
    <video
      className="quickstart__video"
      loop
      autoPlay
      muted
      src="https://assets.dripverse.org/videos/add_utility.mp4"
    />
  );
};

export const GenerateKeyVideo = () => {
  return (
    <video
      className="quickstart__video"
      loop
      autoPlay
      muted
      src="https://assets.dripverse.org/videos/generate_key.mov"
    />
  );
};

export function CardList({ children }) {
  return (
    <>
      <div class="card-shelf">
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/gz8c8Xs.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Digital Art</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/tv6t72p.png"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/6Lzd3UK.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Sports</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/H9R3lKt.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-shelf">
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/OSsoQHC.gif"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Digital Avatars</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/KAJibNp.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Virtual Land</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/HwgMyO4.png"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Literature and Books</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/6A5ib1J.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Tweets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-shelf">
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/f9eODs7.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Fashion NFT</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/qc698jt.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Carbon Offsets</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/450Iple.png"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Github Commits NFT</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div
            class="card bg"
            style={{
              background: `url(
                "https://i.imgur.com/SnJ6x7k.jpg"
              )`,
            }}
          >
            <div class="inner-content">
              <div class="inner-text">
                <p>Architecture NFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
