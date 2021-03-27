import React,{Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className='Navbar has-background-dark py-4	'>
            <h1 className='is-size-4 has-text-white
            is-vcentered has-text-centered	'>CHOSE YOUR MOVIE</h1>
            </nav>
         );
    }
}
 
export default Nav;