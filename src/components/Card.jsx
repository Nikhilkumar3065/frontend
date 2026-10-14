import './card.css'

const Card = (props) => {
    let { name, role, src } = props
    return (
        <div className="card">
            <div className="upper">
                <div className="img-container">
                    <img src={src} alt={name} className="img" />
                </div>
                <div className="icon-container">
                    <div class="fa-brands fa-facebook"></div>
                    <div class="fa-brands fa-twitter"></div>
                    <div class="fa-brands fa-github"></div>
                </div>

            </div>
            <div className="lower">
                <h1 className='name'>{name}</h1>
                <p className='role'>{role}</p>
                <div className='rating'>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                </div>
                <div className='button-container'>
                    <button className='btn'>About Me</button>
                    <button className='btn'>Hire Me</button>
                </div>
            </div>


        </div>
    )
}

export default Card;