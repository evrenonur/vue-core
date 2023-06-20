import { createRouter, createWebHistory } from 'vue-router'
import BodyView from "@/layout/BodyView.vue"
import auth from "@/auth/authView.vue"
import login from "@/auth/loginPage.vue"

import indexDefault from "@/pages/dashboards/indexDefault.vue"
import indexEcommerce from "@/pages/dashboards/indexEcommerce.vue"


import indexGeneral from "@/pages/widgets/indexGeneral.vue"
import indexChart from "@/pages/widgets/indexChart.vue"


import projectList from "@/pages/project/projectList.vue"
import createProject from "@/pages/project/createProject.vue"

import fileManager from "@/pages/filemanager/fileManager.vue"


import kanbanBoard from "@/pages/Kanban/kanbanBoard.vue"


import indexProdect from "@/pages/ecommerce/indexProdect.vue"
import indexCart from "@/pages/ecommerce/indexCart.vue"
import indexCheckout from "@/pages/ecommerce/indexCheckout.vue"
import productPage from "@/pages/ecommerce/productPage.vue"
import indexProductlist from "@/pages/ecommerce/indexProductlist.vue"
import paymentDetail from "@/pages/ecommerce/paymentDetail.vue"
import indexInvoice from "@/pages/ecommerce/indexInvoice.vue"
import indexPricing from "@/pages/ecommerce/indexPricing.vue"
import indexWishlist from "@/pages/ecommerce/indexWishlist.vue"
import addProduct from "@/pages/ecommerce/addProduct.vue"
import indexOrderhistory from "@/pages/ecommerce/indexOrderhistory.vue"


import indexInbox from "@/pages/email/indexInbox.vue"
import indexRead from "@/pages/email/indexRead.vue"
import indexCompose from "@/pages/email/indexCompose.vue"


import indexChat from "@/pages/chat/indexChat.vue"
import indexVideo from "@/pages/chat/indexVideo.vue"


import indexProfile from "@/pages/user/indexProfile.vue"
import indexEdit from "@/pages/user/indexEdit.vue"
import indexCard from "@/pages/user/indexCard.vue"

import indexBookmark from "@/pages/bookmark/indexBookmark.vue"


import indexContact from "@/pages/contacts/indexContact.vue"


import indexTask from "@/pages/task/indexTask.vue"


import indexCalendar from "@/pages/calendar/indexCalendar.vue"


import socialApp from "@/pages/socialApp/socialApp.vue"


import indexTodo from "@/pages/todo/indexTodo.vue"

import indexSearch from "@/pages/search/indexSearch.vue"


import indexValidation from "@/pages/forms/formcontrols/indexValidation.vue"
import indexInputs from "@/pages/forms/formcontrols/indexInputs.vue"
import indexCheckbox from "@/pages/forms/formcontrols/indexCheckbox.vue"
import indexGroups from "@/pages/forms/formcontrols/indexGroups.vue"
import indexMega from "@/pages/forms/formcontrols/indexMega.vue"


import indexDatepicker from "@/pages/forms/formwidgets/indexDatepicker.vue"
import indexTimepicker from "@/pages/forms/formwidgets/indexTimepicker.vue"
import indexDatetimepicker from "@/pages/forms/formwidgets/indexDatetimepicker.vue"
import indexDaterangpicker from "@/pages/forms/formwidgets/indexDaterangpicker.vue"
import indexTouchspin from "@/pages/forms/formwidgets/indexTouchspin.vue"
import indexSelect from "@/pages/forms/formwidgets/indexSelect.vue"
import indexSwitch from "@/pages/forms/formwidgets/indexSwitch.vue"
import indexClipboard from "@/pages/forms/formwidgets/indexClipboard.vue"
import indexTypeahead from "@/pages/forms/formwidgets/indexTypeahead.vue"


