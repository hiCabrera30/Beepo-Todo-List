const mixins = {
    methods: {
        inititalizePageTitle() {
            if (this.pageTitle) {
                document.title = this.pageTitle;
            }
        },
        

        displayValidationErrors(refs, error) {
            for (const field in error) {
                if (refs[field]) {
                    refs[field].error = error[field];
                }
            }
        },


        promptErrors(message, title = "Something went wrong") {
            if (typeof message === "object") {
                title = message.title
                message = message.message
            }
            this.$swal({
                icon: "error", title, text: message,
                confirmButtonText: 'Okay',
            });
        },
    },
    mounted() {
        this.inititalizePageTitle();
    }
};

export default mixins;
export { mixins };