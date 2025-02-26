

<template>

  

  <UApp class="flex flex-col h-full w-full">
    <!-- Navbar no topo, 100% da largura -->
    <MenuNavbar class="w-full" />  

    <UCard class="h-full" style="padding: 0!Important;">
      <template #header>
         <!-- Container para as duas áreas (esquerda e direita) -->
        <div class="flex flex-row w-full" style="padding:0px!important"> 

          <!-- Área esquerda, largura máxima 30% -->
          <div class="w-50 max-w-[35%] flex-col border border-gray-300 rounded">   
            <!--
            <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
            -->
          <MenuLeft/>
          </div>
          <!-- Área direita, ocupa o espaço restante, centraliza o conteúdo -->
          <div class="flex-grow flex items-center justify-center flex-col border border-gray-300 rounded ml-2"> 
             <!-- Conteúdo principal das suas páginas -->
            <h1 class="text-2xl font-bold">Seu Conteúdo Aqui</h1>
            <br>
           
            <NuxtPage />  
          </div>
        </div>
      </template>

    </UCard>

    <div id="container-dad" class="flex flex-row flex-nowrap h-full w-full">
      
    </div>
  </UApp>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

// Route listener that tracks changes
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (oldPath) {
      localStorage.setItem('last-route', oldPath)
      console.log('Previous route:', oldPath)
      console.log('Current route:', newPath)
      localStorage.setItem('current-route', newPath)
    }
  }
)
const items = [
  { label: 'Item 1', to: '/item1' },
  { label: 'Item 2', to: '/item2' },
]
</script>

<style lang="scss" scoped>
/* Estilos adicionais, se necessário */

</style>