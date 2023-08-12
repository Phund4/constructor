import './/Field.sass';
import Cell from '../Cell/Cell';

var abc = "abcdefghijklmnopqrstuvwxyz";

const clickOnFieldCell = (event) => {
    event.target.setAttribute('src', localStorage.getItem('pathCell'));
    event.target.setAttribute('name', localStorage.getItem('nameCell'));
}

function Field() {
    let array = [];
    for(let i=0; i<16; i++) {
        for(let j=0; j<16; j++) {
            var rs = "cell";
            while (rs.length < 10) {
                rs += abc[Math.floor(Math.random() * abc.length)];
            }
            array.push(<Cell newPath='../../../src/img/grassTile.jpg' 
                    key={rs} id={rs} name='Газон'
                    handleClick={clickOnFieldCell}/>);
        }
    }
    return <div id="field">
        {array.map(el => el)}
    </div>
}

export default Field;