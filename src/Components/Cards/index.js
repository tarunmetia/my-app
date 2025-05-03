import React, {useState, useEffect, Fragment} from 'react'
import './cards.css'

function Cards() {
const [cardData, setCardData] = useState([])
useEffect (() => {
    const apiUrl = 'https://dummyjson.com/carts'
    const getDataFromApi = async() => {
        try {
            const responseData = await fetch(apiUrl)
            const jsondata = await responseData.json()
            setCardData(jsondata.carts)
        }
        catch(error) {
            console.log(error)
        }
    }
    getDataFromApi()
}, [])

  return (
    <div >
      {cardData.map ((item, index) => {
        return (
            <div className='cards-wrapper'>                
                {item.products.map((productsItem, productIndex) => {
                    return(
                        <div className='card-Item'>
                            <h2>{productsItem.title}</h2>
                            <div className='image-wrapper'>
                                <img src={productsItem.thumbnail} alt="test"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
      })}

    </div>
  )
}

export default Cards
