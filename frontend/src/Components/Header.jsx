import React from 'react'
import {Container, nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
            <LinkContainer to='/'>
            <nav class="navbar-dark bg-dark">
                 <span class="navbar-brand">Gs-Shop</span>
            </nav>
            </LinkContainer>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item nav-link">
                <LinkContainer  to='/cart' >
                        <i className='fas fa-shopping-cart'> Cart </i> 
                </LinkContainer>
                </li>

                <li class="nav-item nav-link">
                    <LinkContainer to='/login' >
                        <i className='fas fa-user'> Login</i>
                    </LinkContainer>
                </li>

            </ul>
            </div>
            </Container>
            </nav>
        </div>
    )
}

export default Header
