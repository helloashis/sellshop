<template>
    <div>
        <div class="pages-title section-padding" style="background: rgba(0, 0, 0, 0) url(assets/img/page-bg.png) repeat scroll 0 0;">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="pages-title-text text-center">
							<h2>Registar</h2>
							<ul class="text-left">
								<li><router-link to="/">Home </router-link></li>
								<li><span> // </span>Registar</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        <section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="main-input padding60 new-customer">
							<div class="log-title">
								<h3><strong>new customers</strong></h3>
							</div>
                            {{ errors }}
							<div class="custom-input">
								<form action="" method="post" @submit.prevent="userRegistar()" >
									<input type="text" v-model="form.name" placeholder="Name here.." >
                                    <div class="alert alert-danger" v-if="errors['name']">{{ errors['name'] }}</div>
									<input type="text" v-model="form.email" placeholder="Email Address..">
                                    <div class="alert alert-danger" v-if="errors['email']">{{ errors['email'] }}</div>
									<input type="text" v-model="form.phone" placeholder="Phone Number..">
                                    <div class="alert alert-danger" v-if="errors['phone']">{{ errors['phone'] }}</div>
									<input type="text" v-model="form.address" placeholder="Address..">
                                    <div class="alert alert-danger" v-if="errors['address']">{{ errors['address'] }}</div>
									<input type="password" v-model="form.password" placeholder="Password">
                                    <div class="alert alert-danger" v-if="errors['password']">{{ errors['password'] }}</div>
									<input type="password" v-model="form.password_confirmation" placeholder="Confirm Password">
                                    <div class="alert alert-danger" v-if="errors['password_confirmation']">{{ errors['password_confirmation'] }}</div>
									<label class="first-child">
										<input type="radio" v-model="form.newsletter" value="1">
										Sign up for our newsletter!
									</label>
									<div class="submit-text coupon">
                                        <button type="submit">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>

export default {
    name:"UserRegister",
    data(){
        return{
            errors:{},
            form: {
                },

        }
    },
    methods:{
        
        userRegistar(){
            axios.post('/register', this.form)
            .then((result)=>{
                console.log(result);
            }).catch((error)=>{
                console.log(error);
                this.errors = this.error.response.data.errors
            })
        }

    }

}
</script>

<style>

</style>