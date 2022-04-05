import s from './Modal.module.scss'

const Modal = (props) => {
    const dontActive = ()=>{
        props.setActiveModal(false)
    }
    return (
        <div className={props.activeModal !== false ? `${s.modal} ${s.modal_active}` : s.modal} onClick={dontActive}>
            <div className={props.activeModal !== false ? `${s.modal_content} ${s.modal_content_active}` : s.modal_content}
                 onClick={e => e.stopPropagation()}>
                <section className={s.name_section}>
                    <h2></h2>
                    <p onClick={dontActive}>❌</p>
                </section>
                <h2>+375(33)6436137</h2>
            </div>

        </div>
    )
}

export default Modal