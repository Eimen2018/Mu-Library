import React, { Component } from 'react';
import Navbar from './SignedInNavBar';

class upload extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <div className="form-container">
                    <h1> BE RESPonsible for what people See/Read</h1>
                        <form className="form">
                       <h4 htmlFor="filename">File Upload</h4>
                       <div className="fileselector">
                        <input type="file" className="file-upload"/>
                        </div>
                        <div className="typeof">
                        <input type="radio" name="type" value="Book" />Book
                        <input type="radio" name="type" value="Handout"/>Handout
                        <input type="radio" name="type" value="Tutorial"/>Tutorial
                        </div>
                        <textarea name="desc" id="" className="desc-textarea" cols="35" rows="5" placeholder="A Short Description..."></textarea>
                        <input type="submit" value="Upload" className="btn-upload"/>
                        </form>
                    </div>
                </main>
            </React.Fragment>
         );
    }
}
 
export default upload;