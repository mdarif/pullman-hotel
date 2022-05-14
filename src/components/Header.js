import menuLinkData from './data/menu_links.json'

const Header = () => {
  return (
    <header id='intro'>
      <article className='fullheight'>
        <div className='hgroup'>
          <h1>Pullman Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href='#welcome'>
              <img
                src='https://landonhotel.com/images/misc/arrow.png'
                alt='down arrow'
              />
            </a>
          </p>
        </div>
      </article>

      <nav id='nav'>
        <div className='navbar'>
          <div className='brand'>
            <a href='#welcome'>
              Pullman <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinkData.map(link => {
              return (
                <li key={link.text}>
                  <a className={`icon ${link.class}`} href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
