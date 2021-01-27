import Vue from 'vue';
import Router from 'vue-router'
import Setores from './components/Setor/Setores'
import Funcionarios from './components/Funcionario/Funcionarios'
import FuncionarioDetalhe from './components/Funcionario/FuncionarioDetalhe'

Vue.use(Router);

export default new Router({
    routes:[
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
