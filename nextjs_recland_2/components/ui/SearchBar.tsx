export default function SearchBar() {
    return (
        // <!-- Search Console Row -->
        <div className="sh-search-row">
            <div className="sh-search-box-wrapper">
                <input type="search" className="sh-search-input" name="search" autoComplete="off" value=""
                    placeholder="Tìm kiếm việc làm, công ty, kỹ năng..." />
                <button type="submit" className="sh-search-btn">Tìm kiếm</button>
            </div>
        </div>
    );
}