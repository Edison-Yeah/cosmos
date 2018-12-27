<template>
<div id="boxt">
<div id="sbox1">Address:<br/>
<div id="tx"></div><a-button type="primary" id="bt" v-on:click="copy">copy</a-button>
</div>
<div id="sbox2">Coins:<br/>

<div id="send"><a-button type="primary" v-on:click="sendTx" >sendTx</a-button></div>
 <table width="600" border="1" cellspacing="0" style="border:1px solid white;margin-left:5%;margin-top:2%;"  >
    <thead>
       <tr>
          <th>index</th>
          <th>amount</th>
       </tr> 
    </thead>
    <tbody id="tbody"></tbody>
 </table>

</div>


</div>
</template>
<script>
import store from './store'
export default {
   data () {
       return {
           id:'',
           address:'',
           ip:'',
           port:''
       }
   },
    mounted() {
        this.getParams()
    },
    
    
    methods: {
        copy () {
            document.getElementById("tx").innerHTML = document.getElementById("port").value;
        },
        sendTx () {
            var ip_add = this.$route.params.ip
            var ip_port = this.$route.params.port;
            const that = this;
            var Add = document.getElementById("tx").innerHTML;
            
             that.$router.push({
           name: 'sendTx',
           params: { port:Add,ip_add:ip_add,ip_port:ip_port }
       });
       console.log(Add);
        },
        getParams () {
            
           var router = JSON.stringify(this.$route.params.id);
           var name = JSON.stringify(this.$route.params.address);
           //console.log(router);
          // document.getElementById("coin_kind").innerHTML = router;
           if (!router){
         //    console.log(12);
           
           var Add = store.fetch();
        //   console.log(result);
         var Name = Add.substring(1,Add.length-1);
           document.getElementById("tx").innerHTML = Name;
          var result = store.get();
          if (!result){

          }else{
           var yu = result.split("},",-1);

            var y = yu.length;
           
           var info = '';
            for (var i = 0 ; i < y ; i++) {
                 //  console.log(yu[i]);
                    var num1 = yu[i].indexOf("denom");
                    var num2 = yu[i].indexOf("amount");
                    var l = yu[i].length;
                    var coin_index = yu[i].substring(num1+10,num2-5);

                    if ( i == y-1 ){
                    var coin_amount =yu[i].substring(num2+11,l-5);
                    }else{
                        var coin_amount =yu[i].substring(num2+11,l-2);
                    }
                    var row = document.createElement('tr');
                    var idCell = document.createElement('td');
                    idCell.innerHTML = coin_index;
                    row.appendChild(idCell);

                    var nameCell = document.createElement('td');
                    nameCell.innerHTML = coin_amount;
                    row.appendChild(nameCell);
                    tbody.appendChild(row);
                 //   info = info + ',denom:'+coin_index+',amount:'+coin_amount;
            
            }
          }

             }else{
                 //store.clear();
              
              store.save(name);
               var Name = name.substring(1,name.length-1);
            document.getElementById("tx").innerHTML = Name;

            var ty = JSON.parse(router);
            if(!ty){

            }else{
              store.post(router);
           var yu = router.split("},",-1);

            var y = yu.length;
           
           var info = '';
            for (var i = 0 ; i < y ; i++) {
                
                    var num1 = yu[i].indexOf("denom");
                    var num2 = yu[i].indexOf("amount");
                    var l = yu[i].length;
                    var coin_index = yu[i].substring(num1+10,num2-5);

                    if ( i == y-1 ){
                    var coin_amount =yu[i].substring(num2+11,l-5);
                    }else{
                        var coin_amount =yu[i].substring(num2+11,l-2);
                    }
                    var row = document.createElement('tr');
                    var idCell = document.createElement('td');
                    idCell.innerHTML = coin_index;
                    row.appendChild(idCell);

                    var nameCell = document.createElement('td');
                    nameCell.innerHTML = coin_amount;
                    row.appendChild(nameCell);
                    tbody.appendChild(row);
                 //   info = info + ',denom:'+coin_index+',amount:'+coin_amount;
            }
            }
        }
           
           
        }
    },
    watch: {
        '$route': 'getParams'
    }
}
</script>


<style>
#boxt {
    width:80%;
    height:70%;
    float:left;
    margin-top:5%;
    margin-left:10%;
    
}
#boxt #sbox1 {
    width:100%;
    height:10%;
   
    float:left;
    margin-top:3%;
}
#boxt #sbox1 #tx {
    float:left;
    margin-left:0%;
}
#boxt #sbox1 #bt {
    float:left;
    margin-left:70%;
}
#boxt #sbox2 {
    width:100%;
    height:70%;
    margin-top:5%;
    
}
#boxt #sbox2 #coin_kind {
    float:left;
    width:40%;
    height:20%;
}
#boxt #sbox2 #coin_amount {
    float:left;
    margin-left:10%;
    width:40%;
    height:20%;
}
#boxt #send{
    width:100%;
    height:70%;
    float:left;
    margin-top:1%;
    margin-left:70%;
    
}



</style>