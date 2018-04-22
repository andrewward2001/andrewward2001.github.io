<template>
  <div>
    <b-jumbotron header="Solutions for the Future." lead="Tomorrow is approaching. Be ready for it." bg-variant="dark" text-variant="light" fluid></b-jumbotron>
    <b-jumbotron header="About Me"
                 lead="My name is Andrew. I'm a 16 year old self-taught web developer. I specialize in CSS and PHP, and I'm the main web developer at Virtual United Social Club, Inc (see below). Back in June, I finished Advanced Placement Computer Science at my high school in the greater Boston area. I am currently enrolled in Honors Applied Computer Science, which focuses on applying skills learned in APCS to real-world problem solving in groups."
                 fluid>
      <b-row>
        <b-col md="1" offset-md="5" class="d-flex" style="justify-content: center">
          <a href="//github.com/andrewward2001">
            <img src="resources/img/github.png" alt="GitHub" height="50px" width="50px" />
          </a>
        </b-col>
        <b-col md="1" class="d-flex" style="justify-content: center">
          <a href="//gitlab.com/andrewward2001">
            <img src="resources/img/gitlab.png" alt="gitlab" height="50px" width="50px" />
          </a>
        </b-col>
      </b-row>
    </b-jumbotron>
    <b-jumbotron header="Portfolio" fluid>
      <b-card title="Virtual United Social Club, Inc." sub-title="June, 2016 - January, 2018">
        <p>I started working at Virtual United in June, 2016 as a front-end web developer. I was later promoted to Web Development Director and oversaw the creation of brand-new online systems, replacing an aging code base.</p>
        <a href="https://virtualua.org/"
           class="card-link">Visit</a>
      </b-card>
    </b-jumbotron>
    <b-jumbotron header="Projects" fluid>
      <b-card title="Vatron" sub-title="Primary Language: Node.js (Electron, ES6)">
        <p>Using the latest technologies from ES6, Vatron is a brand new lightweight and fast radar client for VATSIM based on GitHub's Electron.</p>
        <a href="#/vatron"
           class="card-link">Website</a>
        <a href="https://github.com/andrewward2001/vatron"
           class="card-link">GitHub Repository</a>
      </b-card>
      <b-card title="SQLEconomy" sub-title="Primary Language: Java">
        <p>A Bukkit economy plugin that stores data in an SQL database.</p>
        <a href="https://dev.bukkit.org/projects/sqleconomee"
           class="card-link">More</a>
        <a href="https://gitlab.com/andrewward2001/SQLEconomy"
           class="card-link">GitLab Repository</a>
      </b-card>
      <b-card title="Cards" sub-title="Primary Languages: CSS, jQuery">
        <p>Currently shelved, Cards is a CSS and JS framework for creating Material Design web pages.</p>
        <a href="https://github.com/andrewward2001/Cards"
           class="card-link">GitHub Repository</a>
      </b-card>
      <b-card title="Wayland Student Planner" sub-title="Primary Language: Node.js (Electron, ES6)">
        <p>A desktop application written in HTML, CSS, and JS using Electron. Provides a utility for students to keep track of their day.</p>
        <a href="https://github.com/andrewward2001/wayland-student-planner"
           class="card-link">GitHub Repository</a>
      </b-card>
    </b-jumbotron>
    <b-jumbotron header="My Skills" fluid>
      <h5>CSS, LESS, SCSS</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 90%"></div>
      </div>
      <h5>ES6, Node.js, jQuery</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 95%"></div>
      </div>
      <h5>Vue.js</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 75%"></div>
      </div>
      <h5>PHP</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 80%"></div>
      </div>
      <h5>Java</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 85%"></div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        portfolio: [{
          title: 'Virtual United Social Club, Inc.',
          description: 'I started working at Virtual United in June, 2016 as a front-end web developer, and I\'m currently the Web Development Manager.',
          links: [{
            title: 'Visit',
            a: 'https://virtualua.org/'
          }]
        }],
        projects: [{
          title: 'Vatron',
          priLang: 'Node.js (ES6)',
          languages: 'HTML 5, CSS 3, jQuery',
          description: 'Using the latest technologies from ES6, Vatron is a brand new lightweight and fast radar client for VATSIM based on GitHub\'s Electron.',
          links: [{
            title: 'Website',
            a: '#/vatron'
          }, {
            title: 'GitHub Repository',
            a: 'https://github.com/andrewward2001/vatron'
          }]
        }, {
          title: 'SQLEconomy',
          priLang: 'Java',
          description: 'A Bukkit economy plugin that stores data in an SQL database',
          links: [{
            title: 'More',
            a: 'https://dev.bukkit.org/projects/sqleconomee'
          }, {
            title: 'GitLab Repository',
            a: 'https://gitlab.com/andrewward2001/SQLEconomy'
          }]
        }, {
          title: 'Cards',
          priLang: 'CSS',
          languages: 'HTML, jQuery',
          description: 'Currently shelved, Cards is a CSS and JS framework for creating Material Design web pages.',
          links: [{
            title: 'GitHub Repository',
            a: 'https://github.com/andrewward2001/Cards'
          }]
        }, {
          title: 'Wayland Student Planner',
          priLang: 'Node.js (ES6)',
          languages: 'HTML5, CSS 3, jQuery',
          description: 'A desktop application written in HTML, CSS, and JS using Electron. Provides a utility for students to keep track of their day.',
          links: [{
            title: 'GitHub Repository',
            a: 'https://github.com/andrewward2001/wayland-student-planner'
          }]
        }]
      }
    }
  }
</script>

<style>
  .jumbotron {
    margin: 0;
  }

  .card {
    margin-bottom: 1rem;
  }
</style>
