import React, { useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ContactForm({data,setData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [tags, setTags] = useState([""]);
  // const [data,setData]=useLocalStorage("todos")
  console.log(data,"todo")
  const handleAddTag = () => {
    setTags([...tags, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      id: Date.now(),
      name,
      email,
      favorite,
      tags,
    };
    setData([...data, newData]);
    console.log(newData, "New Data");
  };
  return (
    <div style={{ border: "1px solid black", maxWidth: "50%", margin: "auto" }}>
      <h1>ContactForm</h1>
      <form
        style={{ display: "grid", gap: "10", padding: "30px" }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span>Name</span>
          <input
            placeholder="enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <span>Email</span>
          <input
            placeholder="enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

          <div>
      <label>Tags</label>
      {tags.map((tag, index) => (
        <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <input
            type="text"
            placeholder="Enter tag"
            value={tag}
            onChange={(e) =>
              setTags(tags.map((t, i) => (i === index ? e.target.value : t)))
            }
            style={{ flex: 1, padding: "6px" }}
          />
          <button
            type="button"
            onClick={() => setTags(tags.filter((_, i) => i !== index))}
            style={{ background: "red", color: "white", border: "none", padding: "6px" }}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddTag} style={{ marginTop: "4px" }}>Add Tag</button>
    </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <span>Favorite</span>
          <input
            placeholder="enter Email"
            type="checkbox"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
          />
        </div>

        <div style={{ display: "flex", gap: "10" }}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
