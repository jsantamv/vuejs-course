<template>
    <h2 v-if="isLoading">Espere pro favor...</h2>
    <h2 v-else>Listado de usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <table id="customers">
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
            <tr v-for="{ first_name, last_name, email, id } in users" :key="id">
                <td>{{ first_name }} {{ last_name }}</td>
                <td>{{ email }}</td>
            </tr>
        </table>
    </div>

    <button @click="prevPage">atras </button>
    <button @click="nextPage">siguiente</button>

    <span v-if="users.length">pagina {{ currentPage }} de {{ total_pages }}</span>


</template>

<script>

import useUsers from '@/composables/useUsers'
import { onBeforeMount } from 'vue'

export default {
    setup() {

        const {
            currentPage,
            errorMessage,
            isLoading,
            total_pages,
            users,   

            nextPage,
            prevPage,
        } = useUsers()

        return {
            isLoading,
            errorMessage,
            users,
            currentPage,
            total_pages,

            nextPage,
            prevPage
        }

        //podemos desesctructura
        // return {
        //     ...useUsers()
        // }

    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

button {
    background-color: #4CAF50;
    /* Green */
    margin: 10px;
    border: 3px solid #004603;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: 300ms all;
}


button:hover {
    background-color: #468849;
    /* Green */
}

button:active {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #83e701;
    /* Green */
}

#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
</style>