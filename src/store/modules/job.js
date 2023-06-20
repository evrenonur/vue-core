import job from "../../data/job.json"


const state = {
	job : job.job,
	jobs : job.jobs,
	data:job.data
};

export default {
	namespaced: true,
	state,
	
};