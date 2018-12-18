<template>
  <div class="bg">
    <a id="about"></a>
    <div class="row" id="main-content">
      <div class="side-nav col col-md-3 col-lg-2 mt-3">
        <ul class="nav flex-column">
          <li class="nav-item"><a href="#about" class="nav-link">About Me</a></li>
          <li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio</a></li>
          <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
        </ul>
      </div>
      <div class="content col-sm-12 col-md-9 col-lg-10 ml-sm-auto">
        <div class="row mb-0">
          <div class="col">
            <div class="row">
              <div class="col-lg-3">
                <div class="card">
                  <div class="card-img-top" style="height: 100px; width: 100%; display: block; background-image: linear-gradient(45deg, #41f4d0 25%, #28a2ff);"></div>
                  <div class="card-body text-center">
                    <img class="profile-picture" src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" alt="">
                    <h5 class="card-title mt-3">Andrew Ward</h5>
                    <div class="d-flex justify-content-center">
                      <a href="//github.com/andrewward2001" class="mr-3"><img src="resources/img/github.png" alt="GitHub" height="30px" width="30px"></a>
                      <a href="//gitlab.com/andrewward2001"><img src="resources/img/gitlab.png" alt="GitLab" height="30px" width="30px"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <card title="About me">
                  <p>
                    My name is Andrew. I'm a 17 year old self-taught web developer.
                    I specialize in CSS and JS, and I'm getting the hang of Vue and React.
                    I have 3 years of Computer Science classes from my greater Boston area high school.
                  </p>
                </card>
              </div>
            </div>
            <a id="portfolio"></a>
            <h3 class="display-3 mb-4">portfolio</h3>
            <card title="WayTab" overline="May 2018 - present" subtitle="Lead Developer">
              <p>
                WayTab is a browser extension for Google Chrome. It replaces Chrome's default New Tab page with one that's more useful for students.
                WayTab helps students keep track of their schedules, assignments, and important websites.
                WayTab utilizes a combination of HTML, CSS, and JavaScript. WayTab also uses Bootstrap as a framework.
              </p>
            </card>
            <card title="Virtual United Social Club, Inc." overline="June 2016 - Junuary 2018 · 1 yr, 8 mos." subtitle="Web Development Manager">
              <p>
                I started working at Virtual United in June, 2016 as a front-end web developer.
                I was later promoted to Web Development Director and oversaw the creation of brand-new online systems, replacing an aging code base.
              </p>
            </card>
            <a id="projects"></a>
            <h3 class="display-3 mb-4">projects</h3>
            <div class="row mb-0">
              <div class="col-md">
                <card title="WayTab" subtitle="Languages used: HTML, CSS, jQuery · Framework: Bootstrap">
                  <p class="card-text">
                    WayTab is a new tab page for Chrome, oriented for students.
                    WayTab makes it easier for students to keep track of their day and assignments.
                  </p>
                  <a href="//waytab.org" class="">Website</a>
                  <a href="//github.com/waytab/" class="">GitHub</a>
                </card>
                <card title="SQLEconomy" subtitle="Languages used: Java">
                  <p>
                    A plugin for Minecraft servers that stores data in an SQL Database.
                  </p>
                  <a href="//dev.bukkit.org/projects/sqleconomee" class="">More</a>
                  <a href="//gitlab.com/andrewward2001/SQLEconomy" class="">GitLab</a>
                </card>
              </div>
              <div class="col-md">
                <card title="Vatron" subtitle="Languages used: Node.js (Electron, ES6), CSS, jQuery">
                  <p>
                    Using the latest technologies from ES6, Vatron is a brand new lightweight and fast radar client for VATSIM based on GitHub's Electron.
                  </p>
                  <a href="/vatron" class="">Website</a>
                  <a href="//github.com/andrewward2001/vatron" class="">GitHub</a>
                </card>
                <card title="Cards" subtitle="Languages used: CSS, jQuery" overline="shelved">
                  <p>
                    Cards is a CSS and JS framework for creating Material Design web pages.
                  </p>
                  <a href="//github.com/andrewward2001/Cards" class="">GitHub</a>
                </card>
              </div>
            </div>
          </div>
          <div class="col-xl-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style>
.bg {
  background: fixed linear-gradient(65deg, #263238, #607D8B 25%);
  width: 100%;
}

#main-content {
  z-index: 100;
}

.bg>.row {
  margin: 0;
}

.content {
  padding: 1rem;
  background-color: white;
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0,0,0,.1);
  box-shadow: 0px 1px 35px 0px rgba(0,0,0,.1);
}

.side-nav {
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  position: fixed;
  top: 0;
}

.nav-link {
  color: rgba(255, 255, 255, 0.75);
}
.nav-link:hover {
  transition: color .35s;
  color: rgba(255, 255, 255, 1);
}

.nav-item:hover {
  transition: background-color .35s;
  background-color: rgba(255,255,255,0.15);
  border-radius: 2px;
}

.profile-picture {
  display: block;
  border-radius: 50%;
  border: 3px solid white;
  width: 100px;
  height: auto;
  margin: -70px auto 0;
}

.row {
  margin-bottom: 2rem;
}

</style>
