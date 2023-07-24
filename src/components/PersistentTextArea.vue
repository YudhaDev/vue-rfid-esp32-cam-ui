<template>
    <div class="textarea-container">
        <textarea v-model="textAreaContent" @input="handleInput"></textarea>
        <!-- <p>Content: {{ textAreaContent }}</p> -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            textAreaContent: "",
        };
    },

    created() {
        setInterval(this.appendString, 1000);
    },
    methods: {
        appendString() {
            this.textAreaContent += "icikiwir \n"
        },
        handleInput() {
            // Automatically scroll to the bottom when new content is added
            this.$refs.container.scrollTop = this.$refs.container.scrollHeight;
        },
    }
};
</script>
  
<style>
.textarea-container {
    overflow-y: auto;
    height: 200px;
    /* Set a fixed height or use any desired height */
}

textarea {
    width: 100%;
    resize: none;
    overflow-y: hidden;
    border: 1px solid #ccc;
    padding: 8px;
}
</style>
  