import indexDefult from "@/pages/forms/formlayout/indexDeafult.vue"
import formWizard from "@/pages/forms/formlayout/formWizard.vue"
import formWizard2 from "@/pages/forms/formlayout/formWizard2.vue"
import formWizard3 from "@/pages/forms/formlayout/formWizard3.vue"


import indexBootstrap from "@/pages/table/indexBootstrap.vue"
import indexComponent from "@/pages/table/indexComponent.vue"
import indexInit from "@/pages/table/indexInit.vue"


import indexTypography from "@/pages/uikit/indexTypography.vue"
import indexAvatars from "@/pages/uikit/indexAvatars.vue"
import indexHelper from "@/pages/uikit/indexHelper.vue"
import indexGrid from "@/pages/uikit/indexGrid.vue"
import indexTagPills from "@/pages/uikit/indexTagPills.vue"
import indexProgress from "@/pages/uikit/indexProgress.vue"
import indexModal from "@/pages/uikit/indexModal.vue"
import indexAlert from "@/pages/uikit/indexAlert.vue"
import indexPopover from "@/pages/uikit/indexPopover.vue"
import indexTooltip from "@/pages/uikit/indexTooltip.vue"
import indexSpinner from "@/pages/uikit/indexSpinner.vue"
import indezDropdown from "@/pages/uikit/indexDropdown.vue"
import indexAccordion from "@/pages/uikit/indexAccordion.vue"
import bootstrapTabs from "@/pages/uikit/bootstrapTabs.vue"
import lineTabs from "@/pages/uikit/lineTabs.vue"
import indexShadow from "@/pages/uikit/indexShadow.vue"
import indexLists from "@/pages/uikit/indexLists.vue"
import indexToasts from "@/pages/uikit/indexToasts.vue"


import indexScrollable from "@/pages/advance/indexScrollable.vue"
import indexTree from "@/pages/advance/indexTree.vue"
import indexNotify from "@/pages/advance/indexNotify.vue"
import indexDropzone from "@/pages/advance/indexDropzone"
import indexTour from "@/pages/advance/indexTour.vue"
import indexSweetalert from "@/pages/advance/indexSweetalert.vue"
import animationModal from "@/pages/advance/animationModal.vue"
import owlCarousel from "@/pages/advance/owlCarousel.vue"
import indexRibbon from "@/pages/advance/indexRibbon.vue"
import indexPagination from "@/pages/advance/indexPagination.vue"
import indexBreadcrumb from "@/pages/advance/indexBreadcrumb.vue"
import indexRange from "@/pages/advance/indexRange.vue"
import indexCropper from "@/pages/advance/indexCropper.vue"
import indexSticky from "@/pages/advance/indexSticky.vue"
import indexBasiccard from "@/pages/advance/indexBasiccard.vue"

import indexDraggable from "@/pages/advance/indexDraggable.vue"
import indexTimeline from "@/pages/advance/indexTimeline.vue"
import indexRating from "@/pages/advance/indexRating.vue"



import indexAnimate from "@/pages/animation/indexAnimate.vue"
import indexAos from "@/pages/animation/indexAos.vue"


import indexFlag from "@/pages/icon/indexFlag.vue"
import indexFontawesome from "@/pages/icon/indexFontawesome.vue"
import indexIcoicon from "@/pages/icon/indexIcoicon.vue"
import indexThemify from "@/pages/icon/indexThemify.vue"
import indexFeather from "@/pages/icon/indexFeather.vue"
import indexWether from "@/pages/icon/indexWether.vue"


import indexButton from "@/pages/button/indexButton.vue"


import indexApexchart from "@/pages/chart/indexApexchart.vue"
import indexChartist from "@/pages/chart/indexChartist.vue"
import indexGoogle from "@/pages/chart/indexGoogle.vue"


import samplePage from "@/pages/samplepage/samplePage.vue"


import indexInternationalization from "@/pages/internationalization/indexInternationalization.vue"


