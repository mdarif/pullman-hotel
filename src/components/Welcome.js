import { useState, useEffect } from 'react'
// import galleryData from './data/gallery_images.json'

const Welcome = () => {
  const [galleryData, setGalleryData] = useState([])

  const loadGalleryData = async () => {
    const response = await fetch(
      'https://co4e5yjmr3.execute-api.us-east-1.amazonaws.com/Production/gallery_images'
    )
    const json = await response.json()

    // Assign the data to the state variable
    setGalleryData(json)
  }

  useEffect(() => {
    // Load the gallery data from the AWS API Gateway
    loadGalleryData()
  }, [])

  return (
    <div className='scene' id='welcome'>
      <article className='content'>
        <div className='gallery'>
          {galleryData.map(img => {
            return (
              <img
                key={img.src}
                className={img.className}
                src={img.src}
                alt={img.alt}
              />
            )
          })}
        </div>
        <h1>Welcome to the Pullman&nbsp;Hotel</h1>
        <p>
          The original Pullman perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{' '}
          <a href='#'>download our handy information sheet</a>.
        </p>
      </article>
    </div>
  )
}

export default Welcome
