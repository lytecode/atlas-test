const _faqs = [
  {'id': 1, 'title': 'What is cionbase', 'response': 'inventory'},
  {'id': 2, 'title': 'How can I get started', 'response': 'inventory'},
  {'id': 3, 'title': 'Contact details', 'response': 'inventory'}
]

export default {
  getFaqs (cb) {
    setTimeout(() => cb(_faqs), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
