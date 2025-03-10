type SearchBarProps = {
    defaultValue: string;
    name: string;
    placeholder?: string;
}

const SearchBar = ({ defaultValue, name, placeholder  }:SearchBarProps) => {
    return (
        <input
            type={"text"}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            className={"border border-gray-300 rounded p-2 autofill:bg-yellow-200"}
        />
    );
};

export default SearchBar;
