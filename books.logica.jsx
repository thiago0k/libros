import './books.css'

const PadreRico = [
    {
        image:'https://imagessl6.casadellibro.com/a/l/t0/56/9788466354356.jpg',
        titulo:'Padre rico padre pobre',
        descripcion:'es un libro escrito por Robert Kiyosaki y Sharon Lechter. Evoca el concepto de libertad financiera..',
        genero:'libro de no ficción',
        tema:'Finanzas Personales',
        idioma:'Español',
        fecha:'1997',
        paginas:'207'
    }
]


export default function Header(){
     return(
        <>
        <div className='contenedor-title'>
            <h1 className='title'>Books free</h1>
        </div>
        <div>
        </div>
        <div className='contenedor-books'>
            <ul className='contenedor-ul'>
            {PadreRico.map(items => (
            <li className='item'>
                <img className='image-book' src={items.image} alt="Robert Kiyosaky" />
                
                <div className='item1'>
                <div className='conten-item'><h2>{items.titulo}</h2></div>
                <div className='conten-item'><p><b>Descripcion:</b> {items.descripcion}</p></div>
                </div>
                
                <div className='item2'>
                <div className='conten-item'><p><b>Género: </b> {items.genero}</p></div>
                <div className='conten-item'><p><b>Tema: </b> {items.tema}</p></div>
                <div className='conten-item'><p><b>Idioma: </b>{items.idioma}</p></div>
                <div className='conten-item'><p><b>Fecha: </b>{items.fecha}</p></div>
                <div className='conten-item'><p><b>Páginas: </b>{items.paginas}</p></div>
                </div>
                <button className='btn-download'><a href="https://drive.google.com/file/d/0BwJdgMbD2zklRVFSWXdSNklrNkU/edit?resourcekey=0-rTP4si2D_x22Btb-Q5kpNw">Descargar</a></button>
            </li>
          ))}
            </ul>
        </div>
        </>
     )
}