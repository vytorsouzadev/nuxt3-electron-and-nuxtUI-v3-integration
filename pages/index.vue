import { default } from '../.nuxt/ui/container';
<template>
    <div>
        <Navbar />
        <div class="content">
            <h1>Welcome to Electron + Nuxt3</h1>
            <p>Choose an option from the navigation bar above</p>
        </div>
        <hr>
        <UProgress class="my-2" v-model="value" />
        <hr>
        <div class="my-5 p-5">
            <UButton  label="Show toast" color="primary" variant="" @click="showToast" />
        </div>
    </div>
</template>

<script setup>


const route = useRoute();
const value = ref(null)
    useHead({
        title: 'Electron AND Nuxt3 + NUXT UI V3'+route.params.name,
        meta: [
            { name: 'description', content: 'Electron + Nuxt3' },
        ] 
    })

    //props composition api vue3 const title
// Definindo as props
const color = ref('color');
const toast = useToast();

function showToast() {
    console.log('chamou a funçao toast');
    
    toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: 'i-lucide-wifi',
    color: color.value,
  })
}


</script>

<style scoped>
.content {
    padding: 20px;
}
</style>