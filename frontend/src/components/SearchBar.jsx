
import '../styles/Navbar.css'


const SearchBar = () => {

    return (
        <div className="input-group">
            <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z" />
                <path d="M17.5 17.5l4 4" />
            </svg>
            <input type="text" className="input-field" placeholder="Search..." />
        </div>
    );
}

export default SearchBar;
