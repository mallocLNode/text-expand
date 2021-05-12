import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  Image,
  // ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  // TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  // Alert,
  // Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  // Rate,
  Steps,
  Step,
  // Carousel,
  // CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  // ColorPicker,
  // Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

// 默认关闭Dialog一些点击modal层关闭, 右上角close按钮, 和 按esc退出功能
Dialog.props.closeOnClickModal.default = false
Dialog.props.showClose.default = false
Dialog.props.closeOnPressEscape.default = false

// 跳转分页默认样式和文案
Pagination.props.prevText = {
  type: String,
  default: '往前'
}
Pagination.props.nextText = {
  type: String,
  default: '往后'
}
Pagination.props.layout.default =
  'slot, total, sizes, ->, prev, pager, next, jumper'

Form.props.labelSuffix.default = ':'

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 }

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
//   Vue.use(ButtonGroup);
Vue.use(Table)
Vue.use(Image)
Vue.use(TableColumn)
Vue.use(DatePicker)
//   Vue.use(TimeSelect);
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
//   Vue.use(Alert);
//   Vue.use(Slider);
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Badge)
Vue.use(Card)
//   Vue.use(Rate);
Vue.use(Steps)
Vue.use(Step)
//   Vue.use(Carousel);
//   Vue.use(CarouselItem);
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
//   Vue.use(ColorPicker);
//   Vue.use(Transfer);
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading.directive)

// Vue.prototype.$loading = options => {
//   Loading.service({
//     ...options,
//     background: 'rgba(0, 0, 0, 0.7)'
//   })
// }

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm

// confirm 默认关闭右上角close 和 点击modal层关闭
Vue.prototype.$confirm = (message, title, options) => {
  return MessageBox.confirm(message, title, {
    showClose: false,
    closeOnClickModal: false,
    ...options
  })
}
// 不要注释，我要用
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
