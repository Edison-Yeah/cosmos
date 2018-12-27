<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      id="sider"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKesys= "['1']" :selectedKeys="[activeNav]">
        <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="wallet" />WalletTool</span>
            <a-menu-item v-on:click.native="changeNav(1)" key="1"><router-link to="/create">Wallet</router-link></a-menu-item>
            <a-menu-item v-on:click.native="changeNav(2)" key="2"><router-link to="/sign">Transactions</router-link></a-menu-item>
          </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header id="header" >
      <div id="icon">
      <a-button v-on:click="backPage" shape="circle" style="margin-left:20px" ><a-icon type="arrow-left" /></a-button>
      <router-link to="/search"><a-button style="margin-left:20px"  shape="circle" icon="search" ></a-button></router-link>
      <router-link to="/setting"><a-button  style="margin-left:20px" shape="circle" icon="setting" ></a-button></router-link>
      <a-button style="margin-left:20px" shape="circle" icon="user" ></a-button>
      </div>
        <!-- <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        /> -->
      </a-layout-header>
      <a-layout-content :style="{ margin: '100px 16px 0px 220px', padding: '24px', background: '#fff', minHeight: '590px',position:'relative' }">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Design ©2018 Created by
       
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

export default {
  activated() {
  this.$setgoindex()
  },
  data(){
    return {
      collapsed: false,
      activeNav:'1'
    }
  },
  mounted() {
      this.getActiveNav();
  },
  methods:{
      getActiveNav:function(){
          // let keyArray = window.location.href.split('/',-1);
          // let key = keyArray[keyArray.length-1];
          // if(key == 'sign')
          // { 
          //   this.activeNav= '2';
          // }
          // else{
          //   this.activeNav= '1';
          // }      
      },
      changeNav:function(number){
          this.activeNav=''+number;
      },
      backPage:function(){
          if (this.$route.query.goindex === 'true') {
            this.$router.push('/')
          } else {
            this.$router.back(-1)
          }
      }
  }
  
}
</script>
<style>
#components-layout-demo-custom-trigger{
  width: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
#sider{
  height:750px;
  position: fixed;
  z-index: 2;
}

#header{
  width: 100%;
  left:200px;
  background: rgb(8,46,84); 
  padding: 0;
  position:fixed;
  z-index: 1;
}
#header #icon{
  margin-left:65%;
  
}
</style>