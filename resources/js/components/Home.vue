<template>
  <div>
    <section class="hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Solutions for the Future.
          </h1>
          <h2 class="subtitle">
            Tomorrow is approaching. Be ready for it.
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <p class="title is-1" style="margin-top: 2rem">About me</p>
      <p>My name is Andrew. I'm a 16 year old self-taught web developer. I specialize in CSS and PHP, and I'm the main web developer at Virtual United Social Club, Inc (see below). Back in June, I finished Advanced Placement Computer Science at my high school in the greater Boston area. I am currently enrolled in Honors Applied Computer Science, which focuses on applying skills learned in APCS to real-world problem solving in groups.</p>
      <div class="columns" style="padding-top: 1rem">
        <div class="column is-1 is-offset-5 is-flex" style="justify-content: center">
          <a href="//github.com/andrewward2001">
            <img src="resources/img/github.png" alt="GitHub" height="50px" width="50px" />
          </a>
        </div>
        <div class="column is-1 is-flex" style="justify-content: center">
          <a href="//gitlab.com/andrewward2001">
            <img src="resources/img/gitlab.png" alt="gitlab" height="50px" width="50px" />
          </a>
        </div>
      </div>

      <p class="title is-1">Portfolio</p>
      <div class="card" v-for="item in portfolio">
        <div class="card-content">
          <p class="title">{{item.title}}</p>
          <p class="subtitle" v-if="item.language">Primary Language: {{item.language}}</p>
          <p>{{item.description}}</p>
        </div>
        <footer class="card-footer" v-if="item.links">
          <a v-for="link in item.links" :href="link.a" class="card-footer-item">{{link.title}}</a>
        </footer>
      </div>

      <p class="title is-1" style="margin-top: 2rem">Projects</p>
      <div class="card" v-for="item in projects">
        <div class="card-content">
          <p class="title">{{item.title}}</p>
          <p class="subtitle is-4" style="margin-bottom: 0" v-if="item.priLang">Primary Language: {{item.priLang}}</p>
          <p class="subtitle is-6" v-if="item.languages">Other Languages: {{item.languages}}</p>
          <p>{{item.description}}</p>
        </div>
        <footer class="card-footer" v-if="item.links">
          <a v-for="link in item.links" :href="link.a" class="card-footer-item">{{link.title}}</a>
        </footer>
      </div>

      <p class="title is-1" style="margin-top: 2rem">My Skills</p>
      <p class="title">CSS / LESS</p>
      <progress class="progress is-primary" value="90" max="100">80%</progress>
      <p class="title">ES6, Node.js, jQuery</p>
      <progress class="progress is-primary" value="95" max="100">85%</progress>
      <p class="title">Vue.js</p>
      <progress class="progress is-primary" value="75" max="100">65%</progress>
      <p class="title">PHP</p>
      <progress class="progress is-primary" value="80" max="100">75%</progress>
      <p class="title">Java</p>
      <progress class="progress is-primary" value="85" max="100">60%</progress>
    </div>
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
  .card {
    margin-bottom: 1rem;
  }
</style>
