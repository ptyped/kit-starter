document.querySelector('body').addEventListener('submit', function (e) {
  if (e.target && e.target.type === "form") {
    /* 
        On form submit, add hidden inputs for checkboxes so the server knows if
        they've been unchecked. This means we can automatically store and update
        all form data on the server, including checkboxes that are checked, then
        later unchecked.
    */

    const checkboxes = document.querySelector('input[type=checkbox]')
    const inputs = []
    const names = {}

    checkboxes.forEach(c => {
      const name = c.getAttribute('name')

      if (!names[name]) {
        const hidden = document.createElement("input")

        hidden.setAttribute('type', 'hidden')
        hidden.setAttribute('name', name)
        hidden.setAttribute('value', '_unchecked')
        names[name] = true

        inputs.push(hidden)
      }
    })

    e.target.prepend(inputs)
  }
})