<template>
    <div>
    <v-card>Upload model</v-card>
</div>
</template>
<script>
    export default {
        components: {
        },
        data: () => ({
            IsMetamakSupported: false,
            walletAddress:""
        }),
        onmounted(){
            this.IsMetamakSupported = window.ethereum !== "undefined";
        },
        computed(){
        },
        methods:{
            async connect() {
               // this.$refs.metamask.$refs();
              const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
              this.walletAddress = accounts[0];
              console.log(accounts);
            }
        }
    }
</script>
