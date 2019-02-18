import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  variant: String,
  toggleable: {
    type: [Boolean, String],
    default: false,
    validator: val => [false, true, 'sm', 'md', 'lg', 'xl'].includes(val)
  },
  fixed: String,
  sticky: Boolean,
  print: Boolean
}

export default {
  name: 'CNavbar',
  functional: true,
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'navbar',
        class: [
          props.light ? 'navbar-light' : 'navbar-dark',
          props.toggleable !== true ?
            props.toggleable ?
              `navbar-expand-${props.toggleable}` :
              'navbar-expand':
            '', 
          {
            'd-print': props.print,
            'sticky-top': props.sticky,
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`fixed-${props.fixed}`]: Boolean(props.fixed),
          }
        ],
        attrs: {
          role: props.tag === 'nav' ? null : 'navigation'
        }
      }),
      children
    )
  }
}
