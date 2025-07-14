

function Header(){

    return( <>
                <nav className="navbar">
                    <div className="container">
                        <div className="logo">NETFLIX</div>
                        <div className="options-section">
                            <label for="language">🌐</label>
                            <select name="language-dropdown" id="language">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                            </select>
                            <button className="sign-in-button">Sign in</button>
                        </div>
                    </div>
                </nav>
            </>)
}

export default Header;
