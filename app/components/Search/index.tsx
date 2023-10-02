interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchBar({ setSearch }: SearchBarProps) {
  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search by city (e.g.: São Paulo, Paris, London...)"
      className="w-full bg-transparent focus:outline-none border-2 border-cyan-800/50 focus:border-cyan-800 hover:border-cyan-800 text-center py-2 px-4 rounded-lg transition-colors"
    />
  );
}
