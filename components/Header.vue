<template>
    <v-container  class='container-header'>
        <v-row no-gutters class='v-row-header'>
    	    <v-col class='v-col-logo d-flex align-center'>
    	        LOGO
    	    </v-col>
            <v-col class='v-col-search'>
                <v-text-field 
                    class='field-search'
                    type="text" 
                    v-model="filterValue" 
                    placeholder="Пощук по periodTypes"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
	export default{
		data(){
			return{
				filterValue:''
			}
		},
		watch: {
			filterValue() {
				this.$store.state.manager=this.filterValue
			}
		}
	}
</script>
<style lang="scss">
@import '~/scss/mainColors.scss';
.v-row-header{
	display: flex;
	flex-direction: column;
}
.v-col-logo{
	margin: 0 auto;
    justify-content: center;
}
.v-col-search{
	margin-top: 30px;
}
.field-search .v-input__control{
	background: $main-background;
	width: 300px;
	margin: 0 auto;
}
@media screen and (min-width: 1024px){
	.v-row-header{
		flex-direction: row;
	}
	.v-col-search{
		margin-top: 0;
	}
	.field-search{
		justify-content: flex-end;
		display: flex;
	}
	.field-search .v-input__control{
		margin: 0;
	}
	.v-text-field .v-input__details{
		display: none;
	}
	.v-col-logo{
		justify-content: start;
	}
	.container-header{
		max-width: 900px;
	}
}
</style>