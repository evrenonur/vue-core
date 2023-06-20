<template>
      <div class="modal fade modal-bookmark" id="printModal"  tabindex="-1" role="dialog" aria-hidden="true" :key="index">
      <!-- <div class="modal fade modal-bookmark" id="printModal"   tabindex="-1" role="dialog" aria-hidden="true" v-for="(contact, index) in contacts" :key="index"> -->
                            <div class="modal-dialog modal-dialog-centered" role="document" :id="contact.id">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title">Print preview</h5>
                                  <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body list-persons">
                                  <div class="profile-mail pt-0"  id='DivIdToPrint'>
                                    <div class="d-flex"><img class="img-100 img-fluid m-r-20 rounded-circle" id="updateimg" :src="contact.imgUrl||getImgUrl(contact.image)" alt="">
                                      <div class="flex-grow-1  mt-0">
                                        <h5><span id="printname">{{contact.name1}}</span> <span id="printlast">{{contact.name2}}</span></h5>
                                        <p id="printmail">{{contact.email}}</p>
                                      </div>
                                    </div>
                                    <div class="email-general">
                                      <h6>General</h6>
                                      <p>Email Address: <span class="font-primary" id="mailadd">{{contact.email}}   </span></p>
                                    </div>
                                  </div>
                                  <button class="btn btn-secondary" id="btnPrint" type="button" onclick="printDiv();">Print</button>
                                  <button class="btn btn-primary ms-2" type="button" data-bs-dismiss="modal">Cancel</button>
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
      contacts:(state)=>state.contacts.personal,
      contact:(state)=>state.contacts.selectedContact
    }),
  },
   methods:{
     
   },
}
</script>