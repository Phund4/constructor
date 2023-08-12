import './Select.sass';
import Cell from '../Cell/Cell';

const clickOnSelectCell = (path, name) => {
    localStorage.setItem('pathCell', path);
    localStorage.setItem('nameCell', name);
    document.getElementsByClassName('name-cell')[0].textContent = name
}

function Select() {
    return <div className='select'>
        <Cell newPath='../../../src/img/greyTile.jpg' 
            handleClick={() => clickOnSelectCell('../../../src/img/greyTile.jpg', 'Дорожка')} 
            name='Дорожка'/>
        <Cell newPath='../../../src/img/grassTile.jpg' 
            handleClick={() => clickOnSelectCell('../../../src/img/grassTile.jpg', 'Газон')} 
            name='Газон'/>
        <Cell newPath='../../../src/img/waterTile.jpg' 
            handleClick={() => clickOnSelectCell('../../../src/img/waterTile.jpg', 'Вода')} 
            name='Вода'/>
        <Cell newPath='../../../src/img/flowersTile.jpg'
            handleClick={() => clickOnSelectCell('../../../src/img/flowersTile.jpg', 'Цветы')} 
            name='Цветы'/>
        <Cell newPath='../../../src/img/woodTile.jpg' 
            handleClick={() => clickOnSelectCell('../../../src/img/woodTile.jpg', 'Дерево')} 
            name='Дерево'/>
    </div>
}

export default Select;