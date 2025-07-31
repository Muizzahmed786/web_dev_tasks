import {FaCode, FaDatabase, FaRobot, FaLaptopCode, FaMobileAlt} from 'react-icons/fa';

function Domains(){
    return( <>
                <div className="domain-container">
                    <h1>Our domains</h1>
                    <span><FaCode style={{marginRight: '8px'}}/>Coding</span>
                    <span><FaDatabase style={{marginRight: '8px'}}/>Data Analytics & Visualization</span>
                    <span><FaRobot style={{marginRight: '8px'}}/>AI/ML</span>
                    <span><FaLaptopCode style={{marginRight: '8px'}}/>Development</span>
                    <span><FaMobileAlt style={{marginRight: '8px'}}/>Social media & graphic design</span>
                </div>
                <hr />
                
            </>);
}

export default Domains;