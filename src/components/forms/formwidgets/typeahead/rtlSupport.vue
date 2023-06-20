<template>
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header pb-0">
				<h4>RTL Support</h4><span>Dataset shows in Right Side.</span>
			</div>
			<div class="card-body">
				<div id="rtl-support">
					<form class="theme-form">
						<div>
							<vue3-simple-typeahead :items="list" class="form-control typeahead form-control" dir="rtl"
								:placeholder="options.placeholder" @selectItem="selectItem" @onInput="onInput"
								@onBlur="onBlur" :minInputLength="options.minInputLength" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created() {
		this.listFiltered = this.list;
	},
	data() {
		return {
			options: {
				placeholder: 'Countries',
				minInputLength: 1,
			},
			list: [ "India",
        "USA",
        "Australia",
        "UEA",
        "China"
			],
			listFiltered: [],
		};
	},
	methods: {
		selectItem(item) {
			this.data.selection = item;
		},
		onInput(event) {
		
			this.listFiltered = event.items;
		},
		onBlur(event) {
		
			this.listFiltered = event.items;
		},
	},
};
</script>