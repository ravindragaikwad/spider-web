<template>
    <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @oncomplete="OnComplete"
        >
        </vue-metamask>
    </div>
</template>

<script lang="ts">
    import VueMetamask from 'vue-metamask';
    export default {
        components: {
            VueMetamask,
        },
        data(){
            return {
                msg: "This is demo net work"
            }
        },
        methods:{
            onComplete(data){
                console.log('data:', data);
            }
        }
    }
</script>