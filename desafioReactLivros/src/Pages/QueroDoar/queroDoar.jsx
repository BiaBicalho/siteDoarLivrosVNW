import livro from '../../assets/Vector.png'
import S from './queroDoar.module.scss'
import axios from 'axios'
import {useState} from 'react'


export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

//função que envia os dados para a API
    const enviarDados = async()=>{
        const urlApi = "https://api-livros-vnw-ee4k.onrender.com/doar" // url rota POST da API, cadastrar livro
        
        const infoEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }
        await axios.post(urlApi,infoEnviar)
        alert("Livro cadastrado com sucesso")

        //Reseta os campos do formulário
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }


    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
        console.log(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
        console.log(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
        console.log(e.target.value)
    }
    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
        console.log(e.target.value)
    }

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com as informações do livro</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <img src={livro} alt="icone de um livro" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Título" onChange={capturaTitulo} value={titulo}/>
                    <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url}/>
                    <input type="submit" value="Doar" onClick={enviarDados} />
                </form>
            </section>
        </section>
    )
}