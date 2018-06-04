let events = {
  created () {
    window.Bus.$on('events', ({ type, data, code }) => {
      if (typeof data !== 'object') {
        throw new Error('Bus events error: data must be object !')
      }

      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    })
  }
}

export default events