import errorPage1 from "@/pages/error/errorPage1.vue"
import errorPage2 from "@/pages/error/errorPage2.vue"
import errorPage3 from "@/pages/error/errorPage3.vue"
import errorPage4 from "@/pages/error/errorPage4.vue"
import errorPage5 from "@/pages/error/errorPage5"


import loginSimple from "@/pages/authentication/loginSimple.vue"
import loginImage from "@/pages/authentication/loginImage.vue"
import loginImagetwo from "@/pages/authentication/loginImagetwo.vue"
import loginValidation from "@/pages/authentication/loginValidation.vue"
import loginTooltip from "@/pages/authentication/loginTooltip.vue"
import loginSweetalert from "@/pages/authentication/loginSweetalert.vue"
import registerSimple from "@/pages/authentication/registerSimple.vue"
import registerImage from "@/pages/authentication/registerImage.vue"
import registerVideo from "@/pages/authentication/registerVideo.vue"
import unlockUser from "@/pages/authentication/unlockUser.vue"
import forgetPassword from "@/pages/authentication/forgetPassword.vue"
import resetPassword from "@/pages/authentication/resetPassword.vue"
import maintenanceView from "@/pages/authentication/maintenanceView"


import comingsoonPage from "@/pages/comingsoon/comingsoonPage.vue"
import comingsoonVideo from "@/pages/comingsoon/comingsoonVideo.vue"
import comingsoonImage from "@/pages/comingsoon/comingsoonImage.vue"


import indexGallery from "@/pages/gallery/indexGallery.vue"
import indexGriddesc from "@/pages/gallery/indexGriddesc.vue"
import indexMasonry from "@/pages/gallery/indexMasonry.vue"
import indexMasonarydesc from "@/pages/gallery/indexMasonarydesc.vue"
import hoverGallery from "@/pages/gallery/hoverGallery.vue"


import indexDetail from "@/pages/blog/indexDetail.vue"
import indexSingle from "@/pages/blog/indexSingle.vue"
import indexAddpost from "@/pages/blog/indexAddpost.vue"


import indexFaq from "@/pages/faq/indexFaq.vue"


import cardView from "@/pages/jobsearch/indexCard.vue"
import indexDetails from "@/pages/jobsearch/indexDetails.vue"
import indexApply from "@/pages/jobsearch/indexApply.vue"
import indexList from "@/pages/jobsearch/indexList.vue"


import indexLearning from "@/pages/learning/indexLearning.vue"
import indexCourse from "@/pages/learning/indexCourse.vue"


import googleMap from "@/pages/maps/indexGoogle.vue"
import indexLeaflet from "@/pages/maps/indexLeaflet.vue"


import indexCk from "@/pages/editor/indexCk.vue"
import simpleEditor from "@/pages/editor/simpleEditor.vue"


import indexKnowledgebase from "@/pages/knowledgebase/indexKnowledgebase.vue"
import indexCategory from "@/pages/knowledgebase/indexCategory.vue"
import knowledgebaseDetails from "@/pages/knowledgebase/knowledgebaseDetails.vue"


import indexSupport from "@/pages/support/indexSupport.vue"
import urunler from "@/pages/urunler/urunler.vue";

