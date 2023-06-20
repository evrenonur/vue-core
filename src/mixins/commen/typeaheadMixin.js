const typeaheadMixin = {
    created() {
		this.listFiltered = this.list;
	},
	data() {
		return {
			options: {
				placeholder: 'States of USA',
				minInputLength: 1,
			},
			list: ['alabama',
          'alaska',
          'arizona',
          'arkansas',
          'california',
          'colorado',
          'connecticut',
          'delaware',
          'florida',
          'georgia',
          'hawaii',
          'idaho',
          'illinois',
          'indiana',
          'iowa',
          'kansas',
          'kentucky',
          'louisiana',
          'maine',
          'maryland',
          'massachusetts',
          'michigan',
          'minnesota',
          'mississippi',
          'missouri',
          'montana',
          'nebraska',
          'nevada',
          'new hampshire',
          'new jersey',
          'new mexico',
          'new york',
          'north carolina',
          'north dakota',
          'ohio',
          'oklahoma',
          'oregon',
          'pennsylvania',
          'rhode island',
          'south carolina',
          'south dakota',
          'tennessee',
          'texas',
          'utah',
          'vermont',
          'virginia',
          'washington',
          'west virginia',
          'wisconsin',
          'wyoming'
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
   
}
  
  export default typeaheadMixin