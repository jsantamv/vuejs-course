
<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div class="text-success fs-3 fw-bold"> 15 </div>
        <div class="mx-1 fs-3 "> Julio </div>
        <div class="mx-2 fs-4 fw-light"> 2021, Jueves </div>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            borrar
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h75">
        <textarea placeholder="What happens today?">

        </textarea>

    </div>

    <CustomFab />

    <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Tmurakam_-_IMG_1878_%28by%29.jpg" alt="entry-picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        CustomFab: defineAsyncComponent(() => import('../components/CustomFab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    background: lightblue;
    border-radius: 10px;

    &:foucus {
        outline: none;
    }

    &:focus {
        background: lightcyan;
    }
}

img{
    width: 200px;
    position:fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>