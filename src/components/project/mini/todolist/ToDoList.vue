<template>
  <div class="to-do-list">
    <div class="cover">
      <div class="title" style="background: url(img/office.png)">
        <h3>Work</h3>
        <div class="select">
          <select name="todos" class="filter-todo" v-model="filtered">
            <option value="0">Todos</option>
            <option value="1">Checked</option>
            <option value="2">Trash</option>
          </select>
        </div>
        <button class="removeAll" @click="removeAll">remove all</button>
      </div>
    </div>
    <div class="content">
      <form class="add">
        <div>
          <input type="text" placeholder="Make yourself busy!" class="input" autofocus v-model="todo"/>
          <span class="add-btn point" @click="addTodo">
            <a class="plusBtn">
              <i class="fas fa-plus"></i>
            </a>
          </span>
        </div>
      </form>
      <ul class="lists">
        <li class="list"
            v-show="(filtered === '0' && todoItem.status === '0') ||
                    (filtered === '1' && todoItem.status === '1') ||
                    (filtered === '2' && todoItem.status === '2')"
            v-for="todoItem in todos"
            :key="todoItem.idx"
            :class="{ slideRemove: todoItem.status === '2' }"
        >
          <input type="checkbox" class="chkbox"/>
          <label class="todo-item">{{ todoItem.todo }}</label>
          <button class="completed" v-show="todoItem.status !== '1'" @click="changeTodoStatus('1', todoItem.idx)"><i class="fas fa-check-circle"></i></button>
          <button class="trash" v-show="todoItem.status !== '2'" @click="changeTodoStatus('2', todoItem.idx)"><i class="fas fa-trash-alt"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectMiniToDoList",

  data() {
    return {
      todo: '',
      todos: [],
      idx: 0,
      filtered: '0',
    }
  },

  created () {
    let todos = localStorage.getItem('todos')
    if(!todos){
      return
    }
    this.todos = JSON.parse(todos)
    this.idx = this.todos[this.todos.length - 1].idx + 1
  },

  methods: {
    removeAll() {
      localStorage.removeItem('todos')
      this.notify('success', '모두 삭제되었습니다.')
      this.todos = []
    },

    changeTodoStatus(status, todoIdx) {
      this.todos.forEach(async (todo) => {
        if(todo.idx === todoIdx) {
          if(status === '1') {
            todo.status = '1'
          } else if(status === '2'){
            todo.status = '2'
          }

          await localStorage.setItem('todos', JSON.stringify(this.todos))
          if(!this.todos.length) {
            await localStorage.removeItem('todos')
          }
        }
      })
    },

    addTodo() {
      if(!this.todo) {
        this.notify('error', '할 일을 적어주세요!')
        return
      }

      if(!localStorage.getItem('todos')) {
        this.todos.push({ todo: this.todo, idx: this.idx, status: '0' })
        localStorage.setItem('todos', JSON.stringify(this.todos))
      } else {
        let lastTodos = JSON.parse(localStorage.getItem('todos'))
        lastTodos.push({ todo: this.todo, idx: this.idx, status: '0' })
        this.todos = lastTodos
        localStorage.setItem('todos', JSON.stringify(lastTodos))
      }
      this.idx += 1
      this.todo = ''
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lemonada:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap");

.to-do-list {
  width: 30%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 15px 15px 12px rgba(52, 19, 1, 0.3);
  margin: 5rem auto;
  min-width: 352px;
}

.cover .title {
  height: 200px;
  background-size: cover !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  text-shadow: 10px 10px #520d63;
  position: relative;
  text-align: center;
}

.title .select {
  /*font-family: sans-serif !important;*/
}

.cover .title h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 900;
}

.content {
  height: 300px;
  padding: 30px;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-color);
}

.content form {
  display: flex;
  justify-content: center;
  margin: 0px 0px 25px 0;
  font-size: 2rem;
  width: 100%;
}

.content form input {
  border-style: none;
  border-bottom: 1px solid #520d63;
  width: 300px;
  outline: none;
}

.content form .add-btn {
  float: right;
}

.content form .add-btn a {
  color: inherit;
}

.content form > * {
  border: none;
  height: 40px;
  width: 100%;
}

.content input[type="text"] {
  padding: 5px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #520d63;
  width: 90%;
}

.content input::placeholder {
  color: var(--c, #f1e2f3);
}

.content .lists {
  padding-left: 0;
  padding-right: 10px;
  overflow: auto;
  height: 11em;
}

.content .lists li {
  padding: 3px;
}

.content .lists li button {
  float: right;
  cursor: pointer;
  margin-left: 0.7em;
  padding: 0;
  border: none;
  background: none;
  font-size: 1.1rem;
  outline: none;
}

.content .lists li .trash:hover {
  color: red;
}

.content .lists li .completed:hover {
  color: green;
}

.content ul {
  list-style-type: none;
}

.content ul label {
  cursor: pointer;
  border-radius: 5px;
  padding: 0 5px;
}

.content input[type="checkbox"] + label:hover {
  background-color: #f7f1f8;
}

.content input[type="checkbox"]:checked + label {
  color: rgb(180, 176, 201);
  text-decoration: line-through;
}

.content input[type="checkbox"] {
  position: relative;
  top: 0;
  width: 20px;
  height: 20px;
  appearance: none;
  outline: none;
  transition: 0.3s;
  border-radius: 5px;
  margin-right: 0.5em;
}

.content input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  transition: 0.3s;
}

.content input:checked[type="checkbox"]::before {
  border-left: none;
  border-top: none;
  width: 13px;
  height: 20px;
  border-color: rgb(149, 23, 199);
  transform: rotate(45deg) translate(0px, -5px);
}

.fa-trash-alt,
.fa-check-circle {
  pointer-events: none;
}

.slideRemove {
  transform: translateY(1rem);
  /*opacity: 0;*/
}

.slideCompleted {
  transform: translateX(15rem);
  /*opacity: 0;*/
}

.list {
  transition: all 0.3s ease;
}

.todo-item {
  display: inline-block;
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.todo-item:hover {
  text-overflow: clip;
  white-space: normal;
  word-break: break-all;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  width: 4.5rem;
  cursor: pointer;
  padding: 0.2em;
  line-height: initial;
}

.select {
  position: relative;
  display: flex;
  float: right;
  top: 80%;
  margin: 5px;
  overflow: hidden;
}

.select::after {
  content: "\25BC";
  background-color: blueviolet;
  padding: 0.2em;
  font-size: 0.8rem;
}

.select:hover::after {
  background-color: black;
  color: blueviolet;
}

.title .removeAll {
  display: flex;
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
  background: #612486;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.07em;
  font-weight: 600;
  padding: 0.3em 0.5em;
  border-radius: 5em;
  border: none;
}

.title .removeAll:hover {
  background-color: ivory;
  color: #612486;
}

.title .removeAll:focus {
  outline: none;
}

.title .github a {
  font-size: 1.5rem;
  color: #612486;
}

.title .github a:hover {
  color: #fff;
}

.title .github button {
  background-color: transparent;
  border: none;
}

</style>