<script setup>
</script>


<template>
      <UCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="w-1/5"> {/* 20% width */}
          <Placeholder class="h-8" />
        </div>
        <div class="w-3/5 flex justify-center"> {/* 60% width, centered */}
          <Placeholder class="h-8" />
        </div>
        <div class="w-1/5 flex justify-end"> 
        <MenuButtonConfig/>
          <Placeholder class="h-8" />
        </div>
      </div>
    </template>
  </UCard>
</template>