<template>
<div id="box">

<div id="box-2">
<div id="ip">ip_address:</div>
<a-input id="ip_address"></a-input>
</div>

<div id="box-3">
<div id="port">ip_port:</div>
<a-input id="ip_port"></a-input>
</div>

<div id="box-1">
<div id="hash">tx_hash:</div>
<a-input id="tx-hash"></a-input>
</div>
<div id="button"><a-button type="primary" id="start" v-on:click="start">start</a-button></div>
<div id="txt">information:</div>
<div id="text" style="border:1px solid black;" ></div>
</div>


</template>

<script>
import store from './store'
export default {
     mounted() {
        this.getParams()
    },
    methods: {
        getParams () {
             var ip = store.get_ip();
          var port = store.get_port();
          if (!ip)
             document.getElementById("ip_address").value = '';
           else
               document.getElementById("ip_address").value = ip;

          if (!port)
             document.getElementById("ip_port").value = '';
          else
            document.getElementById("ip_port").value = port;
        },
        start () {
            var ip = document.getElementById("ip_address").value;
          var port = document.getElementById("ip_port").value;

            var hash = document.getElementById("tx-hash").value;
            var url = 'https://'+ip+':'+port+'/txs/'+hash;
            this.$myAxios.get(url)
            .then (function (response) {
                console.log(response.data);
                var information = JSON.stringify(response.data);
                document.getElementById("text").innerHTML = information ;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

</script>

<style>
 #box {
     width:80%;
     height:80%;
    margin-left:18%;
    margin-top:3%;
   
 }
 #box #box-1 {
     float:left;
     width:100%;
     height:20%;
    margin-top:1%;
 }
 #box #box-1 #hash {
     float:left;
     margin-left:2%;
 }
 #box #box-1 #tx-hash {
     width:60%;
     float:left;
     margin-left:5%;
 }

 #box #box-2 {
     float:left;
     width:100%;
     height:20%;
    margin-top:0.1%;
 }
 #box #box-2 #ip {
     float:left;
     margin-left:1.7%;
 }
 #box #box-2 #ip_address {
     width:60%;
     float:left;
     margin-left:2.5%;
 }

  #box #box-3 {
     float:left;
     width:100%;
     height:20%;
    margin-top:1%;
 }
 #box #box-3 #port {
     float:left;
     margin-left:2%;
 }
 #box #box-3 #ip_port {
     width:60%;
     float:left;
     margin-left:5.5%;
 }

#box #button {
     float:left;
     width:100%;
     height:20%;
     margin-top:5%;
    
 }
 #box #start {
     float:left;
     margin-top:1%;
     margin-left:2%;
     
 }
  #box #txt {
     float:left;
     margin-top:1%;
     margin-left:2%;
     width:100%;
 }
 #box #text {
     height:auto;
     float:left;
     margin-top:1%;
     margin-left:5%;
     word-break:break-all;
 }
</style>