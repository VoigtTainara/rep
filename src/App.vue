<template>
  <div id="app">
    <Nav></Nav>
    <div class="marginPrincipal">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/_nav/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
body{  
  background-color: #eee;
  font-family: sans-serif;
  display: grid;
  justify-items: center;
}
body, html{
  margin:0;
  height: 100%;
}
.marginPrincipal{
  width:50%;
  margin: auto;
}
#app {
  width:100%;
}
.btnDanger{
  background-color: #fa4430;
}
.btnPrimary{
  background-color:#00BFFF;
}
.btnSuccess{
  background-color:#00FF7F;
}
.btn{
  border: 1px solid #000;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.0em;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 3px solid black;
}
.btn:hover{
  text-shadow: 1px 1px 1px black;
  margin-top: 3px;
  border-bottom: 1px solid black;
}
table{
  margin:0px;
  padding:0px;
  list-style-type: none;
  width: 100%;
}
table tr td{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th{
  background-color: rgb(184,208,216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.colPequeno{
  width: 5%;
}
</style>
