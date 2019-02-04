import React, { Component } from 'react';
import Navbar from './Navbar';
import { Fade } from 'react-reveal';
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Apdf from '../Assets/Book/[Complete Reference Series] Thomas Powell - HTML & CSS_ The Complete Reference, Fifth Edition (Complete Reference Series) (2010, McGraw-Hill Osborne Media).pdf';
import thumb from '../Assets/Images/thumbnails/thumb1.jpg';
import next from '../Assets/Images/icons8_Right_52px.png';
import prev from '../Assets/Images/icons8_Left_52px.png';


class BookDetail extends Component {
    
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
        
        const { pageNumber, numPages } = this.state;
        
        return (
        <React.Fragment>
            
            <header>
             <Navbar/>
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
                    <button className="btn-prev" onClick={this.goToPrevPage}><img src={prev} alt=""/><span className="span-nextprev">Prev</span></button>
                    <button className="btn-next" onClick={this.goToNextPage}><img src={next} alt=""/><span className="span-nextprev">Next</span></button>
                </div>
            </main>
           
           </React.Fragment>
            
         );
    }
}
 
export default BookDetail;