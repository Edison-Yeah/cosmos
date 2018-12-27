 const STORAGE_KEY = 'todos-vuejs'
 const KEY = 'key'
 const NAME = 'name'
 const IP_Name = 'ip'
 const Port_Name = 'port'
 const KEY_IP = 'key_ip'
 const KEY_Port = 'key_port'

export default {



 fetch: function() {



    return window.JSON.parse(window.sessionStorage.getItem(NAME) || '[]')



 },



 save: function(add) {



    sessionStorage.setItem(NAME,JSON.stringify(add))



 },

 get: function() {
    return window.JSON.parse(window.sessionStorage.getItem(KEY) || '[]')
    
 },

 post: function(val) {
     sessionStorage.setItem(KEY,JSON.stringify(val))
 },

 clear: function() {
     sessionStorage.clear(KEY)
 },

 get_ip: function() {
   return window.JSON.parse(window.sessionStorage.getItem(IP_Name) || '[]')
 },
 save_ip: function(val) {
    sessionStorage.setItem(IP_Name,JSON.stringify(val))
 },
 get_port: function() {
   return window.JSON.parse(window.sessionStorage.getItem(Port_Name) || '[]')
 },
 save_port: function(val) {
   sessionStorage.setItem(Port_Name,JSON.stringify(val))
 },
 save_key_ip: function(val) {
   sessionStorage.setItem(KEY_IP,JSON.stringify(val))
 },
 get_key_ip: function() {
   return window.JSON.parse(window.sessionStorage.getItem(KEY_IP) || '[]')
 },
 save_key_port: function(val) {
   sessionStorage.setItem(KEY_Port,JSON.stringify(val))
 },
 get_key_port: function(){
   return window.JSON.parse(window.sessionStorage.getItem(KEY_Port) || '[]')
 }



}