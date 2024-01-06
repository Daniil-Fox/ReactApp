import classes from './Button.module.scss'

interface IButtonProps {
    state : string,
    text : string,
    className?: string,
}
const Button : React.FC<IButtonProps> = ({state = '', text, className = ''} : IButtonProps) => {
    return (
        <>
            <button className={'btn-reset' + ' ' + state + ' ' + classes.btn + ' ' + className}>
                <span className="btn__text">{text}</span>
            </button>
        </>
    )
}

export default Button;