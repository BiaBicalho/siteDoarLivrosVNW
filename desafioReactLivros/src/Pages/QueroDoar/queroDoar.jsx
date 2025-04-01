import livro from '../../assets/Vector.png'
import S from './queroDoar.module.scss'


export default function QueroDoar(){

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com as informações do livro</h2>
                <form action="">
                    <div>
                        <img src={livro} alt="icone de um livro" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Título"/>
                    <input type="text" placeholder="Categoria"/>
                    <input type="text" placeholder="Autor"/>
                    <input type="text" placeholder="Link da Imagem"/>
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}