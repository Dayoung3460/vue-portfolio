<template>
  <main class="site-main">
    <section class="site-banner" id="mainHome">
      <div class="container">
        <div class="row">
          <div class="col-md-12 site-title">
            <vue-typer class="title-text" :text="['Hi😁', 'Hello!']" erase-style='backspace'></vue-typer>
            <h1 class="title-text text-uppercase">
              <span>I</span>
              <span>'</span>
              <span class="char-text">m</span>
              <span>D</span>
              <span class="heart1">💗</span>
              <span>a</span>
              <span>y</span>
              <span>o</span>
              <span class="heart2">💜</span>
              <span>u</span>
              <span>n</span>
              <span>g</span>
              <span>,</span>
            </h1>
            <h4 class="text-uppercase">Software developer</h4>
            <h5>{{ $t('message.introduce') }}</h5>
            <div class="site-buttons">
              <div class="d-flex flex-row flex-wrap">
                <button type="button" class="btn button primary-button" @click="openCV()">{{ $t('message.cv') }}</button>
                <div class="cv" :class="{ active: openCVBox }" v-show="openCVBox">
                  <div class="animate cvDiv">
                    <a class="close" @click="openCVBox = false">x</a>
                    <a href="/doc/이력서_김다영(프론트앤드).pdf" class="download" download v-show="isKorCV">Download</a>
                    <a href="/doc/CV_Dayoung_Kim(Front-end).pdf" class="download" download v-show="!isKorCV">Download</a>
                    <img src="img/CV.jpeg" alt="CV(KOR)" v-show="isKorCV"/>
                    <img src="img/CV(eng).PNG" alt="CV(ENG)" v-show="!isKorCV"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutMe-area" id="aboutMe">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="aboutMe-image d-flex justify-content-center">
              <img src="img/cactus.png" alt="About us" class="img-fluid">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 aboutMe-title">
            <h2 class="text-uppercase pt-5">
              <span>about</span>
              <span>me</span>
            </h2>
            <div class="paragraph">
              <p class="para" v-html="$t('message.aboutMe1')"></p>
              <p class="para" v-html="$t('message.aboutMe2')"></p>
              <p class="para" v-html="$t('message.aboutMe3')"></p>
            </div>
            <!-- <button type="button" class="btn button primary-button text-uppercase">Download CV</button> -->
          </div>
        </div>
      </div>
    </section>
    <section class="brand-area" id="smallProject">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-h1">Nature Blend</h1>
            <p class="para">An MES (Manufacturing Execution System) program designed for a fruit juice🧃 factory</p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="single-brand col-md-3">
            <a href="http://43.201.26.255:3000/" target="_blank" class="circle-wrap">
              <img src="img/natureblend-screenshot.png" alt="screenshot"/>
              <span class="title">Nature Blend</span>
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-h1">Vue.js Project</h1>
            <p class="para"></p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="single-brand col-md-3">
            <router-link :to="{ name: 'ProjectMiniToDoList' }" class="circle-wrap">
              <img src="img/to-do-list-screenshot.png"/>
              <span class="title">To-do list</span>
            </router-link>
          </div>
          <div class="single-brand col-md-3">
            <router-link :to="{ name: 'ProjectMiniShoppingMain' }" class="circle-wrap">
              <img src="img/shopping-website-screenshot.png"/>
              <span class="title">Shopping website</span>
            </router-link>
          </div>
          <div class="single-brand col-md-3">
            <router-link :to="{ name: 'ProjectMiniClock' }" class="circle-wrap">
              <img src="img/analog-clock-screenshot.png"/>
              <span class="title">Analog clock</span>
            </router-link>
          </div>
          <div class="single-brand col-md-3">
            <router-link :to="{ name: 'ProjectMiniJumpingGameStart' }" class="circle-wrap">
              <img src="img/jumping-game-screenshot.png"/>
              <span class="title">Jumping game</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-h1">react.js Project</h1>
            <p class="para"></p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="single-brand col-md-3">
            <a href="https://dayounghabittracker.netlify.app/" target="_blank" class="circle-wrap">
              <img src="img/habit-tracker-screenshot.png"/>
              <span class="title">Habit tracker</span>
            </a>
          </div>
          <div class="single-brand col-md-3">
            <a href="https://make-business-card.netlify.app" target="_blank" class="circle-wrap">
              <img src="img/business-card-maker-screenshot.png"/>
              <span class="title">Business card maker</span>
            </a>
          </div>
          <div class="single-brand col-md-3">
            <a href="https://youtube-dayoung.netlify.app" target="_blank" class="circle-wrap">
              <img src="img/youtube-screenshot.png"/>
              <span class="title">Youtube</span>
            </a>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-h1">Vanilla js Project</h1>
            <p class="para"></p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="single-brand col-md-3">
            <a href="https://vanilla-find-a-match.netlify.app/" target="_blank" class="circle-wrap">
              <img src="img/find-a-match-screenshot.png"/>
              <span class="title">Find a match</span>
            </a>
          </div>
        </div>
      </div>

    </section>
