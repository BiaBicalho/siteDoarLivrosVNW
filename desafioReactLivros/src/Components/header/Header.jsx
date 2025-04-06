import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import LivrosDoados from '../../Pages/Doados/doados'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'
import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/search.png'
import s from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={s.logoHeader}>
                <img src={logoLivro} alt="" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.menuHeader}>
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/livrosdoados'>Livros Doados</Link></li>
                    <li><Link to='/querodoar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraBusca}>
                <input className={s.busca} type="text" name="" id="" placeholder='O que está a procura?' />
                <button><img src={lupa} alt="" /></button>
            </section>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path="/livrosdoados" element={<LivrosDoados/>}/>
            <Route path="/querodoar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}