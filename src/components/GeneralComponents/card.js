import '../../styles/GeneralComponents/card.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'

const Card = ({
    img = '',
    title = '',
    keyProp='',
    description = '',
    descriptionMaxLength = 50,
    price = '',
    style = {},
    cardAction = () => {},
    buttons = [],
    imgStyle = {},
}) => {
    const [loadingImg, setLoadingImg] = useState(true)

    const renderDescription = (text) => {
        let element;
        text = description.length > descriptionMaxLength ? text.slice(0, 50) : text
        if(text.includes('\n')){
            element = text.split('\n').map((el) => (<>{el} <br></br> </>))
        }
        return element;
    }
    
    return (
        <div key={keyProp} className="card__container" style={style} onClick={cardAction}>
            {img && (
                <div className="card__img--container">
                    {loadingImg && (
                        <Skeleton style={{height: '125px'}} />
                    )}
                    <img 
                        onLoad={() => setLoadingImg(false)}
                        style={{...imgStyle, height: loadingImg ? '0' : (imgStyle.height || '125px')}} 
                        src={img} 
                        alt='Imagen'
                    />
                </div>
            )}
            {title && (
                <div className="card__title--container">
                    <h4>{title}</h4>
                </div>
            )}
            {description && (
                <div className="card__description--container">
                    <p>{renderDescription(description)}{description.length > descriptionMaxLength && '...'}</p>
                </div>
            )}
            {price && (
                <div className="card__price--container">
                    <span>${price}</span>
                </div>
            )}
            {buttons.length > 0 && (
                <div className="card__buttons--container">
                    {buttons.map(({label, action}) => (
                        <button key={label} className="card__buttons" onClick={() => action()}>
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Card;