<template>
  <div>
    <b-jumbotron header="Vatron" lead="Fast, lightweight, and advanced." fluid class="parallax" style="background-image: url(resources/img/screenshot-overview.png)">
      <b-button href="#download" variant="primary" size="lg" style="background-color: #343a40; border-color: #282c30">Download</b-button>
    </b-jumbotron>
    <b-jumbotron fluid>
      <b-row>
        <b-col md="9">
          <h1 class="display-3">About Vatron</h1>
          <p class="lead">
            Vatron is a brand new VATSIM map client built on top of modern, cross-platform technologies. Vatron promises to be fast and lightweight, while packing some of the most advanced technologies current available. Vatron is written entirly in the language of the internet, meaning that it has one of the largest development communities making up each and every component.
          </p>
        </b-col>
        <b-col md="3"><img src="resources/img/icon.png" style="width: 100%; height: auto;" /></b-col>
      </b-row>
    </b-jumbotron>
    <b-jumbotron header="Contribute to Vatron" fluid>
      <p class="lead">
        Vatron is totally free and open source, forever. Head over to <a href="https://github.com/andrewward2001/vatron">the GitHub repo</a> to contribute.
      </p>
      <a href="https://github.com/andrewward2001/vatron/tree/master/fir_data">Add new ATC data</a>
      <p class="title is-4" style="margin-top: 1rem; margin-bottom: 0">Don't know how to code?</p>
      <p class="text-muted">That's cool! Just open an <a href="https://github.com/andrewward2001/vatron/issues">issue</a> with your suggestions or bugs.</p>
    </b-jumbotron>
    <b-jumbotron header="Updated where it counts" fluid>
      <p class="lead">
        Vatron will always keep certain data up to date, like ATC coverage areas. Feature updates are not automatically downloaded, so you won't have to wait for updates when you just want to fly.
      </p>
      <p>Find all releases <a href="https://github.com/andrewward2001/vatron/releases">here</a>.</p>
      <p class="text-muted">Your version of Vatron can be found by clicking Vatron &rarr; About Vatron</p>
    </b-jumbotron>
    <b-jumbotron fluid>
      <h1 class="display-3">Vatron <i class="fa fa-heart" aria-hidden="true"></i> Everyone</h1>
      <p class="lead">
        Vatron doesn't care if you use Windows or macOS.
      </p>
      <img src="resources/img/cross-platform.png" />
      <p class="text-muted">Vatron can also be built for Linux</p>
    </b-jumbotron>
    <a id="download"></a>
    <b-jumbotron header="Download Vatron 0.3.2" fluid>
      <p class="text-muted">Vatron is only compatible with 64-bit systems.</p>
      <b-row>
        <b-col>
          <b-card title="Windows" sub-title="The Squirrel Installer is required for automatic updates.">
            <a href="https://github.com/vatron/vatron/releases/download/v0.3.2/vatron-Setup-0.3.2.exe" target="_blank" class="card-link">Squirrel Installer (~76 MB)</a><br />
            <a href="https://github.com/vatron/vatron/releases/download/v0.3.2/vatron-web-setup-0.3.2.exe" target="_blank" class="card-link">Web Installer (~951+ KB)</a>
            <a href="https://github.com/vatron/vatron/releases/download/v0.3.2/VatronPortable.0.3.2.exe" target="_blank" class="card-link">Portable .exe (~36 MB)</a>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="macOS">
            <a href="https://github.com/vatron/vatron/releases/download/v0.3.2/Vatron.0.3.2.dmg" target="_blank" class="card-link">DMG (~52 MB)</a>
          </b-card>
        </b-col>
      </b-row>
      <p><a href="https://github.com/vatron/vatron/compare/0.2.0...v0.3.0">view the 0.3.0 changelog</a></p>
      <p><a href="https://github.com/vatron/vatron/compare/v0.3.0...v0.3.1">view the 0.3.1 changelog</a></p>
      <p><a href="https://github.com/vatron/vatron/compare/v0.3.1...v0.3.2">view the 0.3.2 changelog</a></p>
      <p><a href="https://github.com/andrewward2001/vatron/releases/tag/v0.3.1">view the tag</a></p>
      <h1 class="display-5" style="margin-top: 2rem">Vatron Development Releases</h1>
      <b-alert show variant="danger">
        <h4 class="alert-heading">Before you start</h4>
        <p>Make sure Vatron the latest version has successfully built on your platform.</p>
        <p>Windows: <a href="https://ci.appveyor.com/project/andrewward2001/vatron-7u0yu/branch/master"><img src="https://ci.appveyor.com/api/projects/status/s2aw436mdsw993e1/branch/master?svg=true" /></a></p>
        <p>macOS: <a href="https://travis-ci.org/vatron/vatron"><img src="https://travis-ci.org/vatron/vatron.svg?branch=master" /></a></p>
      </b-alert>
      <p class="subtitle is-4">It's easy to get the source code up and running to try out the newest Vatron features.</p>
      <p>You'll need a few things first:</p>
      <ul style="list-style: inherit; padding-left: 40px;">
        <li><a href="https://git-scm.com/">Git</a> or git client</li>
        <li><a href="https://nodejs.org/en/">Node.js</a> 9.2 or newer</li>
        <li>npm (bundled with Node.js) or <a href="https://yarnpkg.com/en/">yarn</a> (recommended)</li>
      </ul>
      <p>Open up a command prompt or Terminal and navigate to a suitible parent directory (<code>~/Desktop</code>, for example).</p>
      <p>Clone the Git repo and enter the directory</p>
      <code>git clone https://github.com/andrewward2001/vatron</code><br />
      <code>cd vatron</code>
      <p>Now you'll need to install the required dependencies. If you're using npm, enter</p>
      <code>npm install</code>
      <p>If you opted to use yarn, use</p>
      <code>yarn</code>
      <p>From there, it's as easy as running Vatron:</p>
      <code>npm start</code>
      <p>or</p>
      <code>yarn start</code>
    </b-jumbotron>
  </div>
</template>
