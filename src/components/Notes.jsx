  const [form, setForm] = useState({ title: '', body: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
            <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
          />
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Write your note"
            className="h-[120px] w-full resize-none py-3 border border-[#e6e6e6] px-4 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
          />