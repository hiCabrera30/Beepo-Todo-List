<template>
    <div>
        <guest-header></guest-header>

        <div class="h-64 bg-blue-500 w-screen">
        </div>
        <div class="-mt-36 h-auto flex flex-col space-y-10 justify-center items-center">
            <div class="login-pane">
                <h1 class="text-5xl font-medium mb-3">Log in</h1>
                <p class="text-sm text-gray-500">Log in to get started</p>
                
                <form class="space-y-5 mt-5" @submit.prevent="submit">
                    <form-input type="text" placeholder="Email"  v-model="form.email" ref="email" ></form-input>
                    <form-input type="password" placeholder="Password"  v-model="form.password" ref="password" ></form-input>

                    <div v-if="responseErrorMessage" class="error-message">
                        <i class="fas fa-exclamation-triangle icon"></i>
                        <span class="text" v-text="responseErrorMessage"></span>
                    </div>

                    <div class="w-full text-right">
                        <button v-if="!isRequesting" class="btn btn-warning" type="submit">
                            <i class="fas fa-sign-in-alt mr-1"></i> Log in
                        </button>
                        <button v-else class="btn-disabled" disabled >
                            <i class="fas fa-spin fa-spinner mr-2"></i> Please wait
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    
</template>

<script>
import mixins from "../../../utils/mixins"
import GuestHeader from "../includes/GuestHeader";
import FormInput from "../../../components/FormInput"

export default {
    name: "LoginPage",
    components: { GuestHeader, FormInput },

    computed: {
        validationErrors() {
            return this.errors.loginValidation || {};
        },
        responseErrorMessage() {
            return this.response.type == "error"
                ? this.response.message
                : null;
        },
    },

    data() {
        return {
            pageTitle: "Beepo Exam - Log in",
            form: this.$inertia.form({
                email: "",
                password: "",
            }),
            isRequesting: false,
        };
    },

    methods: {
        submit() {
            this.isRequesting = true;
            this.form.post('/api/login', {
                onFinish: () => this.onSubmitFinish()
            });
        },

        onSubmitFinish() {
            this.isRequesting = false;
            this.form.password = null;
        },

        failedToLogin(error) {
            this.promptFormErrors(this.$refs, error);
            this.form.password = "";
        },
    },

    mixins: [ mixins ],
    props: {
        errors: Object,
        response: Object,
    },

    watch: {
        validationErrors(newValue) {
            this.displayValidationErrors(this.$refs, newValue);
        },
    }
}
</script>