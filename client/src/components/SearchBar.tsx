interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <section className="search-container">
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for your favorite dishes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
