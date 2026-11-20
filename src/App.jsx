import { useState } from 'react'
import { cifras, valores, productos, pasos, testimonios } from './data.js'

function Nav() {
  return (
    <nav>
      <div className="contenedor">
        <a href="#" className="logo">Nube<span>de</span>Campo</a>
        <ul>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="contenedor">
        <div>
          <span className="etiqueta">🥛 Hecho a mano desde 2015</span>
          <h1>Yogurt artesanal con <em>alma de campo</em></h1>
          <p>Leche fresca de granjas locales, cultivos vivos y fruta de temporada. Sin conservantes, sin atajos: solo tiempo, cariño y sabor de verdad.</p>
          <a href="#productos" className="btn btn-pri">Ver productos</a>
          <a href="#contacto" className="btn btn-sec">Hacer pedido</a>
        </div>
        <div className="frasco">
          <div className="circulo" />
          <div className="emoji">🍶</div>
          <div className="mini" style={{ top: 30, left: 40 }}>🍓</div>
          <div className="mini" style={{ bottom: 40, right: 30, animationDelay: '1s' }}>🫐</div>
          <div className="mini" style={{ top: 60, right: 50, animationDelay: '2s' }}>🍯</div>
        </div>
      </div>
    </header>
  )
}

function Cifras() {
  return (
    <div className="cifras">
      <div className="contenedor">
        {cifras.map(c => <div key={c.texto}><strong>{c.valor}</strong>{c.texto}</div>)}
      </div>
    </div>
  )
}

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="contenedor">
        <div className="nosotros-img">🐄</div>
        <div>
          <span className="etiqueta">Nuestra historia</span>
          <h2>De la granja familiar a tu mesa</h2>
          <p>Nube de Campo nació en la cocina de la abuela Rosa, que cada mañana fermentaba la leche recién ordeñada en frascos de vidrio. Hoy mantenemos esa misma receta, en pequeños lotes y con el mismo respeto por los ingredientes.</p>
          <p>Trabajamos con productores lecheros de la zona que cuidan a sus animales en pastoreo libre, y endulzamos solo con miel pura y frutas naturales.</p>
          <div className="valores">{valores.map(v => <span key={v}>{v}</span>)}</div>
        </div>
      </div>
    </section>
  )
}

function Titulo({ titulo, texto }) {
  return (
    <div className="titulo">
      <h2>{titulo}</h2>
      {texto && <p>{texto}</p>}
    </div>
  )
}

function Productos() {
  return (
    <section id="productos" className="productos">
      <div className="contenedor">
        <Titulo titulo="Nuestros productos" texto="Cada frasco se fermenta lentamente durante 10 horas para lograr una textura cremosa y un sabor inigualable." />
        <div className="grid-prod">
          {productos.map(p => (
            <div className="card" key={p.nombre}>
              <div className="icono" style={{ background: p.fondo }}>{p.icono}</div>
              <div className="tags">{p.tag}</div>
              <h3>{p.nombre}</h3>
              <p>{p.desc}</p>
              <div className="precio">{p.precio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proceso() {
  return (
    <section id="proceso">
      <div className="contenedor">
        <Titulo titulo="Así lo hacemos" texto="Un proceso lento y cuidadoso, igual que hace 10 años." />
        <div className="pasos">
          {pasos.map(p => (
            <div className="paso" key={p.titulo}>
              <div className="e">{p.e}</div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonios() {
  return (
    <section className="testimonios">
      <div className="contenedor">
        <Titulo titulo="Lo que dicen nuestros clientes" />
        <div className="grid-test">
          {testimonios.map(t => (
            <div className="test" key={t.autor}>
              <div className="estrellas">★★★★★</div>
              <p>"{t.texto}"</p>
              <strong>— {t.autor}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  const [enviado, setEnviado] = useState(false)
  return (
    <section id="contacto" className="contacto">
      <div className="contenedor">
        <div className="caja">
          <div>
            <h2>¿Quieres probarlo?</h2>
            <p>Hacemos entregas a domicilio y distribuimos a tiendas, cafeterías y restaurantes. Escríbenos para pedidos o mayoreo.</p>
            <ul>
              <li>📍 Camino Rural 123, Valle Verde</li>
              <li>📞 +00 123 456 789</li>
              <li>✉️ hola@nubedecampo.com</li>
              <li>🕒 Lun a Sáb · 8:00 – 18:00</li>
            </ul>
          </div>
          {enviado ? (
            <h3 style={{ color: '#fff' }}>¡Gracias! 🍓 Te contactaremos pronto.</h3>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setEnviado(true) }}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Correo electrónico" required />
              <select><option>Pedido personal</option><option>Pedido mayorista</option><option>Otro</option></select>
              <textarea placeholder="Cuéntanos qué te gustaría pedir" />
              <button className="btn" type="submit">Enviar mensaje</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Cifras />
      <Nosotros />
      <Productos />
      <Proceso />
      <Testimonios />
      <Contacto />
      <footer>© 2026 Nube de Campo · Yogurt artesanal hecho con amor 🥛</footer>
    </>
  )
}
