import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CCardGroup',
  props: {
    tag: String,
    deck:  Boolean,
    columns: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: `card-${props.columns ? 'columns' : props.deck ? 'deck' : 'group'}`
      }),
      children
    )
  }
}
