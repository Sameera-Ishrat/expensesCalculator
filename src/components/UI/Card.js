import './Card.css';
const Card = ({className,children}) => {
    
    const classes = 'card ' + className;
    console.log(classes,"CLASSES")

    return (
        <div className = {classes}>
            {children}
        </div>
    )
}

export default Card
