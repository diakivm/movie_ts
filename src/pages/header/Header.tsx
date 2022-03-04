import React, {ChangeEvent, FC, FormEvent, MouseEventHandler} from 'react'
import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import './Header.scss'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";

const Header: FC = () => {

    const [searchQuery, setSearchQuery] = React.useState<string>('')
    const navigate = useNavigate()

    function onSubmitSearchQuery(e: FormEvent) {
        e.preventDefault()
        navigate(`/search/${searchQuery}`)
        setSearchQuery('')
    }

    function onChangeSearchQuery(e: ChangeEvent<HTMLInputElement>){
        setSearchQuery(e.target.value)
    }

    function onClickSearchQuery(){
        navigate(`/search/${searchQuery}`)
        setSearchQuery('')
    }

   return (
         <Navbar className='header' bg="warning" expand="lg">
            <Container fluid>
               <Link to="/">
                  <h1 className='header__logo' >movie.</h1>
               </Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">

                     <ul className='header__link-items'>
                         <li className='header__link-item'>
                            <Link to='/movies'>Movies</Link>
                         </li>
                         <li className='header__link-item'>
                            <Link to='/tv-series'>TV series</Link>
                         </li>
                     </ul>
                     <div style={{flex:'1'}}></div>
                     <Form className="d-flex"
                           onSubmit={onSubmitSearchQuery}
                           >
                     <FormControl
                              type="search"
                              placeholder="Пошук..."
                              aria-label="Search"
                              className="header__search no-outline me-2"
                              onChange={onChangeSearchQuery}
                           />
                           
                     <Button variant="light"
                             className="header__btn-search no-outline"
                             onClick={onClickSearchQuery}
                             >Знайти</Button>
                     </Form>

               </Navbar.Collapse>
            </Container>
   </Navbar>
   )
}

export default Header
