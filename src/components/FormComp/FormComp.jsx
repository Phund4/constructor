import './FormComp.sass'
import Form from '../Form/Form';
function FormComp() {
    const hideForm = (event) => {
        let form = document.getElementById('form');
        let formContent = document.getElementById('form-content');
        if(!form.contains(event.target)) {
            formContent.classList.remove('show');
            formContent.classList.add('hide');
            document.getElementById('header-text').classList.remove('hide-text');
        }
    }
    return <>
        <div id='form-content' className='hide' onClick={hideForm}>
            <h1 id='price-text'></h1>
            <h1 id='form-text'>Заинтересовали наши услуги? Заполните форму ниже</h1>
            <Form/>
        </div>
    </>
}

export default FormComp;