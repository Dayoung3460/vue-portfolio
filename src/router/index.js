import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from "../components/Main"
import ProjectMiniToDoList from "../components/project/mini/todolist/ToDoList"
import ProjectMiniShoppingMain from "../components/project/mini/shopping/Main"
import ProjectMiniShoppingCart from "../components/project/mini/shopping/Cart"
import ProjectMiniClock from "../components/project/mini/clock/clock"
import ProjectMiniJumpingGame from "../components/project/mini/jumpingGame/JumpingGame"

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Main',
      component: Main
    },
    {
      path:'/project/mini/todolist',
      name: 'ProjectMiniToDoList',
      component: ProjectMiniToDoList
    },
    {
      path:'/project/mini/shopping/main',
      name: 'ProjectMiniShoppingMain',
      component: ProjectMiniShoppingMain
    },
    {
      path:'/project/mini/shopping/cart',
      name: 'ProjectMiniShoppingCart',
      component: ProjectMiniShoppingCart
    },
    {
      path:'/project/mini/clock',
      name: 'ProjectMiniClock',
      component: ProjectMiniClock
    },
    {
      path:'/project/mini/jumpinggame',
      name: 'ProjectMiniJumpingGame',
      component: ProjectMiniJumpingGame
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  }
})