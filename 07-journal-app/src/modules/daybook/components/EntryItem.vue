<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">

        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>

        <!-- Description -->
        <div class="entry-description">
            <p> Labore laboris mollit mollit nulla ullamco elit excepteur esse anim enim quis id est dolore.</p>
            <br>
            <p> Labore laboris mollit mollit nulla ullamco elit excepteur esse anim enim quis id est dolore.</p>
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #3c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;

    }

    .entry-description {}
}
</style>