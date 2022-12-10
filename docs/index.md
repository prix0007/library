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
      <a href="/guide/quickstart">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/quickstart.jpg").default} alt="Quick Start" />
          </div>
          <div className="card__body">
            <h3>Quick Start</h3>
            Can't wait to jump to integrate DripVerse? Us, too.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<br/>

<Contact />
