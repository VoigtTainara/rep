<template>
    <div>
        <titulo :texto="'Funcionário:' + funcionario.nome" :btnVoltar="visualizar">
            <button v-show="visualizar" class="btn btnEditar" @click="editar()">Editar</button>
        </titulo>
        <table>
            <tbody>
                <tr>
                    <td class="colPequeno">Código</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.id}}</label>
                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Nome</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.nome}}</label>
                        <input v-else v-model="funcionario.nome" type="text"/>

                   </td>
                </tr>
                <tr>
                    <td class="colPequeno">Sobrenome</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.sobrenome}}</label>
                        <input v-else v-model="funcionario.sobrenome" type="text"/>

                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Data de nascimento</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.dataNasc}}</label>
                        <input v-else v-model="funcionario.dataNasc" type="text"/>

                   </td>
                </tr>
                 <tr>
                    <td class="colPequeno">CPF</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.cpf}}</label>
                        <input v-else v-model="funcionario.cpf" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">RG</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.rg}}</label>
                        <input v-else v-model="funcionario.rg" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Endereço</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.endereco}}</label>
                        <input v-else v-model="funcionario.endereco" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Número do PIS</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.pis}}</label>
                        <input v-else v-model="funcionario.pis" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Carga horária</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.cargaHoraria}}</label>
                        <input v-else v-model="funcionario.cargaHoraria" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Salário</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.salario}}</label>
                        <input v-else v-model="funcionario.salario" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Data de admissão</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.dataAdmissao}}</label>
                        <input v-else v-model="funcionario.dataAdmissao" type="text"/>

                    </td>
                </tr>
                 <tr>
                    <td class="colPequeno">Data de desligamento</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.dataDesligamento}}</label>
                        <input v-else v-model="funcionario.dataDesligamento" type="text"/>

                    </td>
                </tr> 
                 <tr>
                    <td class="colPequeno">Setor</td>
                    <td>
                        <label v-if="visualizar">{{funcionario.setor.nome}}</label>
                        <select v-else v-model="funcionario.setor">
                           <option v-for="(setor, index) in setores" 
                           :key="index" v-bind:value="setor">
                           {{setor.nome}}</option>
                        </select>    
                    </td>
                </tr>    
            </tbody>    
        </table>   

        <div style="margin-top: 10px">
            <div v-if="!visualizar">
                <button class="btn btnSalvar" @click="salvar(funcionario)">Salvar</button>
                <button class="btn btnCancelar" @click="cancelar()">Cancelar</button>
            </div>    
        </div>     
    </div>
</template>

<script>
import Titulo from '../Titulo/Titulo'
    export default {
        components:{
            Titulo
        },
        data(){
            return {
                setores:[],
                funcionario: {},
                id: this.$route.params.funcionario_id,
                visualizar: true,
            }
        },
        created(){
        this.$http.get('http://localhost:3000/funcionarios/' + this.id)
            .then(res => res.json())
            .then(funcionario => (this.funcionario = funcionario));

        this.$http
            .get('http://localhost:3000/setores')
            .then(res => res.json())
            .then(setor => (this.setores = setor));
        },
        methods: {
            editar(){
                this.visualizar = !this.visualizar;
            },
            salvar(funcionario){
                let _funcionarioEditar={
                    id: funcionario.id,
                    nome: funcionario.nome,
                    sobrenome: funcionario.sobrenome,
                    dataNasc: funcionario.dataNasc,
                    cpf: funcionario.cpf,
                    rg: funcionario.rg,
                    endereco: funcionario.endereco,
                    pis: funcionario.pis,
                    cargaHoraria: funcionario.cargaHoraria,
                    salario: funcionario.salario,
                    dataAdmissao: funcionario.dataAdmissao,
                    dataDesligamento: funcionario.dataDesligamento,
                    setor: funcionario.setor
                }

                this.$http
                    .put('http://localhost:3000/funcionarios/'+ _funcionarioEditar.id,
                    _funcionarioEditar)

                this.visualizar = !this.visualizar;
            },
            cancelar(){
                this.visualizar = !this.visualizar;
            }
        }
    }
</script>

<style scoped>
.btnEditar{
    float: right;
    background-color: rgb(76,186,249);
}
.btnSalvar{
    float: right;
    background-color: rgb(79,196,68);
}
.btnCancelar{
    float: left;
    background-color: rgb(249,186,92);
}
.colPequeno{
    width: 20%;
    text-align: right;
    background-color: rgb(125,217,245);
    font-weight: bold;
}
input, select{
    margin: 0px;
    padding: 5px 10px;
    font-size: 0.9em;
    font-family: Montserrat;
    border-radius: 5px;
    border: 1px solid silver;
    background-color: rgb(245,245,245);
    width: 95%;
}
select{
    height: 38px;
    width: 100%;
}

</style>