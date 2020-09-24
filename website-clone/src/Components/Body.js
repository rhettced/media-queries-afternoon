import React, {Component} from 'react';
import './Body.css'

class Body extends Component{

    render(){
        return(
            <section className='middle-body'>
                <div className='welcome'>Welcome To Our Studio</div>
                <div className='meet'>IT'S NICE TO MEET YOU</div>
                <button className='more'> Tell Me More </button>
            </section>
        );
    }

}

export default Body;
