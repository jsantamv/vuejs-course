<template>
    <div>
        <h1>Thanos to do List</h1>
        <!-- <h4>Tareas: {{ pending.length }}</h4>
        <h4>Todos: {{ all.length }}</h4>
        <h4>Completados: {{ completed.length }}</h4> -->
    </div>
    <hr>
    <div>
        <button @click="currentTab = 'all'" class="button-3" :class="{ 'active': currentTab === 'all' }">Todos: {{
            all.length
        }}</button>
        <button @click="currentTab = 'pending'" class="button-3"
            :class="{ 'active': currentTab === 'pending' }">Pendientes: {{ pending.length }}</button>
        <button @click="currentTab = 'completed'" class="button-3"
            :class="{ 'active': currentTab === 'completed' }">Completados: {{ completed.length }}</button>
    </div>
    <div>
        <ul>
            <li v-for="todo in getTodosbyTab" :key="todo.id" :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">{{ todo.text }}</li>
        </ul>
    </div>


</template>

<script>
import useTodos from '@/composables/useTodos';


export default {

    setup() {

        const { currentTab,
            all,
            pending,
            completed,
            getTodosbyTab,
            toggleTodo, } = useTodos()

        return {
            currentTab,
            all,
            pending,
            completed,
            getTodosbyTab,
            toggleTodo,
        }
    }
}
</script>

<style>
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