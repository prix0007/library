---
id: welcome
title: Welcome to DripVerse Library
hide_table_of_contents: true
---
import {Contact} from "@site/components/featurelist"

Welcome! This is the starting point for all the documentation in DripVerse.

<div className="container">
  <div className="row">
    <div className="col col--6">
      <a href="/papers/litepaper">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/guide.jpg").default} alt="Litepaper" />
          </div>
          <div className="card__body">
            <h3>DripVerse Litepaper</h3>
            Learn what DripVerse is, how it works, and why you should build on it.
          </div>
        </div>
      </a>
    </div>
    <div className="col col--6">
      <a href="/guide/welcome">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/network.png").default} alt="Guide" />
          </div>
          <div className="card__body">
            <h3>DripVerse Guide</h3>
            Navigate and learn all important concepts in and around DripVerse.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

<Contact />
