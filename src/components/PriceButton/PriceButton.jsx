import './PriceButton.sass'
// eslint-disable-next-line react/prop-types
function PriceButton() {
    const handlePriceButton = () => {
        let prices = {'Газон': 200, 'Вода': 400, 
        'Дорожка': 150, 'Цветы': 50, 'Дерево': 500}
        let cells = document.getElementsByClassName('cell');
        let sum = -1300;
        for(let i=0; i<cells.length; i++) {
            sum += prices[cells[i].name];
        }
        let form = document.getElementById('form-content');
        form.classList.remove('hide');
        form.classList.add('show');
        document.getElementById('header-text').classList.add('hide-text');
        document.getElementById('price-text').textContent = `Стоимость вашего участка - ${sum}руб`;
        console.log(sum);
    }

    return <>
        <button className='price-button' onClick={handlePriceButton}>
            Рассчитать стоимость
        </button>
    </>
}
export default PriceButton;
