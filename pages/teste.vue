<template>
    <UApp class="flex flex-col h-full w-full">
       <!-- Navbar no topo, 100% da largura -->
       <h1 class="text-3xl font-bold underline">
       Hello world!
     </h1>



  <UBreadcrumb :items="bread" class="p-4  w-full; text-center" />


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
   const bread = ref([
  {
    label: 'Home',
    icon: 'i-lucide-house'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components'
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/components/breadcrumb'
  }
])

   </script>
   