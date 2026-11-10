  function handleSubmit(e) {
    e.preventDefault()
    const title = form.title.trim()
    const body = form.body.trim()
    if (title === '' || body === '') return

    setNotes([...notes, { id: crypto.randomUUID(), title, body }])
    setForm({ title: '', body: '' })
  }
          <form onSubmit={handleSubmit} className="grid gap-3"></form>