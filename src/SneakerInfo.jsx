const SneakerInfo = ({ sneaker }) => {
    return (
        <div>
            <h2>{sneaker.name}</h2>
            <img width="250px" height="300px" grid-template-columns="auto auto auto auto auto auto" src={sneaker.image} />
            <p>{sneaker.likes}</p>
        </div>
    )
}

export default SneakerInfo;