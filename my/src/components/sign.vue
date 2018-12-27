<template>
<div>

<a-button v-on:click= "change">change</a-button>
<div id="info" style="border:1px solid black;" ></div>

<a-input id="in" placeholder="we"></a-input>
<a-button v-on:click= "Test">Test</a-button>



<table width="600" border="1" cellspacing="0" style="border:1px solid black;margin-left:5%;"  >
    <thead>
       <tr >
          <th>index</th>
          <th>amount</th>
       </tr> 
    </thead>
    <tbody id="tbody" ></tbody>
 </table>

<div>




   
   
</div>
</div>
</template>
<script>
import store from './store'
export default {
   
    name: 'change',
    data () {
        return {
            theme: 'dark',
            newItem: '',

   //items: store.fetch(),
   vals: store.get()
        }
    },
    watch: {
/*
  items: {

   handler: function(val, oldVal) {

    store.save(val);

   },

   deep: true

  },
  */
  vals: {
      handler: function(val) {
          store.post(val);
          this.show();
      },
      deep: true
  }

 },

    methods: {
        show() {
          console.log(this.vals);
          var result = JSON.stringify(this.vals) ;
          console.log(result);
           var yu = result.split("},",-1);

            var y = yu.length;
            for (var i = 0 ; i < y ; i++) {
                
                    var num1 = yu[i].indexOf("denom");
                    var num2 = yu[i].indexOf("amount");
                    var l = yu[i].length;
                    var coin_index = yu[i].substring(num1+10,num2-5);

                    if ( i == y-1 ){
                    var coin_amount =yu[i].substring(num2+11,l-6);
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
        },
        
        change () {
            /*
           this.$myAxios.post('https://192.168.2.222:1317/keys',JSON.stringify({
               "name":"name","password":"12345678"
           }))
            .then (function (response) {
                console.log(response.data);
                var information = JSON.stringify(response.data);
                document.getElementById("info").innerHTML = information ;
            })
            .catch(function (error) {
                console.log(error);
            });
            */
          //  var t = JSON.stringify(this.$route.params.address);
            document.getElementById("in").value = store.get_ip() ;
        }/*,
       async Test () {
           
       console.log(0)
         let client = require('cosmos-sdk')('https://localhost:1317')
     console.log(10)
// create a key
         let key = await client.generateKey(JSON.stringify({ name: 'mat', passphrase: '12312312' }))
         console.log(1)
          console.log(key)
         console.log(2)
// build a transaction
         let tx = await client.build('send', JSON.stringify({
         to: key.address,
         amount: { amount: 1000, denom: 'mycoin' },
          fee: { amount: 23, denom: 'atom' }
      }))

// now sign the tx
         let signedTx = await client.sign({ tx,name: 'alice', password: '12312312' })

// send the signed transaction to the node to send out to other nodes
        let result = await client.send(signedTx)

// query account
/*
         let queryResult = await query({
         type: 'account',
         data: 'sigs:BDADF167E6CF2CDF2D621E590FF1FED2787A40E0'
        })
        */
       
        

            /*
            var vm = this;
            var str = '{"denom":"mycoin","amount":"2000"},{"denom":"my","amount":"3000"},{"denom":"coin","amount":"4000"}';
            
        
            vm.vals.push({ 'name':str });
/*
           // document.getElementById("yu").innerHTML = yu[2];
           var info = '';
           var key = 'key';
           var value = str;
           window.sessionStorage.setItem(key, window.JSON.stringify(value));

          var result=window.JSON.parse(window.sessionStorage.getItem(key) || '[]');
          if (!result){

          }else{
          var yu = result.split("},",-1);

            var y = yu.length;
            for (var i = 0 ; i < y ; i++) {
                
                    var num1 = yu[i].indexOf("denom");
                    var num2 = yu[i].indexOf("amount");
                    var l = yu[i].length;
                    var coin_index = yu[i].substring(num1+8,num2-3);

                    if ( i == y-1 ){
                    var coin_amount =yu[i].substring(num2+9,l-2);
                    }else{
                        var coin_amount =yu[i].substring(num2+9,l-1);
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

          
         },
        addItemFun() {

   var _this = this;

   _this.items.push({ 'name': _this.newItem });

   _this.newItem = '';

  }
  */
    }
    
   
}

</script>