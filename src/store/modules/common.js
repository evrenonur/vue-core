import project from "@/data/project.json"
import bookmark from "../../data/bookmark.json"

const state = {
   
    allprojects: project.all,
    doingprojects : project.Doing,
	doneprojects : project.Done,
    bookmark : bookmark.data,
   
};

export default {
    namespaced: true,
    state,
}
