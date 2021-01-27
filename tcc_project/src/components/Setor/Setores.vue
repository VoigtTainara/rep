<template>
  <div>
    <titulo texto="Setores" :btnVoltar="true"/>
    <div>
    <input type="text" placeholder="Nome do setor"
    v-model="nome" @keyup.enter="addSetor()">
    <button class="btn btnInput" @click="addSetor()">Adicionar</button>
    </div>
    <table>
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Quantidade funcionários</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="setores.length">
        <tr v-for="(setor,index) in setores" :key="index"> 
          <td>{{setor.id}}</td> 
          <td>
            <router-link 
            v-bind:to="'/funcionarios/' + setor.id" 
            tag="td" 
            style="cursor: pointer"
            >{{setor.nome}}</router-link>
          </td>
          <td>{{setor.qtdFunc}}</td>
          <td>
            <button class="btn btnDanger" @click="remover(setor)">Remover</button>
          </td> 
        </tr>
      </tbody>
      <tfoot v-if="!setores.length">
          Nenhum setor encontrado!
      </tfoot> 
    </table>          
  </div>
</template>

<script>
import Titulo from '../Titulo/Titulo';
export default {
  components:{
    Titulo
  },
  data(){
    return{
      titulo: 'Setor',
      nome: '',
      setores:[],
      funcionarios:[]
    }
  },
  created(){
    this.$http.get('http://localhost:3000/funcionarios')
    .then(res => res.json())
    .then(funcionarios => {
      this.funcionarios = funcionarios;
      this.carregarSetores();
    })
  },
  props: {

  },
  methods:{
    addSetor(){
      let _setor={
        nome: this.nome,
      }
    
      this.$http.post('http://localhost:3000/setores', _setor)
      .then(res => res.json())
      .then(setorRetornado => {
        this.setores.push(setorRetornado);
        this.nome= '';

      })
    },
    pegarQtdFuncionariosPorSetor(){
      this.setores.forEach((setor,index)=>{
        setor = {
          id: setor.id,
          nome: setor.nome,
          qtdFunc: this.funcionarios.filter(funcionario =>
           funcionario.setor.id == setor.id
          ).length
        }
        this.setores[index] = setor
      });
    },
    carregarSetores(){
       this.$http
       .get('http://localhost:3000/setores')
       .then(res => res.json())
       .then(setor => {
          this.setores = setor
          this.pegarQtdFuncionariosPorSetor();
         });
    },
    remover(setor){
      this.$http.delete(`http://localhost:3000/setores/${setor.id}`)
      .then(() => {
          let indice = this.setores.indexOf(setor);
          this.setores.splice(indice, 1);
      }) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  width: 435px;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: #677f7f;
  display: inline;
}
.btnInput{
  width: 205px;
  display: inline;
  font-size:1.3em;
  border: 0px;
  padding: 20px;
  background-color: rgb(116,115,115);
}
.btnInput:hover{
  padding: 20px;
  margin:0px;
  border:0px;
}
</style>
