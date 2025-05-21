import { useCallback, useEffect, useState } from 'react'
import debounce from '../utils/debounce';
import highlight from '../utils/highlight';
import throttle from '../utils/throttle';

const users=[
  { id: 1, name: { first: "John", last: "Doe" }, email: "john.doe@example.com" },
  { id: 2, name: { first: "Jane", last: "Smith" }, email: "jane.smith@example.com" },
  { id: 3, name: { first: "Michael", last: "Brown" }, email: "mike.b@example.com" },
  { id: 4, name: { first: "Emily", last: "White" }, email: "emily.white@example.com" },
];

export default function LiveSearch() {
const [query,setQuery]=useState("");
const [results,setResults]=useState([]);
const deepSearch=(obj,keyword)=>{
    const flat=JSON.stringify(obj).toLowerCase();
    return flat.includes(keyword.toLowerCase());
}
const handleSearch=useCallback(
    debounce((input)=>{
        const filtered=users.filter((user)=>deepSearch(user,input))
        setResults(filtered)
    },300),[]
)

const onInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  useEffect(() => {
    const handleResizeScroll = throttle(() => {
      console.log("Window resized or scrolled:", new Date().toLocaleTimeString());
    }, 1000);

    window.addEventListener("resize", handleResizeScroll);
    window.addEventListener("scroll", handleResizeScroll);
    return () => {
      window.removeEventListener("resize", handleResizeScroll);
      window.removeEventListener("scroll", handleResizeScroll);
    };
  }, []);
  return (
    <div style={{ position: "relative", width: "300px" }}>
        <input
        type="text"
        value={query}
        onChange={onInputChange}
        placeholder="Search..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      {query && (
        <div style={{
          position: "absolute", top: "42px", left: 0, right: 0,
          background: "#fff", border: "1px solid #ccc", maxHeight: "200px",
          overflowY: "auto", zIndex: 1000
        }}>
          {results.length > 0 ? results.map(user => (
            <div key={user.id} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
              <div dangerouslySetInnerHTML={{ __html: highlight(`${user.name.first} ${user.name.last}`, query) }} />
              <div style={{ fontSize: "12px" }} dangerouslySetInnerHTML={{ __html: highlight(user.email, query) }} />
            </div>
          )) : (
            <div style={{ padding: "10px" }}>No results found</div>
          )}
        </div>
      )}
    </div>
  )
}
