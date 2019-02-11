<template>
    <div class="edit-smoothie container">
        <h2>Edit a smoothie {{ this.$route.params.smoothie_slug }}</h2>
    </div>
</template>

<script>
import database from '@/firebase/init';
export default {
    name: 'EditSmoothie',
    data(){
        return{

        }
    },
    created(){
        let ref = database.collection('smoothies').doc(id)
    }
}
</script>

<style>

</style>
