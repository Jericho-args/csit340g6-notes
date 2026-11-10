  const [search, setSearch] = useState('')
    const visibleNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  )
            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title"
            className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
          />
                    {visibleNotes.map((note) => (
                                {visibleNotes.length === 0 && (
          <p className="text-lg text-[#949494]">No notes found</p>
        )}