import livro from '../../assets/form-livro.png'
import S from './doados.scss'

export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxCard}>
                <article>
                    <img src={livro} alt="capa do liro chamado o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}