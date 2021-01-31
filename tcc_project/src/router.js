import Vue from 'vue';
import Router from 'vue-router'
import Empresas from './components/Empresa/Empresas.vue'
import Setores from './components/Setor/Setores'
import Funcionarios from './components/Funcionario/Funcionarios'
import FuncionarioDetalhe from './components/Funcionario/FuncionarioDetalhe'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/empresas',
            nome: 'Empresas',
            component: Empresas
        },
        {
            path: '/setores',
            nome: 'Setores',
            component: Setores
        },
        {
            path: '/todosfuncionarios',
            nome: 'Funcionarios',
            component: Funcionarios
        },
        {
            path: '/funcionarios/:setor_id',
            nome: 'Funcionarios',
            component: Funcionarios
        },
        {
            path: '/funcionarioDetalhe/:funcionario_id',
            nome: 'FuncionarioDetalhe',
            component: FuncionarioDetalhe
        }

    ]

})
