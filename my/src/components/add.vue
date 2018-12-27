<template>
<div id="params">
<div id="box_7">
<div id="ip_address">ip_add:</div><a-input placeholder="ip address" id="add_name"></a-input></div>
<div id="box_8">
<div id="pt">port:</div><a-input placeholder="port" id="ip_port"></a-input></div>

<div id="box_1">
<div id="key">key_name:</div><a-input placeholder="your key name" id="name"></a-input></div>
<div id="box_2">
<div id="psword">password:</div><a-input placeholder="12345678" id="password"></a-input></div>
<div id="box_3">
<div id="recover">recover:</div><a-checkbox v-on:change="check" id="rec"></a-checkbox></div>
<div id="box_4">
<div id="seedpass" style="display:none;">
<div id="pS">passwordSeed:</div>
<a-input id="in" placeholder="seed secrect"></a-input>
</div></div>
<div id="box_5">
<a-button type="primary" id="button" v-on:click="add">add</a-button>
<a-button type="primary" id="load_bt" ><router-link to="/setting">go_load</router-link></a-button>
</div>
<div id="box_6">
key_information:
<div id="txt"></div></div>
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
            var ip = store.get_key_ip();
            var port = store.get_key_port();
            if (!ip)
             document.getElementById("add_name").value = '';
           else
               document.getElementById("add_name").value = ip;

          if (!port)
             document.getElementById("ip_port").value = '';
          else
            document.getElementById("ip_port").value = port;
        },
        check () {
            var str = document.getElementById("seedpass").style.display;
            if (str == 'none')
           document.getElementById("seedpass").style.display = "block";
           else
               
             document.getElementById("seedpass").style.display = "none";
             
           
        },
        add () {
            var choose = document.getElementById("seedpass").style.display;
            var ip = document.getElementById("add_name").value;
               var port = document.getElementById("ip_port").value;
               var name = document.getElementById("name").value;
                var password = document.getElementById("password").value;

                store.save_key_ip(ip);
                store.save_key_port(port);
            if (choose == 'none') {
                
               
                
                var URL = 'https://'+ip+':'+port+'/keys';
                this.$myAxios.post(URL,JSON.stringify({
               "name":name,
               "password":password
           }))
            .then (function (response) {
                console.log(response.data);
                var information = JSON.stringify(response.data);
                document.getElementById("txt").innerHTML = information ;
            })
            .catch(function (error) {
                console.log(error);
            });
            
            }
            else {
               
                var seed = document.getElementById("in").value;
                var url = 'https://'+ip+':'+port+'/keys/'+name+'/recover';

                document.getElementById("txt").innerHTML = url;
                /*
                this.$myAxios.post(url,{
               "password":password,
               "seed":seed
           })
            .then (function (response) {
                console.log(response.data);
                var information = JSON.stringify(response.data);
                document.getElementById("info").innerHTML = information ;
            })
            .catch(function (error) {
                console.log(error);
            });
            */
            }
        }
    }
}
</script>
<style>
#params {
    width:50%;
    height:50%;
    float:left;
    margin-left:25%;
    margin-top:1%;
 
}

#box_1 {
    width:100%;
    height:20%;

    margin-top:5%;
    float:left;
}
#box_1 #key{
   
    
 
    
    float:left;
    margin-left:4.6%;
}
#box_1 #name{
   
    width:57%;

    float:left;
    margin-left:5%;
}
#box_2 {
    width:100%;
    height:20%;
   
    margin-top:5%;
    float:left;
}
#box_2 #psword{
   
    
    
    
    float:left;
    margin-left:5%;
}
#box_2 #password{
   
    width:57%;
   
    
    float:left;
    margin-left:5%;
}
#box_3 {
    width:100%;
    height:20%;
 
    margin-top:5%;
    float:left;
}
#box_3 #recover{
   
    
   
    
    float:left;
    margin-left:5%;
}

#box_4 {
   
    width:100%;
    height:20%;
    margin-top:5%;
    float:left;
}
#box_4 #seedpass #pS{
   
    margin-left:1%;
    float:left;
}
#box_4 #seedpass #in{
   width:60%;
    margin-left:2%;
    float:left;
}
#box_5{
   width:100%;
   height:20%;
   
    margin-top:5%;
    float:left;
}
#box_5 #button{
   
   
    margin-left:15%;
    float:left;
}
#box_5 #load_bt{
   
   
    margin-left:15%;
    float:left;
}
#box_6 {
    width:100%;
   
    margin-top:1%;
    float:left;
    
}
#box_6 #txt {
   
    height:auto;
    word-break:break-all;
}


#box_7 {
    width:100%;
    height:20%;
   
    margin-top:2%;
    float:left;
}
#box_7 #ip_address{
   
    
    
    
    float:left;
    margin-left:5%;
}
#box_7 #add_name{
   
    width:57%;
   
    
    float:left;
    margin-left:9.5%;
}
#box_8 {
    width:100%;
    height:20%;
   
    margin-top:5%;
    float:left;
}
#box_8 #pt{
   
    
    
    
    float:left;
    margin-left:5%;
}
#box_8 #ip_port{
   
    width:57%;
   
    
    float:left;
    margin-left:13%;
}
</style>