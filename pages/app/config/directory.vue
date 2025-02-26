<template>
  <UModal v-model:open="open" 
  :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  title="Modal with close button" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
  <template #body>
      <div class="border border-gray-300 rounded p-4">
        <h1>aqui o seu conteudo</h1>
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { useRouter} from 'vue-router';

const open = ref(true);
const router = useRouter();
//pega do localstorage "last-route"
// Use ref para lastRoute para que seja reativo.
const lastRoute = ref(localStorage.getItem('last-route') || null);  // Inicializa com o valor do localStorage OU null



// Observa a mudança na propriedade 'open' do modal
watch(open, (newVal) => {
  if (!newVal) { // Quando o modal fechar
    //alert('Modal fechado');
    //alert(lastRoute.value);
    if (lastRoute?.value) {
        router.push(lastRoute.value); // Volta para a rota anterior armazenada
        console.log('vou voltar para a rota anterior: ', lastRoute.value);
        
    } else {
      // Se não houver rota anterior (ex: acesso direto à página do modal),  vai para a raiz.
      router.push('/');  // Ou qualquer outra rota padrão que você desejar.
    }
  }
});

</script>