<template>
    <div>
        <h1>Thanos to do List</h1>
        <!-- <h4>Tareas: {{ pending.length }}</h4>
        <h4>Todos: {{ all.length }}</h4>
        <h4>Completados: {{ completed.length }}</h4> -->
    </div>
    <hr>
    <div>
        <button @click="currentTab = 'all'" class="button-3" :class="{ 'active': currentTab === 'all' }">To do: {{
            all.length
        }}</button>
        <button @click="currentTab = 'pending'" class="button-3"
            :class="{ 'active': currentTab === 'pending' }">Pending: {{ pending.length }}</button>
        <button @click="currentTab = 'completed'" class="button-3"
            :class="{ 'active': currentTab === 'completed' }">Completed: {{ completed.length }}</button>
    </div>
    <div>
        <ul>
            <li v-for="todo in getTodosbyTab" :key="todo.id" :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">{{ todo.text }}</li>
        </ul>
    </div>

    <button class="button-3" @click="openModal">+ Add Task</button>

    <!-- Modal -->
    <addTask v-if="isOpen" @on:close="closeModal" title="Creacion de tareas nuevas">

        <template v-slot:header>
            <h1>Nueva tarea</h1>
        </template>

        <template v-slot:body>
            <form @submit.prevent="createTodo(txtNewTodo); isOpen=false">
                <input type="text" placeholder="write new task" v-model="txtNewTodo"><br>
                <button class="button-3" type="submit">Crear</button>
            </form>
        </template>


    </addTask>
    <!-- Form -->

</template>

<script>
import useTodos from '@/composables/useTodos';
import addTask from '@/components/AddTask.vue'
import { ref } from 'vue';
import { isTemplateNode } from '@vue/compiler-core';


export default {
    components: { addTask, isTemplateNode },

    setup() {

        const { currentTab,
            all,
            pending,
            completed,
            getTodosbyTab,
            toggleTodo,
            createTodo
        } = useTodos()

        const isOpen = ref(false)

        return {
            currentTab,
            all,
            pending,
            completed,
            getTodosbyTab,
            toggleTodo,
            createTodo,

            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
            txtNewTodo: ref('')

        }
    }
}
</script>

<style scoped>
/* efectos sobre los imputs */
input[type="text"],
input[type="password"],
input[type="email"],
select {
    margin: 3px;
    border: 1px solid #c9c9c9;
    width: 300px;
    text-align: center;
    box-shadow: 0px 0px 2px #c9c9c9 inset;
    background: white;
    padding: 2px;
    padding-top: 4px;
    padding-bottom: 2px;
    color: #ec1010;
    transition: all 300ms;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
select:focus {
    border: 1px solid #c9c9c9;
    color: black !important;
}

/* efecto sobre los botones */
input[type="button"],
input[type="submit"],
input[type="reset"] button {
    margin: 3px;
    /* display: block; */
    border-radius: 2px;
    width: 60px;
    padding: 3px;
    background-color: #70b231;
    border: 1px solid green;
    cursor: pointer;
    color: white;
    align-items: center;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover button:hover {
    box-shadow: 0px 0px 4px gray;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active button:active {
    box-shadow: 0px 0px 6px gray inset;
    text-shadow: 0px 0px 3px #ccc;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

li:hover {
    color: #2ea44f;
}


button {
    margin: 2px;
}

.active {
    background-color: #045f1b !important;
    color: yellow !important;
}

.completed {
    text-decoration: line-through;
    color: blue;
}

/* CSS */
.button-3 {
    appearance: none;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
}

.button-3:hover {
    background-color: #2c974b !important;
}

.button-3:focus {
    box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
    outline: none;
}

.button-3:disabled {
    background-color: #94d3a2;
    border-color: rgba(27, 31, 35, .1);
    color: rgba(255, 255, 255, .8);
    cursor: default;
}

.button-3:active {
    background-color: #298e46 !important;
    box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>