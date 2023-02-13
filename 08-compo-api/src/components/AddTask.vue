<template>
    <!-- self es que no va permitir que en sus nodos hijos tenga efectos
        como en este caso para el evento clic    -->
    <div class="modal-background fade-in" @click.self="$emit('on:close')">
        <div class="modal-container">
            <form>
                <label for="fname">Add:</label><br>
                <input type="text" id="fname" name="fname" placeholder="write new task"><br>

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['on:close'],
    props: {
        title: {
            type: String,
            require: true
        }
    },
    setup(props, context) {
        const { otherTitle } = context.attrs
        console.log({ props, context, otherTitle });

        // return {
        //     newTitle: props.title?.toUpperCase()
        // }
    }

}
</script>

<style scoped>

form {
    margin: 30px;
}

/* efectos sobre los imputs */
input[type="text"],
input[type="password"],
input[type="email"],
select {
    margin: 3px;
    border: 1px solid #c9c9c9;
    width: 300px;
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

/* efectos sobre los modales */
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 350px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>