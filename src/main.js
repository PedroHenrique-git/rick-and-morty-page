import '../public/assets/css/index.css';
import 'regenerator-runtime/runtime'
import 'core-js';
import init from './modules/init';
import paginacao from './modules/paginacao';
import MontarPagina from './modules/MontarPagina';

(function(){
    init();
    paginacao();
    MontarPagina();
})();
