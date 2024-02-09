<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="displayedData"
      :items-per-page="10" 
      hide-default-footer
      class="table mx-auto"
    >
        <template v-slot:item.period='{item}'>
        	<div @click='showLinks(item)' class="cursor-pointer">
        	    {{item.period}}
        	</div>
        </template>
        <template v-slot:item.periodType='{item}'>
        	<div @click='showLinks(item)' class="cursor-pointer">
        	    {{item.periodType}}
        	</div>
        </template>
        <template v-slot:bottom>
            <v-pagination
                v-if="totalPages > 1"
                v-model="page"
                :length="totalPages"
                @update:modelValue="updatePage"
                rounded="circle"
                class="width-v-pagination mx-auto pt-8"
            >
            </v-pagination>
        </template>
    </v-data-table>
    <modalMessage/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            dataAPI: [],
            filteredData: [], 
            headers: [
                { key: 'period', title: 'periods',sortable: false},
                { key: 'periodType', title: 'periodTypes',sortable: false },
            ],
            page: 1, 
            totalPages: 0, 
            filterValue: ''
        };
    },
    watch: {
        '$store.state.manager': {
            handler(dataSearch) {
                this.filteredData = this.dataAPI.filter(item => item.periodType.includes(dataSearch));
                this.totalPages = Math.ceil(this.filteredData.length / 10); 
                this.page = 1; 
            },
            deep: true
        }
    },
    computed: {
    	displayedData() {
    		const startIndex = (this.page - 1) * 10;
    		const endIndex = startIndex + 10;
    		return this.filteredData.slice(startIndex, endIndex);
    	}
    },
    mounted() {
    	this.getDataFromAPI(); 
    },
    methods: {
    	showLinks(dataLinks){
    		const allLinks = Object.values(dataLinks.links).join(', ');
    		this.$bus.$emit('dataModalWindow',{
    			status:'Всі посилання.',
    			textMessage: allLinks
    		});
    	},
    	async getDataFromAPI() {
    		try {
    			const response = await axios.get('https://data.jsdelivr.com/v1/stats/periods');
    			this.dataAPI = response.data;
    			this.filteredData = this.dataAPI;
    			this.totalPages = Math.ceil(this.filteredData.length / 10);
    		} catch (error) {
    			console.error('Ошибка при загрузке данных:', error);
    		}
    	},
    	updatePage(newValue) {
    		this.page = newValue; 
    	}
    }
}
</script>
<style lang="scss">
@import '~/scss/mainColors.scss';
.table{
    width: 300px;
    height: 666px;
    background: $main-background;
}
.width-v-pagination{
    width: 264px;
}
.v-data-table-header__content{
    justify-content: center;
}
.v-table  td{
    text-align: center;
}
.v-table thead{
    background: darkgrey;
}
@media screen and (min-width: 768px){
    .table{
        width: 600px;
    }
    .width-v-pagination{
        width: 288px;
    }
}
@media screen and (min-width: 1024px){
    .table{
        width: 1000px;
    }
}
</style>