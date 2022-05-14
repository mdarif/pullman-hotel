import React from 'react'
import galleryData from './data/gallery_images.json'

const Welcome = () => {
  return (
    <div className='scene' id='welcome'>
      <article className='content'>
        <div className='gallery'>
          {galleryData.map(img => {
            return (
              <img
                key={img.alt}
                className={img.className}
                src={img.src}
                alt={img.alt}
              />
            )
          })}
          {/* <img
            src='https://landonhotel.com/images/hotel/intro_room.jpg'
            alt='Intro Gallery Room Sample'
          />
          <img
            src='https://landonhotel.com/images/hotel/intro_pool.jpg'
            alt='Intro Gallery Pool Sample'
          />
          <img
            src='https://landonhotel.com/images/hotel/intro_dining.jpg'
            alt='Intro Gallery Dining Sample'
          />
          <img
            src='https://landonhotel.com/images/hotel/intro_attractions.jpg'
            alt='Intro Gallery Attractions Sample'
          />
          <img
            className='hidesm'
            src='https://landonhotel.com/images/hotel/intro_wedding.jpg'
            alt='Intro Wedding Sample'
          /> */}
        </div>
        <h1>Welcome to the Pullman&nbsp;Hotel</h1>
        <p>
          The original Pullman perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{' '}
          <a href='files/landon_information_sheet_London.pdf'>
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  )
}

export default Welcome
