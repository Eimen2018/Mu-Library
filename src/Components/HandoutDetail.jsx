import React, { Component } from 'react';
import Navbar from './Navbar';
import { Fade } from 'react-reveal';
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Apdf from '../Assets/Book/b.pdf';
import next from '../Assets/Images/icons8_Right_96px_2.png';
import prev from '../Assets/Images/icons8_Left_96px.png';
import SignedInNavbar from './SignedInNavBar';
import {Link} from 'react-router-dom';


class HandoutDetail extends Component {
    
    state = { 
        numPages: null, pageNumber: 1,
        bookinfo:this.props.location.state.bookinfo
     }
     onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
    
      goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
      goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    render() { 
        const links = this.props.match.url==='/Handout/Auth'?<SignedInNavbar/>:<Navbar/>;
        const download = this.props.match.url==='/Handout/Auth'?<button className="btn-download">Download</button>:<Link to="/signin"><span className="span-download">Sign in to download</span></Link>;
        const { pageNumber, numPages } = this.state;
        console.log(this.props)
        return (
        <React.Fragment>
            
            <header>
             {links}
            </header>
            <main>
            <div className="Books-Detail">
            <div className="container">
            <Fade bottom><div key={this.state.bookinfo.ID} className="Book-Desc Detail">
                {/* <img className="Book-Image Detail-Image"src={thumb} alt=""/> */}
               <div className="Book-Desc-w Detail-Desc-w">
                    <h3>{this.state.bookinfo.title}</h3>
                    <p><span className="Desc" >Description</span>{this.state.bookinfo.Desc}</p>
                    <p><span className="Desc" >Total pages</span>{numPages}&nbsp;Pages</p>
                    <i><span className="Desc" >Author</span>{this.state.bookinfo.Publisher}</i>
                </div>
                </div></Fade>
                </div>
                </div>
                <div className="pdfBookContainer">
                    <Fade right><div style={{ width: 0 }}>
                    <Document
                    className="pdfBook"
                        file={Apdf}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                    </div>
                    </Fade>
                    <p>
                    Page {pageNumber} of {numPages}
                    </p>
                    <button className="btn-prev" onClick={this.goToPrevPage}><img src={prev} alt="" width="50"/><span className="span-nextprev">Prev</span></button>
                    <button className="btn-next" onClick={this.goToNextPage}><img src={next} alt="" width="50"/><span className="span-nextprev">Next</span></button>
                </div>
                {download}
                <div className="comments">
                <input type="text" className="textcomment" name="comment" id="comment"/><label htmlFor="comment">Comment</label>
                <h5>Comments</h5>
                <div className="commect"><h6>Leul@Eshete</h6><p>This is a great Book</p></div>
                <div className="comment"><h6>Bilal@Ibrahim</h6><p>Awesome Book!</p></div>
                <div className="comment"><h6>J.Nur</h6><p>It lacks some important content</p></div>
                </div>
            </main>
           
           </React.Fragment>
            
         );
    }
}
 
export default HandoutDetail;