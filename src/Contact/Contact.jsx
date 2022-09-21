import style from './Contact.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Button from '../Common/components/title/Button';
import Fade from 'react-reveal/Fade';
import telegram from "../assets/iconMesenger/telegram.svg";
import phone from "../assets/iconMesenger/phone-call-svgrepo-com.svg";
import emailIcn from '../assets/iconMesenger/email-svgrepo-com.svg';
import {useEffect, useState} from "react";
import ModalPage from "./ModalPages/ModalPage";
import {sendMessage} from "./contact1";


const Contact = (props) => {
    const [titleModal, setTitleModal] = useState('')
    const [activeModal, setActiveModal] = useState(false)
    const [email, setEmail]= useState('')
    const [name, setName]= useState('')
    const [inputMessage, setMessage]= useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorName, setErrorName] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [messageHasBeenSend, setMessageHasBeenSend] = useState("")

    const classNameInputError = (error, errorStyle, style)=>{
        return error ? errorStyle : style
    }

    useEffect(()=>{
        email && inputMessage && name && setDisabled(false)
    }, [email, inputMessage, name])


    const onClick = (title) => {
        setTitleModal(title)
        setActiveModal(true)
    }
    const validateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const onBlurInput = (e)=>{
        const inputName = e.target.name
        if(inputName==="Name"){
            !name ? setErrorName("Required") : setErrorName(false)
        }
        if(inputName==="Email"){
            if(email){
                const resVal = validateEmail()
                !resVal ? setErrorEmail("Email is not valid") : setErrorEmail(false)
            } else {
                setErrorEmail("Required")
            }
        }
        if(inputName==="Message"){
            !inputMessage ? setErrorMessage("Required") : setErrorMessage(false)
        }
    }

    const sendMessageHandler = async (e)=>{
        e.preventDefault()
        if(!disabled){
            const res = await sendMessage(email, inputMessage, name)
            if(res.message){
                setEmail("")
                setName("")
                setMessage("")
                setMessageHasBeenSend("Message has been send")
            }else{
                setMessageHasBeenSend("Message hasn't been send")
            }
        } else {
            !name ? setErrorName("Required") : setErrorName(false)
            if(email){
                const resVal = validateEmail()
                !resVal ? setErrorEmail("Email is not valid") : setErrorEmail(false)
            } else {
                setErrorEmail("Required")
            }
            !inputMessage ? setErrorMessage("Required") : setErrorMessage(false)
        }

    }

    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [{icon: iconStyle(telegram), data: '@vladKlopot', rerender: 'https://t.me/vladKlopot'},
        {icon: iconStyle(emailIcn), data: 'vla3ik@gmail.com', rerender: 'mailto:vla3ik@gmail.com'},
        {icon: iconStyle(phone), data: '+375(33)643-61-37', title: 'phone'}]
    return (
        <div id="contact" className={style.contact}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Fade left>
                    <Title title={'Contact'}/>
                    <div className={style.containerBlock}>
                        {logo.map(l => <div className={style.logo} key={l.data}>
                                {!l.title
                                    ? <a href={l.rerender} className={style.containerForBlock}>
                                        <div style={l.icon} className={style.block}></div>
                                    </a>
                                    : <a onClick={() => onClick(l.title)}
                                         className={style.containerForBlock}>
                                        <div style={l.icon} className={style.block}></div>
                                    </a>}
                                <p>{l.data}</p>
                            </div>
                        )}
                    </div>
                    {messageHasBeenSend && <span className={style.sendMessageSpan}>{messageHasBeenSend}</span>}
                    <form className={style.inputs}>
                        <input
                            className={classNameInputError(errorName, `${style.input} ${style.errorInput}`, style.input)}
                            value={name} onChange={(e)=>setName(e.currentTarget.value)}
                            name={"Name"}
                            onBlur={onBlurInput}
                            placeholder={'Name*'}/>
                        {errorName && <span className={style.errorSpan}>{errorName}</span>}
                        <input
                            className={classNameInputError(errorEmail, `${style.input} ${style.errorInput}`, style.input)}
                            value={email} onChange={(e)=>setEmail(e.currentTarget.value)}
                            name={"Email"}
                            onBlur={onBlurInput}
                            placeholder={'Email*'}/>
                        {errorEmail && <span className={style.errorSpan}>{errorEmail}</span>}

                        <textarea
                            className={classNameInputError(errorMessage, `${style.textarea} ${style.errorInput}`, style.textarea)}
                            value={inputMessage} onChange={(e)=>setMessage(e.currentTarget.value)}
                            name={"Message"}
                            onBlur={onBlurInput}
                            placeholder={'Message*'}/>
                        {errorMessage && <span className={style.errorSpan}>{errorMessage}</span>}

                        <Button onClick={sendMessageHandler} title={'Send message'}/>
                    </form>
                </Fade>
            </div>
            <ModalPage activeModal={activeModal} setActiveModal={setActiveModal} titleModal={titleModal}
                       setTitleModal={setTitleModal}/>
        </div>
    );
}

export default Contact;