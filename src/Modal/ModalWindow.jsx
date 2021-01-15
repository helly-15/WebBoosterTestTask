import React from "react";
import './ModalWindow.scss';

function ModalWindow(props) {
    const {show, close} = props;
    if(show===false){
        return null;
    }
    return (
        <div className='ModalWrapper'>
            <div className='ModalWrapper-formWrapper'>
                <button className='Modal-close' onClick={close}>
                    ×
                </button>
                <form action = '#' className = 'Modal' name ='modal form' autoComplete='on'>

                    <label>
                        Имя
                        <input type='text' name='name' placeholder="Иван Иванов" required />
                    </label><br/>
                    <label>
                        Телефон
                        <input type="tel" id="phone" name="phone" placeholder="9991112233" pattern="[0-9]{10}" required />
                    </label><br/>
                    <label>
                        E-mail
                        <input type="email" id="email" name="email" placeholder="mail@email.com" required/>
                    </label><br/>
                    <label>
                        Название товара
                        <input type='text' name='product' placeholder="Стул парикмахерский"  required />
                    </label><br/>
                    <input type='submit'/>
                </form>
            </div>


        </div>


    )


}

export default ModalWindow;
