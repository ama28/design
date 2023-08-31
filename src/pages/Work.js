import React, { Component } from 'react';
import '../App.css';
import ProjectSquare from '../components/ProjectSquare';
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode:'Games',
        }
    }

    /* Changes filter mode which determines what projects are shown and in what order */
    switchFilterMode = (event) => {
        this.setState(prevState => ({
            ...prevState,
            filterMode: event.target.value
        }))
    }

    renderProjects() {
        return this.props.projects.map((item, idx) => {
            return <ProjectSquare
                        key={idx}
                        filterMode={this.state.filterMode}
                        imageURL={item.imageURL}
                        title={item.title}
                        route={item.route}
                        altRoute={item.altRoute}
                        skills={item.skills}
                        category={item.category}/>
        })
    }

    render() {
        const description = 
            <div className='introDescription'>
                <b>Adrian Ma</b> is a game designer focused on creating <span className='semiBold' style={{color: '#90EE90'}}>
                transformative,</span> <span className='semiBold' style={{color: '#FFFF00'}}> immersive,</span> and 
                <span className='semiBold' style={{color: '#9999FF'}}> accessible</span> real-time experiences. 
            </div>

        return(
            <div>
                <NavBar 
                    switchPage={this.props.switchPage}
                    currentPage={this.props.currentPage}
                    alwaysWhite={false}/>

                {/* ========== Introduction at the Top of the Work Page ========== */}
                <PageHeader 
                    styledDescription={description}/>

                <div className='workContentContainer'>
                    {/* ========== Filter Button ========== */}

                    <div className='filterContainer' style={{backgroundImage: `${process.env.PUBLIC_URL}/assets/images/Vector.svg`}}>
                        <span className='filterLabel'>Filter by: </span>
                        <div className='filterButtonContainer'>
                            <select onChange={this.switchFilterMode}>
                                <option value='All'>ALL</option>
                                <option value='Design'>UX DESIGN</option>
                                <option value='Games' selected="selected">GAMES</option>
                                <option value='Research'>RESEARCH</option>
                            </select>
                            <span className='down arrow'></span>
                        </div>
                    </div>

                    {/* ========== Grid of Projects ========== */}
                    <div className='projectGridContainer'>
                        {this.renderProjects()}
                    </div>

                    {/* ========== See Archive Button ========== */}
                    <Link to='/archive' className='rectButton hvr-shutter-out-horizontal'>SEE ARCHIVE</Link>
                </div>
            </div>
        );
    }
}

export default Work
