import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from "../components/Main"
import ProjectMiniToDoList from "../components/project/mini/ToDoList"

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
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  }
})