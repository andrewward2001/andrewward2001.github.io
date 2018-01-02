<template>
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Vatron
          </h1>
          <h2 class="subtitle">
            Fast, lightweight, and advanced.
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title is-2" style="color: #212121">
                About Vatron
              </h1>
              <p class="subtitle is-4" style="color: #212121">
                Vatron is a brand new VATSIM map client built on top of modern, cross-platform technologies. Vatron promises to be fast and lightweight, while packing some of the most advanced technologies current available. Vatron is written entirly in the language of the internet, meaning that it has one of the largest development communities making up each and every component.
              </p>
            </div>
            <div class="column is-3">
              <img src="resources/img/icon.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Contribute to Vatron
          </h1>
          <p class="subtitle is-4" style="margin-bottom: 0;">
            Vatron is totally free and open source, forever. Head over to <a href="https://github.com/andrewward2001/vatron">the GitHub repo</a> to contribute.
          </p>
          <a href="https://github.com/andrewward2001/vatron/tree/master/fir_data">Add new ATC data</a>
          <p class="title is-4" style="margin-top: 1rem; margin-bottom: 0">Don't know how to code?</p>
          <p>That's cool! Just open an <a href="https://github.com/andrewward2001/vatron/issues">issue</a> with your suggestions or bugs.</p>
        </div>
      </div>
    </section>
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Updated where it counts
          </h1>
          <p class="subtitle is-4">
            Vatron will always keep certain data up to date, like ATC coverage areas. Feature updates are not automatically downloaded, so you won't have to wait for updates when you just want to fly.
          </p>
          <p>Find all releases <a href="https://github.com/andrewward2001/vatron/releases">here</a>.</p>
          <p>Your version of Vatron can be found by clicking Vatron &rarr; About Vatron</p>
        </div>
      </div>
    </section>
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Vatron <i class="fa fa-heart" aria-hidden="true"></i> Everyone
          </h1>
          <p class="subtitle is-4">Vatron doesn't care if you use Windows or macOS.</p>
          <img src="resources/img/cross-platform.png" />
          <p class="subtitle is-6">Vatron can also be built for Linux</p>
        </div>
      </div>
    </section>
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Download Vatron 0.2.0</h1>
          <p class="subtitle is-6">Vatron is only compatible with 64-bit systems.</p>
          <div class="columns is-block is-flex-widescreen">
            <div class="column">
              <div class="card">
                <div class="card-content">
                  <p class="title">Windows</p>
                </div>
                <footer class="card-footer">
                  <a href="https://github.com/vatron/vatron/releases/download/0.2.0/Vatron.Setup.0.2.0.exe" target="_blank" class="card-footer-item">Squirrel Installer (recommended) (~88 MB)</a><br />
                  <a href="https://github.com/vatron/vatron/releases/download/0.2.0/VatronInstaller.0.2.0.exe" target="_blank" class="card-footer-item">Installer (~39 MB)</a>
                  <a href="https://github.com/vatron/vatron/releases/download/0.2.0/VatronPortable.0.2.0.exe" target="_blank" class="card-footer-item">Portable .exe (~39 MB)</a>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-content">
                  <p class="title">macOS</p>
                </div>
                <footer class="card-footer">
                  <a href="https://github.com/vatron/vatron/releases/download/0.2.0/Vatron-0.2.0.dmg" target="_blank" class="card-footer-item">DMG (recommended) (~54 MB)</a>
                  <a href="https://github.com/vatron/vatron/releases/download/0.2.0/Vatron-0.2.0-mac.zip" target="_blank" class="card-footer-item">zip (~50 MB)</a>
                </footer>
              </div>
            </div>
          </div>
          <p><a href="https://github.com/andrewward2001/vatron/compare/0.1.0...0.2.0">view the 0.2.0 changelog</a></p>
          <p><a href="https://github.com/andrewward2001/vatron/releases/tag/0.2.0">view the tag</a></p>
          <p class="title is-3" style="margin-top: 2rem">Vatron Development Releases</p>
          <article class="message is-danger">
            <div class="message-body">
              <p class="subtitle is-4">Before you start</p>
              <p>Make sure Vatron the latest version has successfully built on your platform.</p>
              <p>Windows: <a href="https://ci.appveyor.com/project/andrewward2001/vatron"><img src="https://ci.appveyor.com/api/projects/status/d1c359iufk1vi1sq?svg=true" /></a></p>
              <p>macOS: <a href="https://travis-ci.org/andrewward2001/vatron"><img src="https://travis-ci.org/andrewward2001/vatron.svg?branch=master" /></a></p>
            </div>
          </article>
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
        </div>
      </div>
    </section>
  </div>
</template>
