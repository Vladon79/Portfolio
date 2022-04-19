import style from './Button.module.scss';

const Button = (props) => {
    return (
        <div>
            <button type='submit' disabled={props.disabled} className={style.button}>{props.title}</button>
      </div>
    )
}

export default Button;