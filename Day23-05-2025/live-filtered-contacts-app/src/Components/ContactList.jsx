import ContactItem from './ContactItem';

export default function ContactList({data}) {
  // const [data, setData] = useLocalStorage("todos");
  console.log(data, "todo");
  return (
    <div style={{display:"grid",padding:"2rem", gridTemplateColumns:"auto auto auto auto ",gridGap:"1rem",alignItems:"center",justifyContent:"center"}} >
      {data.length === 0 ? (
        <p>No record added</p>
      ) : (
        data.map((item) => (
          <ContactItem key={item.id} {...item} />
        ))
      )}
    </div>
  )
}
