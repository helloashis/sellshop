<template>
    <div>
        <div class="pages-title section-padding" style="background: rgba(0, 0, 0, 0) url(../assets/img/page-bg.png) repeat scroll 0 0;">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="pages-title-text text-center">
							<h2>Login</h2>
							<ul class="text-left">
								<li><router-link to="/">Home </router-link></li>
								<li><span> // </span>Login</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        <section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="main-input padding60">
							<div class="log-title">
								<h3><strong>Login For registered customers</strong></h3>
							</div>
							<div class="login-text">
								<div class="custom-input">
									<p>If you have an account with us, Please log in!</p>
									<form action="" method="post" @submit.prevent="userLogin()">
										<input type="text" v-model="form.email" placeholder="Email">
										<input type="password" v-model="form.password" placeholder="Password">
										<a class="forget" href="#">Forget your password?</a>
										<div class="submit-text">
											<button type="submit">login</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
import UserDashboardVue from '../user/UserDashboard.vue';
export default {
    name:'UserLogin',
    data(){
        return{
            form:{},
        }
    },
    methods:{
        userLogin(){
            axios.post('/login', this.form)
            .then((result)=>{
                this.$router.push({name:'userdashboard'});
            }).catch((error)=>{
                console.log(error);
                this.errors = this.error.response.data.errors
            })
        },

    }
}
</script>

<style>

</style>