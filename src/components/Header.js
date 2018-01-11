import React from 'react';
import {AddListButton} from './ListModal';

const Header = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="clearfix">
                    <div className="pull-left">
                        <h1 className="header-title">Todo List</h1>
                    </div>
                    <div className="pull-right">
                        <AddListButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;