<!--    <section class="services-area">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12 text-center services-title">-->
<!--            <h1 class="text-uppercase title-h1">Portfolio</h1>-->
<!--            <p class="para">-->
<!--              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum ratione, sapiente assumenda nostrum voluptates, hic recusandae porro saepe deserunt quos animi earum harum debitis, obcaecati asperiores vitae excepturi explicabo.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="container services-list">-->
<!--          <div class="row">-->
<!--            <div class="col-lg-3 col-md-6 col-sm-12">-->
<!--              <div class="services">-->
<!--                <div class="services-img text-center py-4">-->
<!--                  <img src="img/magic.svg" alt="services1">-->
<!--                </div>-->
<!--                <div class="card-body text-center">-->
<!--                  <h5 class="card-title text-uppercase font-roboto">PHP Website</h5>-->
<!--                  <p class="card-text text-secondary">-->
<!--                    <button type="button" class="btn btn-default">-->
<!--                      <a href="./php_website/index.php" target="_blank">Go to the Website</a>-->
<!--                    </button>-->
<!--                    Simple and clean table board PHP website that completed with HTML, CSS, Javascript and PHP, MySQL backend database. Displayed a large image in the background and clear buttons. The primary functions are signup, login, logout, setting user profile image and CRUD.-->

<!--                  </p>-->

<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-lg-3 col-md-6 col-sm-12">-->
<!--              <div class="services">-->
<!--                <div class="services-img text-center py-4">-->
<!--                  <img src="img/playground.svg" alt="services2">-->
<!--                </div>-->
<!--                <div class="card-body text-center">-->
<!--                  <h5 class="card-title text-uppercase font-roboto">Wp developer</h5>-->
<!--                  <p-->
<!--                      class="card-text text-secondary">-->
<!--                    &lt;!&ndash; <button type="button" class="btn btn-default">-->
<!--                                                                                                                                                                                                                                                                                                                                            <a href="" target="_blank">Go to the Website</a>-->
<!--                                                                                                                                                                                                                                                                                                                                        </button> &ndash;&gt;-->
<!--                    Lorem ipsum dolosdf gsdfgsfg ggggg ggggg ggggg ggggg gggg gggggg gggggg ggggg gggg gggggg ggggggr sit amet consectet lorea Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                velit quaerat dicta quasi, numquam a-->

<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-lg-3 col-md-6 col-sm-12">-->
<!--              <div class="services">-->
<!--                <div class="services-img text-center py-4">-->
<!--                  <img src="img/ice-cream.svg" alt="services3">-->
<!--                </div>-->
<!--                <div class="card-body text-center">-->
<!--                  <h5 class="card-title text-uppercase font-roboto">Wp developer</h5>-->
<!--                  <p-->
<!--                      class="card-text text-secondary">-->
<!--                    &lt;!&ndash; <button type="button" class="btn btn-default">-->
<!--                                                                                                                                                                                                                                                                                                                                            <a href="" target="_blank">Go to the Website</a>-->
<!--                                                                                                                                                                                                                                                                                                                                        </button> &ndash;&gt;-->
<!--                    Lorem ipsum dolor sit amet consectet lorea Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,-->

<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-lg-3 col-md-6 col-sm-12">-->
<!--              <div class="services">-->
<!--                <div class="services-img text-center py-4">-->
<!--                  <img src="img/amusement-park.svg" alt="services4">-->
<!--                </div>-->
<!--                <div class="card-body text-center">-->
<!--                  <h5 class="card-title text-uppercase font-roboto">Wp developer</h5>-->
<!--                  <p-->
<!--                      class="card-text text-secondary">-->
<!--                    &lt;!&ndash; <button type="button" class="btn btn-default">-->
<!--                                                                                                                                                                                                                                                                                                                                            <a href="" target="_blank">Go to the Website</a>-->
<!--                                                                                                                                                                                                                                                                                                                                        </button> &ndash;&gt;-->
<!--                    Lorem ipsum dolor sit amet consectet lorea Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,-->

