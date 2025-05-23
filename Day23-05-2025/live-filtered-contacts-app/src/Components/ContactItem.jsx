import React from 'react'

export default function ContactItem({ id, name, email, favorite, tags }) {
  // console.log(id, name, email, favorite, tags, "ContactItem");
  return (
    <div style={{ padding:"2rem" ,border:"1px solid grey"}}  key={id}>
      <h1>ContactItem</h1>
      <h2 style={{ color: favorite ? "green" : "red" }}>{name}</h2>
      <p >{email}</p>
      <p>Favorite: {favorite ? "Yes" : "No"}</p>
      <p style={{ fontWeight: "bold" }} >Tags: {tags.join(", ")}</p>
    </div>
  )
}
