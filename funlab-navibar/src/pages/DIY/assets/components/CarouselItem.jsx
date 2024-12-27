const CarouselItem = ({ item, onSelect }) => {
    return (
        <div className={`item ${item.className}`} onClick={onSelect}>
            <div className="itemAlign">
                <img src={item.image} alt={item.name} />
                <div className="itemText">
                    <h3>{item.name} <span>${item.price}</span></h3>
                    {item.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselItem; 