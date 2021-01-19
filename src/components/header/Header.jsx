import React from 'react';
import classes from './Header.module.css';
import { IoMdSearch, IoMdAdd } from 'react-icons/io';
import desktop from '../../img/desktop.jpeg';
import {Link} from "react-router-dom";

class Header extends React.Component{
    state = { searchMode: false }

    searchModeActivate = () => {
        this.setState({ searchMode: true })
    }

    searchPostTextOnChange = (e) => {
        let text = e.target.value;
        this.props.setSearchPostTextAC(text);
        this.props.findPostAC();
    }
    render() {
        return (
            <div className={classes.header}>
                <div className={classes.head}>
                    <div className={classes.title}>
                        Announcement web
                    </div>

                    <div className={classes.search}>
                        <div className={classes.but}>
                            <Link to={'/newpost'}> <IoMdAdd size="25px" color={'#000000'}/> </Link>
                        </div>
                        {
                            this.state.searchMode
                                ? <div className={classes.in}> <input type="text" placeholder={"Search"}
                                    onChange={this.searchPostTextOnChange} /></div>
                                : null
                        }
                        <div className={classes.but} onClick={this.searchModeActivate}>
                                <IoMdSearch size={'25px'}/>
                        </div>
                    </div>
                </div>
                <div className={classes.picture}>
                    <img src={desktop} alt={''}/>
                </div>
            </div>
        );
    }
}
export default Header;