const routes = [
  {
    path:"/",
    component:BodyView,
    children: [
     {
      path: '',
      name: 'defaultRoot',
      component: indexDefault,
     }
    ]
  },
  {
    path:"/urunler",
    component:BodyView,
    children:[
      {
        path:"",
        name:"index",
        component:urunler
      },

    ]
  },
  {
    path:"/auth",
    component: auth,
    children:[
      {
        path:"login",
        name:"login",
        component:login
      }
    ]
  },
  {
    path:"/dashboards",
    component:BodyView,
    children:[
      {
        path:"default",
        name:"default",
        component:indexDefault
      },
      {
        path:"e-commerce",
        name:"e-commerce",
        component:indexEcommerce
      }
    ]
  },
  {
    path:"/widgets",
    component:BodyView,
    children:[
      {
        path:"general",
        name:"General",
        component:indexGeneral
      },
      {
        path:"Chart",
        name:"indexChart",
        component:indexChart
      }
    ]
  },
  {
    path:"/project",
    component:BodyView,
    children:[
      {
        path:"project-list",
        name:"projectList",
        component:projectList
      },
      {
        path:"create-Project",
        name:"createProject",
        component:createProject
      }
    ]
    },
    {
      path:"/app",
      component:BodyView,
      children:[
        {
          path:"file_manager",
          name:"fileManager",
          component:fileManager
        },
        {
          path:"kanbanBoard",
          name:"kanbanBoard",
          component:kanbanBoard
        },
        {
          path:"chat",
          name:"chatapp",
          component:indexChat
        },
        {
          path:"video-chat",
          name:"videochat",
          component:indexVideo
        },
        {
          path:"bookmark",
          name:"bookmark",
          component:indexBookmark
        },
        {
          path:"contact",
          name:"contact",
          component:indexContact
        },
        {
          path:"todo",
          name:"todo",
          component:indexTodo
        },
       {
         path:"task",
         name:"Task",
         component:indexTask
       },
       {
         path:"calendar",
         name:"calendar",
         component:indexCalendar
       },

      ]
    },
    {
      path:"/ecommerce",
      component:BodyView,
      children:[
        {
          path:"product",
          name:"product",
          component:indexProdect
        },
        {
          path:"cart",
          name:"cart",
          component:indexCart
        },
        {
          path:"checkout",
          name:"checkout",
          component:indexCheckout
        },
        {
          path:"details/:id",
          name:"productPage",
          component:productPage
        },
        {
          path:"productlist",
          name:"peoductlist",
          component:indexProductlist
        },
        {
          path:"payment/details",
          name:"paymentDetail",
          component:paymentDetail
        },
        {
          path:"invoice",
          name:"invoice",
          component:indexInvoice
        },
        {
          path:"pricing",
          name:"Pricing",
          component:indexPricing
        },
        {
          path:"wishlist",
          name:"wishlist",
          component:indexWishlist
        },
        {
          path:"add-product",
          name:"addProduct",
          component:addProduct
        },
        {
          path:"order/history",
          name:"orderhistory",
          component:indexOrderhistory
        }
      ]
    },
    {
      path:"/email",
      component:BodyView,
      children:[
        {
          path:"email-inbox",
          name:"emailInbox",
          component:indexInbox
        },
        {
          path:"read",
          name:"emailread",
          component:indexRead
        },
        {
          path:"email-compose",
          name:'indexCompose',
          component:indexCompose
        }
      ]
    },
    {
      path:"/users",
      component:BodyView,
      children:[
        {
          path:"profile",
          name:"usersprofile",
          component:indexProfile
        },
        {
          path:"edit",
          name:"useredit",
          component:indexEdit
        },
        {
          path:"cards",
          name:"usercard",
          component:indexCard
        }
      ]
    },
    {
      path:"/pages",
      component:BodyView,
      children:[
        {
          path:"social-app",
          name:"sociall-app",
          component:socialApp
        },
        {
          path:"search",
          name:"search",
          component:indexSearch
        },
        {
          path:"buttons",
          name:"Button",
          component:indexButton
        },
        {
          path:"sample-page",
          name:"samplePage",
          component:samplePage
        },
        {
          path:"/pages/faq",
          name:"indexFaq",
          component:indexFaq
        },
        {
          path:"support",
          name:"indexSupport",
          component:indexSupport
        },
        {
          path:"/pages/internationalization",
          name:"Internationalization",
          component:indexInternationalization
        }
      ]
    },
    {
      path:"/form",
      component:BodyView,
      children:[
        {
          path:"validation",
          name:"formvalidation",
          component:indexValidation
        },
        {
          path:"inputs",
          name:"baseinputs",
          component:indexInputs
        },
        {
          path:"checkbox-radio",
          name:"checkbod&radio",
          component:indexCheckbox
        },
        {
          path:"input-groups",
          name:"inputgroup",
          component:indexGroups
        },
        {
          path:"mega-options",
          name:"magaoptions",
          component:indexMega
        },
        {
          path:"touchspin",
          name:"Touchspin",
          component:indexTouchspin
        },
        {
          path:"select2",
          name:"select2",
          component:indexSelect
        },
        {
          path:"switch",
          name:"switch",
          component:indexSwitch
        },
        {
          path:"clipboard",
          name:"Clipboard",
          component:indexClipboard
        },
        {
          path:"default",
          name:"defultform",
          component:indexDefult
        },
        {
          path:"datepicker",
          name:"datepicker",
          component:indexDatepicker
        },
        {
          path:"timepicker",
          name:"timepicker",
          component:indexTimepicker
        },
        {
          path:"date-time",
          name:"datetimepicker",
          component:indexDatetimepicker
        },
        {
          path:"date-range",
          name:"daterangpicker",
          component:indexDaterangpicker
        },
        {
          path:"typeahead",
          name:"Typeahead",
          component:indexTypeahead
        },
        {
          path:"form-wizard",
          name:"formWizard",
          component:formWizard,
        },
        {
          path:"form-wizard-two",
          name:"formWizard2",
          component:formWizard2
        },
        {
          path:"form-wizard-three",
          name:"formWizard3",
          component:formWizard3
        }
      ]
    },
    {
      path:"/table",
      component:BodyView,
      children:[
        {
          path:"basic",
          name:"bootstrap",
          component:indexBootstrap
        },
        {
          path:"/table-components",
          name:"tablecomponent",
          component:indexComponent
        },
        {
          path:"/datatable-basic",
          name:"basicinit",
          component:indexInit
        }
      ]
    },
    {
      path:"/uikits",
      component:BodyView,
      children:[
        {
          path:"typography",
          name:"Typography",
          component:indexTypography
        },
        {
          path:"avatars",
          name:"avatars",
          component:indexAvatars
        },
        {
          path:"helper-classes",
          name:"helperclass",
          component:indexHelper
        },
        {
          path:"grid",
          name:"grid",
          component:indexGrid
        },
        {
          path:"tag-pills",
          name:"TagPills",
          component:indexTagPills
        },
        {
          path:"progress-bar",
          name:"Progress",
          component:indexProgress
        },
        {
          path:"modal",
          name:"modal",
          component:indexModal
        },
        {
          path:"alert",
          name:"alert",
          component:indexAlert
        },
        {
          path:"popover",
          name:"popover",
          component:indexPopover
        },
        {
          path:"tooltip",
          name:"tooltip",
          component:indexTooltip
        },
        {
          path:"loader",
          name:"spinners",
          component:indexSpinner
        },
        {
          path:"dropdown",
          name:"dropdown",
          component:indezDropdown
        },
        {
          path:"accordion",
          name:"Accordion",
          component:indexAccordion
        },
        {
          path:"tabs/bootstraptabs",
          name:"bootstraptabs",
          component:bootstrapTabs
        },
        {
          path:"tabs/line",
          name:"linetabs",
          component:lineTabs
        },
        {
          path:"box-shadow",
          name:"Shadow",
          component:indexShadow
        },
        {
          path:"lists",
          name:"lists",
          component:indexLists
        },
        {
          path:"toasts",
          name:"Toasts",
          component:indexToasts
        }
      ]
    },
    {
      path:"/advance",
      component:BodyView,
      children:[
        {
          path:"scrollable",
          name:"Scrollable",
          component:indexScrollable
        },
        {
          path:"tree",
          name:"tree",
          component:indexTree
        },
        {
          path:"rating",
          name:"rating",
          component:indexRating
        },
        {
          path:"bootstap-notify",
          name:"bootstrapnotify",
          component:indexNotify
        },
        {
          path:"dropzone",
          name:"Dropzone",
          component:indexDropzone
        },
        {
          path:"tour",
          name:"Tour",
          component:indexTour
        },
        {
          path:"sweetalert",
          name:"Sweetalert",
          component:indexSweetalert
        },
        {
          path:"animated-modal",
          name:"animationModal",
          component:animationModal
        },
        {
          path:"owl-carousel",
          name:"owlCarousel",
          component:owlCarousel
        },
        {
          path:"ribbons",
          name:"Ribbon",
          component:indexRibbon
        },
        {
          path:"pagination",
          name:"pagination",
          component:indexPagination
        },
        {
          path:"breadcrumb",
          name:"Breadcrumb",
          component:indexBreadcrumb
        },
        {
          path:"range-slider",
          name:"Rangeslider",
          component:indexRange
        },
        {
          path:"image-cropper",
          name:"imageCropper",
          component:indexCropper
        },
        {
          path:"sticky",
          name:"Sticky",
          component:indexSticky
        },
        {
          path:"basic-card",
          name:"basicCard",
          component:indexBasiccard
        },
        {
          path:"draggable-card",
          name:"Draggable",
          component:indexDraggable
        },
        {
          path:"timeline",
          name:"Timeline",
          component:indexTimeline
        },

      ]
    },
    {
      path:"/animation",
      component:BodyView,
      children:[
        {
          path:"animate",
          name:"Animate",
          component:indexAnimate
        },
        {
          path:"aos-animation",
          name:"aos",
          component:indexAos
        }
      ]
    },
    {
      path:"/icons",
      component:BodyView,
      children:[
        {
          path:"flag",
          name:"flagicons",
          component:indexFlag
        },
        {
          path:"fontawesome",
          name:"Fontawesome",
          component:indexFontawesome
        },
        {
          path:"ico",
          name:"Icoicon",
          component:indexIcoicon
        },
        {
          path:"themify",
          name:"Themify",
          component:indexThemify
        },
        {
          path:"feather_icon",
          name:"Feather",
          component:indexFeather
        },
        {
          path:"whether",
          name:"indexWether",
          component:indexWether
        }
      ]
    },
    {
      path:"/chart",
      component:BodyView,
      children:[
        {
          path:"apexChart",
          name:"Apexchart",
          component:indexApexchart
        },
        {
          path:"chartist",
          name:"indexChartist",
          component:indexChartist
        },
        {
          path:"google",
          name:"Googlechart",
          component:indexGoogle
        }
      ]
    },
    {
      path:"/error-page1",
      name:"errorPage1",
      component:errorPage1
    },
    {
      path:"/error-page2",
      name:"errorPage2",
      component:errorPage2
    },
    {
      path:"/error-page3",
      name:"errorPage3",
      component:errorPage3
    },
    {
      path:"/error-page4",
      name:"errorPage4",
      component:errorPage4
    },
    {
      path:"/error-page5",
      name:"errorPage5",
      component:errorPage5
    },
    {
     path:"/authentication/simple",
     name:"loginsimple",
     component:loginSimple
    },
    {
      path:"/authentication/login/one",
      name:"loginimage",
      component:loginImage
    },
    {
      path:"/authentication/login/two",
      name:"loginImagetwo",
      component:loginImagetwo
    },
    {
      path:"/authentication/login/validate",
      name:"loginValidation",
      component:loginValidation
    },
    {
      path:"/authentication/login/tooltip",
      name:"loginTooltip",
      component:loginTooltip
    },
    {
      path:"/authentication/login/sweetalert",
      name:"loginSweetalert",
      component:loginSweetalert
    },
    {
      path:"/auth/register",
      name:"registerSimple",
      component:registerSimple
    },
    {
      path:"/authentication/register/image",
      name:"registerImage",
      component:registerImage
    },
    {
      path:"/authentication/register/video",
      name:"registerVideo",
      component:registerVideo
    },
    {
      path:"/authentication/unlockuser",
      name:"unlockUser",
      component:unlockUser
    },
    {
      path:"/authentication/forgetpassword",
      name:"forgetPassword",
      component:forgetPassword
    },
    {
      path:"/authentication/creat-password",
      name:"resetPassword",
      component:resetPassword
    },
    {
      path:"/authentication/maintenance",
      name:"maintenanceView",
      component:maintenanceView
    },
    {
      path:"/comingsoon/comingsoon-simple",
      name:"comingsoonPage",
      component:comingsoonPage
    },
    {
      path:"/comingsoon/comingsoon-video",
      name:"comingsoonVideo",
      component:comingsoonVideo
    },
    {
      path:"/comingsoon/comingsoon-image",
      name:"comingsoonImage",
      component:comingsoonImage
    },
    {
      path:"/gallery",
      component:BodyView,
      children:[
        {
          path:"grid-gallery",
          name:"indexGallery",
          component:indexGallery
        },
        {
          path:"gallery-desc",
          name:"indexGriddesc",
          component:indexGriddesc
        },
        {
          path:"gallery-masonary",
          name:"indexMasonry",
          component:indexMasonry
        },
        {
          path:"gallery-masonary-desc",
          name:"indexMasonarydesc",
          component:indexMasonarydesc
        },
        {
          path:"hover-effect",
          name:"hoverGallery",
          component:hoverGallery
        }
      ]
    },
    {
      path:"/blog",
      component:BodyView,
      children:[
          {
            path:"details",
            name:"blogDetail",
            component:indexDetail
          },
          {
            path:"single",
            name:"blogSingle",
            component:indexSingle
          },
          {
            path:"add-post",
            name:"Addpost",
            component:indexAddpost
          }
      ]
    },
    {
      path:"/job",
      component:BodyView,
      children:[
        {
          path:"card",
          name:"Cardview",
          component:cardView
        },
        {
          path:"/job/details/:id",
          name:"jobdetails",
          component:indexDetails,
          props:true
        },
        {
          path:"apply/:id",
          name:"jobapply",
          component:indexApply
        },
        {
          path:"list",
          name:"indexList",
          component:indexList
        }
      ]
    },
    {
      path:"/learning",
      component:BodyView,
      children:[
        {
          path:"list",
          name:"Learninglist",
          component:indexLearning
        },
        {
          path:"details/:id",
          name:"coursedetailed",
          component:indexCourse
        }
      ]
    },
    {
      path:"/maps",
      component:BodyView,
      children:[
        {
          path:"vue-google-maps",
          name:"googlemaps",
          component:googleMap
        },
        {
          path:"vue-leaflet-maps",
          name:"indexLeaflet",
          component:indexLeaflet
        }
      ]
    },
    {
      path:"/editor",
      component:BodyView,
      children:[
        {
          path:"ck-editor",
          name:"ckeditor",
          component:indexCk
        },
        {
          path:"simple-editor",
          name:"simpleEditor",
          component:simpleEditor
        }
      ]
    },
    {
      path:"/knowledgebase",
      component:BodyView,
      children:[
        {
          path:"knowledgebase",
          name:"indexKnowledgebase",
          component:indexKnowledgebase
        },
        {
          path:"knowledge-category",
          name:"indexCategory",
          component:indexCategory
        },
        {
          path:"knowledge-detail",
          name:"knowledgebaseDetails",
          component:knowledgebaseDetails
        }
      ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {

    const  path = ['/auth/login','/auth/register'];
    if (path.includes(to.path) || localStorage.getItem('token')  ){
      return next();
    }
    next('/auth/login');
  });


export default router