<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <!-- <div class="project-area">
                                                                                <div class="container">
                                                                                    <div class="project-title pb-5">
                                                                                        <h1 class="text-uppercase title-h1">Recently Done Project</h1>
                                                                                        <h1 class="text-uppercase title-h1">Quality Work</h1>
                                                                                    </div>

                                                                                    <div class="button-group">
                                                                                        <button type="button" class="active" " id=" btn1" data-filter=" *">All</button>
                                                                                        <button type="button" data-filter=".popular">Popular</button>
                                                                                        <button type="button" data-filter=".latest">Latest</button>
                                                                                        <button type="button" data-filter=".following">Following</button>
                                                                                        <button type="button" data-filter=".upcoming">Upcoming</button>
                                                                                    </div>

                                                                                    <div class="row grid">
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj1.jpg">
                                                                                                        <img src="./Img/pj1.jpg" alt="portfolio-1">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Latest, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj2.jpg">
                                                                                                        <img src="./Img/pj2.jpg" alt="portfolio-2">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Popular, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj3.jpg">
                                                                                                        <img src="./Img/pj3.jpg" alt="portfolio-3">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Popular, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj4.jpg">
                                                                                                        <img src="./Img/pj4.jpg" alt="portfolio-4">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Upcoming, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj5.jpg">
                                                                                                        <img src="./Img/pj5.jpg" alt="portfolio-5">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Upcoming, Portfolio</span>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj6.jpg">
                                                                                                        <img src="./Img/pj6.jpg" alt="portfolio-6">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Following, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj7.jpg">
                                                                                                        <img src="./Img/pj7.jpg" alt="portfolio-7">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Following, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj8.jpg">
                                                                                                        <img src="./Img/pj8.jpg" alt="portfolio-8">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Following, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                                                                                            <div class="our-project">
                                                                                                <div class="img">
                                                                                                    <a class="test-popup-link" href="./Img/pj9.jpg">
                                                                                                        <img src="./Img/pj9.jpg" alt="portfolio-9">
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="title py-4">
                                                                                                    <h4 class="text-uppercase">photography</h4>
                                                                                                    <span class="text-secondary">Upcoming, Portfolio</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div> -->
    <!-- <section class="about-area"> <div class="container">
                                                            <div class="row text-center">
                                                                <div class="col-12">
                                                                    <div class="about-title">
                                                                        <h1 class="text-uppercase title-h1">Client say about me</h1>
                                                                        <p class="para">
                                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere in ullam velit, alias expedita architecto hic. Voluptates modi, beatae quidem nulla tenetur doloribus fugit pariatur eaque temporibus voluptate facere.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="container carousel py-lg-5">
                                                            <div class="owl-carousel owl-theme">
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert1.jfif" alt="img1" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Clara</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus, praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert2.jfif" alt="img2" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Amy</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert3.jfif" alt="img3" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Dana</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert4.jfif" alt="img4" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Gina</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert5.jfif" alt="img5" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Jessica</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                                <div class="client row">
                                                                    <div class="col-lg-4 col-md-12 client-img">
                                                                        <img src="./Img/expert6.jfif" alt="img6" class="img-fluid">
                                                                    </div>
                                                                    <div class="col-lg-8 col-md-12 about-client">
                                                                        <h4 class="text-uppercase">Lisa</h4>
                                                                        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab incidunt architecto doloribus,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    praesentium tenetur!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section> -->
    <section class="contact-area" id="contact">
      <div class="container contact">
      <div class="col-lg-12 text-center contact-title">
        <h4 class="text-uppercase">Get In Touch</h4>
        <p>
          <a href="mailto: kimdayoung771@gmail.com">kimdayoung771@gmail.com</a>
        </p>
      </div>
<!--      <div class="social text-center">-->
<!--        <a href="https://www.linkedin.com/in/dayoung-clara-kim-5b2b0b140" target="_blank">-->
<!--          <i class="fab fa-linkedin"></i>-->
<!--        </a>-->
<!--        <a href="https://github.com/Dayoung3460/vue-portfolio.git" target="_blank">-->
<!--          <i class="fab fa-github-square"></i>-->
<!--        </a>-->
<!--      </div>-->
    </div>
    </section>
  </main>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: "VueMain",

  data() {
    return {
      openCVBox: false,
      isKorCV: false,
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
    }
  },

  components: {
    'vue-typer': VueTyper
  },

  methods: {
    openCV() {
      this.openCVBox = true
      if(this.$root.$i18n.locale === 'ko') {
        this.isKorCV = true
      } else {
        this.isKorCV = false
      }
    }
  }
}
</script>

<style scoped>


</style>