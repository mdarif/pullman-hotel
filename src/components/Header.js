import { useState, useEffect } from 'react'
// import menuLinksData from './data/menu_links.json'

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([])

  const loadMenuLinksData = async () => {
    try {
      // Query the API Gateway endpoint
      const response = await fetch(
        'https://co4e5yjmr3.execute-api.us-east-1.amazonaws.com/Production/menu_links'
      )
      const json = await response.json()

      // Assign the data to the state variable
      setMenuLinksData(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // Load the menu links data from the AWS API Gateway
    loadMenuLinksData()
  }, [])

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
            {menuLinksData.map(link => {
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
