<template>


<div id="Sbox">
<div id="sbox1" >address:<a-input placeholder="your account address" id="address" autocomplete="off"  maxlength="45"  onkeyup="value=value.replace(/[\W]/g,'') "  ></a-input></div>

<div id="sbox2">node-ip:<a-input placeholder="localhost" id="IP" autocomplete="off" ></a-input></div>

<div id="sbox3" onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0(\d+)$/,'$1')" >port:<a-input placeholder="1317" id="Port" autocomplete="off" ></a-input></div>

<div id="sbox4"><div id="load"><a-button type="primary" v-on:click="load">load</a-button ></div>
<div id="add"><a-button ><router-link to="/add">add</router-link></a-button></div></div>
</div>

</template>

<script>
import store from './store'
export default {
    data (){
        return{
            str:''
        }
    },
     mounted() {
        this.getParams()
    },
    methods: {
        getParams () {

            document.getElementById("address").value = '';
         var ip = store.get_ip();
          var port = store.get_port();
          if (!ip)
             document.getElementById("IP").value = '';
           else
               document.getElementById("IP").value = ip;

          if (!port)
             document.getElementById("Port").value = '';
          else
            document.getElementById("Port").value = port;
        },
    async load () {
       
        var address = document.getElementById("address").value;
        var ip = document.getElementById("IP").value;
        var port = document.getElementById("Port").value;
        var url = 'https://'+ip+':'+port+'/bank/balances/'+address;
       //存储填写的ip port
       store.save_ip(ip);
       store.save_port(port);

        var vm = this
           await this.$myAxios.get(url)
            .then (function (response){
                var information = JSON.stringify(response.data);
         
    
            vm.str  = ''+information;   
           
            })
            .catch(function (error) {
                console.log(error);
            });
            var Add = document.getElementById("address").value;
            this.$router.push({
           name: 'create',
           params: { id:this.str,address:Add,ip:ip,port:port}
       });
        }
    }
}

</script>


<style>

#Sbox {
   
    width:70%;
    height:50%;
    float:left;
    margin-left:10%;
    display:block;
}

#Sbox #sbox1 {
    width:100%;
    height:20%;
    float:left;
    margin-left:15%;
    margin-top:10%;
    
}
#Sbox #sbox1 #address {
    width:50%;
    margin-left:5%;
   
}


#Sbox #sbox2 {
   width:100%;
    height:20%;
    float:left;
    margin-left:15%;
    margin-top:5%;
    
}
#Sbox #sbox2 #IP {
   width:50%;
   margin-left:-2%;
}
#Sbox #sbox3 {
   width:100%;
    height:20%;
    float:left;
    margin-left:15%;
    margin-top:5%;
    
}
#Sbox #sbox3 #Port {
   width:50%;
   margin-left:-5.5%;
}
#Sbox #sbox4 {
    width:50%;
    height:20%;
    float:left;
    margin-left:25%;
    margin-top:5%;
   
}
#Sbox #sbox4 #load{
    float:left;
    margin-left:15%;
}
#Sbox #sbox4 #add{
    float:left;
    margin-left:30%;
}
 #box #sbox1 .ant-input{
     left:5%;
     width:60%;
 }
#Sbox #sbox2 .ant-input{
     left:7.5%;
     width:60%;
 }
 #Sbox #sbox3 .ant-input{
     left:15%;
     width:60%;
 }



</style>