import './sass/App.sass';
import Field from './components/Field/Field'
import Select from './components/Select/Select'
import PriceButton from './components/PriceButton/PriceButton'
import FormComp from './components/FormComp/FormComp';
function App() {
    return (
        <div className='constructor'>
            <div className='content'>
                <h1 id='header-text'>Предлагаем вам возможность проявить свою фантазию и построить свой участок в 2D мире, а мы поможем рассчитать его стоимость в 3D :&#41;</h1>
                <Field />
                <h2 className='name-cell'></h2>
                <Select />
                <PriceButton />
            </div>
            <FormComp/>
        </div>
    )
}

export default App
