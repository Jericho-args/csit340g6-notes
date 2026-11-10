  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }
                <button
                type="button"
                onClick={() => handleDelete(note.id)}
                className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
              >
                ×
              </button>