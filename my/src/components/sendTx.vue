<template>
<div id="Box">

<div id="Box1">
<div id="txt1">
to_add:</div><a-input id="add" placeholder="address of destination" /></div>

<div id="Box2">
<div id="txt2">
from:</div><a-input id="from" placeholder="the name of your account" /></div>

<div id="Box3">
<div id="txt3">
password:</div><a-input id="pass" placeholder="the password of your account" /></div>

<div id="Box4">
<div id="txt4">
chain-id:</div><a-input id="id" placeholder="the chain-id" /></div>
<div id="Box7">
<div id="txt7">
gas:</div><a-input id="gas" placeholder="the amount of gas you want to pay" /></div>

<div id="Box8">
<div id="txt8">
denom:</div><a-input id="denom" placeholder="the kind of token you want to send" /></div>

<div id="Box9">
<div id="txt9">
amount:</div><a-input id="amount" placeholder="the amount of token you want to sned" /></div>
<div id="Box10">
<a-button type="primary" id="send" v-on:click="Send">send</a-button></div>
<div id="Box11">
tx_information:
<div id="txt" style="word-break:break-all; "></div></div>

</div>

</template>

<script>
import store from './store'
export default {
    data () {
       return {
           acc_information:'',
           port:'1',

       }
   },
    methods: {
    async Send () {
        var ip_add = JSON.stringify(this.$route.params.ip_add);
        var ip_port = JSON.stringify(this.$route.params.ip_port);

        if(!ip_add || !ip_port ){
        var ip=JSON.parse(store.get_ip());
        var port=JSON.parse(store.get_port());
        }else{
            store.save_ip(ip_add);
            store.save_port(ip_port);
            var ip = JSON.parse(ip_add);
            var port = JSON.parse(ip_port);
        }
    
            var vm = this;
             var account_address = JSON.stringify(this.$route.params.port);
           
             var add = account_address.substring(1,account_address.length-1);
             
           var get_url = 'https://'+ip+':'+port+'/auth/accounts/'+add;
          await  this.$myAxios.get(get_url).then (function (response) {
               
                var information = JSON.stringify(response.data);
                
              vm.acc_information = ''+information;
              
           }).catch (function (error) {
               console.log(error);
           });
            
            var get_information = this.acc_information;
            var short_info = get_information.split("],",-1);
            var number1 = short_info[1].indexOf("sequence");
           var number2 = short_info[1].indexOf("account_number");
            var number3 = short_info[1].indexOf("name");
            //拿到account_number和sequence
            var acc_account_number = short_info[1].substring(number2+17,number1-3);
            var acc_sequence = short_info[1].substring(number1+11,number3-4);
           
         //交易信息
             var address = document.getElementById("add").value;
            var from = document.getElementById("from").value;
            var password = document.getElementById("pass").value;
            var chain_id = document.getElementById("id").value;
            
            var gas = document.getElementById("gas").value;
            var denom = document.getElementById("denom").value;
            var amount = document.getElementById("amount").value;

             var url = 'https://'+ip+':'+port+'/bank/accounts/'+address+'/transfers';
            this.$myAxios.post(url,JSON.stringify({
               "base_req": {
                     "name": from,
                     "password": password,
                     "chain_id": chain_id,
                     "account_number": acc_account_number,
                     "sequence": acc_sequence,
                     "gas": gas,
                     "gas_adjustment": "1.2"
                },
                 "amount": [
                   {
                    "denom": denom,
                     "amount": amount
                     }
                ]
           }))
            .then (function (response) {
                
                var information = JSON.stringify(response.data);
                document.getElementById("txt").innerHTML = information ;
            })
            .catch(function (error) {
                console.log(error);
            });

        }/*,
        Send () {
            var address = document.getElementById("add").value;
            var from = document.getElementById("from").value;
            var password = document.getElementById("pass").value;
            var chain_id = document.getElementById("id").value;
            var account_number = document.getElementById("account").value;
            var sequence = document.getElementById("sequence").value;
            var gas = document.getElementById("gas").value;
            var denom = document.getElementById("denom").value;
            var amount = document.getElementById("amount").value;
           var ip = document.getElementById("ip").value;
           var port = document.getElementById("port").value;

            var url = 'https://'+ip+':'+port+'/bank/accounts/'+address+'/transfers';
            this.$myAxios.post(url,JSON.stringify({
               "base_req": {
                     "name": from,
                     "password": password,
                     "chain_id": chain_id,
                     "account_number": account_number,
                     "sequence": sequence,
                     "gas": gas,
                     "gas_adjustment": "1.2"
                },
                 "amount": [
                   {
                    "denom": denom,
                     "amount": amount
                     }
                ]
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
        */
    }
}

</script>

<style>
#Box {
    width:80%;
    
    float:left;
    margin-left:10%;
    margin-top:1%;
}

#Box #Box1 {
    width:100%;
   
    float:left;
    
    margin-top:1%;
}
#Box #Box1 #txt1 {
    
   
    float:left;
    margin-left:5%
    
}
#Box #Box1 #add {
    width:40%;
   
    float:left;
    margin-left:13.5%
    
}
#Box #Box2 {
    width:100%;
  
    float:left;
    
    margin-top:1%;
}

#Box #Box2 #txt2 {
    
   
    float:left;
    margin-left:5%
    
}
#Box #Box2 #from {
    width:40%;

    float:left;
    margin-left:15.2%
    
}
#Box #Box3 {
    width:100%;
   
    float:left;
    
    margin-top:1%;
}
#Box #Box3 #txt3 {
    
   
    float:left;
    margin-left:5%
    
}
#Box #Box3 #pass {
    width:40%;
  
    float:left;
    margin-left:11%
    
}
#Box #Box4 {
    width:100%;
   
    float:left;
    
    margin-top:1%;
}
#Box #Box4 #txt4 {
    
 
    float:left;
    margin-left:5%
    
}
#Box #Box4 #id {
    width:40%;
  
    float:left;
    margin-left:12%
    
}







#Box #Box7 {
    width:100%;
   
    float:left;
    
    margin-top:1%;
}
#Box #Box7 #txt7 {
    
    
    float:left;
    margin-left:5%
    
}
#Box #Box7 #gas {
    width:40%;
   
    float:left;
    margin-left:16%
    
}
#Box #Box8 {
    width:100%;
    
    float:left;
    
    margin-top:1%;
}
#Box #Box8 #txt8 {
    
    
    float:left;
    margin-left:5%
    
}
#Box #Box8 #denom {
    width:40%;
   
    float:left;
    margin-left:13%
    
}
#Box #Box9 {
    width:100%;
    
    float:left;
    
    margin-top:1%;
}
#Box #Box9 #txt9 {
    
   
    float:left;
    margin-left:5%
    
}
#Box #Box9 #amount {
    width:40%;
    
    float:left;
    margin-left:12.3%
    
}
#Box #Box10 {
    width:100%;
    
    float:left;
    
    margin-top:1%;
}
#Box #Box10 #send {
    
   
    float:left;
    margin-left:5%
    
}
#Box #Box11 {
    width:80%;
    
    float:left;
    
    margin-top:1%;
}
#Box #Box11 #txt {
    
   height:auto;
    float:left;
    margin-left:5%
    
    
}
</style>