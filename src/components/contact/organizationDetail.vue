<template>
     <div class="col-xl-8 xl-50 col-md-7 box-col-6">
                                    <div class="tab-content" id="v-pills-tabContent1">
                                      <div class="tab-pane fade " :class="contact.active" :id="'v-pills-iduser'+contact.id"  role="tabpanel" aria-labelledby="v-pills-iduser-tab" v-for="(contact,index) in contacts" :key="index">
                                        <div class="profile-mail">
                                          <div class="d-flex"><img class="img-100 img-fluid m-r-20 rounded-circle update_img_5" :src="getImgUrl(contact.image)" alt="">
                                            <div class="flex-grow-1 mt-0">
                                              <h5><span class="first_name_5">{{contact.name1}}</span>  <span class="last_name_5">{{contact.name2}}</span></h5>
                                              <p class="email_add_5">{{contact.email}}</p>
                                              <ul>
                                                <li><a href="javascript:void(0)" onclick="printContact(5)" data-bs-toggle="modal" data-bs-target="#printModal" @click="()=>{this.$store.dispatch('contacts/setSelectedContact',contact)}">Print</a></li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div class="email-general">
                                            <h6>General</h6>
                                            <p>Email Address: <span class="font-primary email_add_5">{{contact.email}}</span></p>
                                            <div class="gender">
                                              <h6>Personal</h6>
                                              <p>Gender: <span>{{contact.gender}}</span></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
   components:{
   },
     computed: {
    ...mapState({
      contacts:(state)=>state.contacts.organization,
         
    }),
  },
   methods:{ 
        basic_warning_alert:function(){
        this.$swal({
            icon: 'warning',
            title:"Are you sure?",
          text:'This contact will be deleted from your Personal Contacts and from the chat list too.',
          showCancelButton: true,
           cancelButtonText: 'Cancel',
           confirmButtonText: 'Ok',
           
            confirmButtonColor: 'var(--theme-deafult)',
        }).then((result)=>{
          if(result.value){
            this.$swal({
             icon: 'success',
              text:'Poof! Your imaginary file has been deleted!',
              type:'success',
            
            });
          }else{
            this.$swal({
              text:'Your contact is safe!',
               confirmButtonColor: 'var(--theme-deafult)',
            });
          }
        });
      },
   }
}
</script>