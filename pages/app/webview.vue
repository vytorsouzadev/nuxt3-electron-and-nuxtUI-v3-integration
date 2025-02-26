<template>

  <div class="webview-container">
    <UCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="w-1/5"> 
        <!-- {/* 20% width */} -->
        <UButton  @click="goBack" class="mx-1" color="neutral" trailing-icon="i-lucide-arrow-left" size="md"></UButton>
        <UButton @click="goForward" color="neutral" trailing-icon="i-lucide-arrow-right" size="md"></UButton>

          <Placeholder class="h-8" />
        </div>
        <div class="w-3/5 flex justify-center"> 
        <!-- {/* 60% width, centered */} -->
        <UInput
            v-model="websiteUrl"
            class="w-100"
            placeholder="url do site..."
            :ui="{ trailing: 'pe-1' }"
            @keyup.enter="loadWebsite"  
          >
            <template v-if="value?.length" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                icon="i-lucide-circle-x"
                aria-label="Clear input"
                @click="value = ''"
              />
            </template>
          </UInput>
          <Placeholder class="h-8" />
          <br>
          {{ websiteUrl  }}
        </div>
        <div class="w-1/5 flex justify-end"> 
        <MenuButtonConfig/>
          <Placeholder class="h-8" />
        </div>
      </div>
    </template>
  </UCard>
  <!-- webview -->
  <!-- allowpopups -->
    <component
      :is="'webview'"
      ref="webview"
      :src="websiteUrl"
      class="webview-frame"
      allowpopups=false
      nodeintegration="false"
      preload="./preload.js"
    />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'


// Initial website URL
const websiteUrl = ref('https://www.google.com')
const inputURL = ref('')
const webview = ref(null)
  // Initialize webview and set up event listeners
  const init = () => {
    if (!webview.value) return
    
    //block popups method
      // Add this to your existing init function
  webview.value.addEventListener('new-window', (event) => {
    event.preventDefault() // This blocks popup windows
    // Optionally load the URL in the same webview instead
    // webview.value.src = event.url
  })


    webview.value.addEventListener('did-finish-load', () => {
      console.log('WebView loaded!')
      // Update input URL after initial load
      inputURL.value = webview.value.src
    })

    webview.value.addEventListener('did-fail-load', (error) => {
      console.error('WebView failed to load:', error)
    })

    webview.value.addEventListener('did-navigate', (event) => {
      inputURL.value = event.url
      websiteUrl.value = event.url
    })
  }

  // Expose init function
  defineExpose({ init })

  // Load website when Enter is pressed
  const loadWebsite = () => {
  
    if (!webview.value || !inputURL.value) return

    let url = inputURL.value
  
    // Add https:// if protocol is missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    try {
      new URL(url)
      websiteUrl.value = url
      webview.value.loadURL(url)
    } catch (e) {
      console.error('Invalid URL:', e)
      alert('Please enter a valid URL')
    }
  }

  // Navigation functions
  const goForward = () => {
    if (webview.value?.canGoForward()) {
      webview.value.goForward()
    }
  }

  const goBack = () => {
    if (webview.value?.canGoBack()) {
      webview.value.goBack()
    }
  }

  // Watch for webview URL changes
  watch(() => webview.value?.src, (newUrl) => {
    if (newUrl) {
      inputURL.value = newUrl
    }
  })
</script>
<style scoped>
.webview-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.webview-frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>