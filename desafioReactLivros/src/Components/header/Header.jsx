import{BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'
import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import s from './header.scss'

export default function Header(){
    return(
        <BrowserRouter>
            <header>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt="" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.menuHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/livrosdoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraBusca}>
                    <input type="search" name="" id="" placeholder='O que está a procura?' />
                    <button><img src={lupa} alt="" /></button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosdados' element={<LivrosDoados/>}/>
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}