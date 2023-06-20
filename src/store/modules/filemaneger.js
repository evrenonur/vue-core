import filemaneger from "@/data/filemaneger.json"

const state = {
   
    folders: filemaneger.folders,
    Files : filemaneger.Files
   
};

export default {
    namespaced: true,
    state,
}
