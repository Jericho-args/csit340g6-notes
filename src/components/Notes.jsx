function Notes() {
  const [notes, setNotes] = useState([ ... ])
  const [form, setForm] = useState({ title: '', body: '' })

  function handleChange(e) { ... }
  function handleSubmit(e) { ... }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <section className="mx-auto max-w-2xl p-4">
      <ul className="space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="relative rounded-lg border border-[#e6e6e6] p-4 shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-[#333]">{note.title}</h2>
            <p className="text-[#666]">{note.body}</p>
            <button
              type="button"
              onClick={() => handleDelete(note.id)}
              className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
            >
              ×
            </button>
          </li>
        ))}
</button>
        </ul>
        {notes.length === 0 && (
          <p className="text-lg text-[#949494]">No notes found</p>
        )}
      </section>