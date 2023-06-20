import { createStore } from 'vuex'
import menu from "./modules/menu"
import layout from "./modules/layout"
import dashbord from "./modules/dashbord"
import widget from "./modules/widget"
import common from "./modules/common"
import filemaneger from "./modules/filemaneger"
import kanban from "./modules/kanban"
import products from "./modules/products"
import ecommerce from "./modules/ecommerce"
import productlist from "./modules/productlist"
import order from "./modules/order"
import email from "./modules/email"
import chat from "./modules/chat"
import users from "./modules/users"
import social from "./modules/social"
import masonry from "./modules/masonry"
import contacts from "./modules/contacts"
import todo from "./modules/todo"
import bootstrap from "./modules/bootstrap"
import datatable from "./modules/datatable"
import owlcarousel from "./modules/owlcarousel"
import ribbon from "./modules/ribbon"
import pagination from "./modules/pagination"
import card from "./modules/card"
import blog from "./modules/blog"
import faq from "./modules/faq"
import job from "./modules/job"
import courses from "./modules/courses"
import knowledgebase from "./modules/knowledgebase"
import support from "./modules/support"
import task from "./modules/task"
import scrollable from "./modules/scrollable"
import language from "./modules/language"
import auth from "@/store/modules/auth";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    menu,
    layout,
    dashbord,
    widget,
    common,
    filemaneger,
    kanban,
    products,
    ecommerce,
    productlist,
    order,
    email,
    chat,
    users,
    social,
    masonry,
    contacts,
    todo,
    bootstrap,
    datatable,
    owlcarousel,
    ribbon,
    pagination,
    card,
    blog,
    faq,
    job,
    courses,
    knowledgebase,
    support,
    task,

    scrollable,
    language
  }
})
