interface SearchBarProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}
export default function SearchBar({setSearch}: SearchBarProps){
    return(
        <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Digite aqui a sua cidade"
        className="w-full p-2 text-[var(--search-list-border)] font-semibold rounded-lg text-center bg-[var(--search-list-bg)] focus:outline-cyan-800 focus:border-0 border-0"
      />
    )
}