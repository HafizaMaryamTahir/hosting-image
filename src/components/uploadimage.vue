<template>

<div>

      
      <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone> -->

    <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true>
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
        <div class="subtitle">...or click to select a file from your computer</div>

      </div>
      
    </vue-dropzone>
    <div class="text-center mt-3">
      <v-btn rounded color="blue accent-3" dark
        >upload</v-btn
                          >
                        </div>
</div>

</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'


export default {
  name: 'app',
  components: {
    vueDropzone: vue2Dropzone,
    
  
    },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
                  addRemoveLinks: true,

          headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>

<style>

</style>