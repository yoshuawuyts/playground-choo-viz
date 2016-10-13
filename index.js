const choo = require('choo')
const html = require('choo/html')

const app = choo()
app.router(['/', view])

app.model({
  state: { title: 'green' },
  reducers: {
    update: (state, data) => ({ title: data })
  }
})

const tree = app.start()
document.body.appendChild(tree)

function view (state, prev, send) {
  console.log('calllleeeeddd!')
  console.log(state.title)
  return html`<div>
    <h1>Title: ${state.title}</h1>
    <input
      type="text"
      oninput=${(e) => send('update', e.target.value)} />
      <svg width="150" height="100"  viewBox="0 0 3 2">
        <rect width="1" height="2" x="0" fill="${state.title}" />
   </svg>
    </div>`
}
