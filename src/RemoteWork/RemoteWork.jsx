import react from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Button from '../Common/components/title/Button';

const RemoteWork = () => {
  return (
    <div className={style.contact}>
      <div className={`${styleContainer.container} ${style.contactContsiner}`}>
      <h3 className={style.title}>Considering the option of remote work</h3>
        <Button title={'Hire me'}/>
        </div>
    </div>
  );
}

export default RemoteWork;